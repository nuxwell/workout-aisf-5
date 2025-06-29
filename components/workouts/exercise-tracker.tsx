'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Camera, 
  CameraOff, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle,
  AlertTriangle,
  Target,
  Timer,
  Activity,
  Zap
} from 'lucide-react';

interface Exercise {
  name: string;
  reps?: string;
  duration?: string;
  focus: string;
  trackingQuality: string;
  description: string;
  trackingKey: string;
}

interface ExerciseTrackerProps {
  exercise: Exercise;
  onComplete?: (results: ExerciseResults) => void;
  onClose?: () => void;
}

interface ExerciseResults {
  reps: number;
  formScore: number;
  duration: number;
  feedback: string[];
}

// Exercise tracking configurations
const EXERCISE_CONFIGS = {
  'march_in_place': {
    thresholds: { up: 0.3, down: 0.7 },
    landmarks: ['LEFT_KNEE', 'RIGHT_KNEE', 'LEFT_HIP', 'RIGHT_HIP'],
    minAngle: 70,
    maxAngle: 140
  },
  'pushup': {
    thresholds: { up: 150, down: 85 },
    landmarks: ['LEFT_SHOULDER', 'LEFT_ELBOW', 'LEFT_WRIST', 'RIGHT_SHOULDER', 'RIGHT_ELBOW', 'RIGHT_WRIST'],
    minAngle: 70,
    maxAngle: 170
  },
  'squat': {
    thresholds: { up: 160, down: 90 },
    landmarks: ['LEFT_HIP', 'LEFT_KNEE', 'LEFT_ANKLE', 'RIGHT_HIP', 'RIGHT_KNEE', 'RIGHT_ANKLE'],
    minAngle: 70,
    maxAngle: 170
  },
  'plank': {
    thresholds: { good: 170, poor: 140 },
    landmarks: ['LEFT_SHOULDER', 'LEFT_HIP', 'LEFT_KNEE'],
    minAngle: 160,
    maxAngle: 180
  },
  'lunge': {
    thresholds: { up: 160, down: 90 },
    landmarks: ['LEFT_HIP', 'LEFT_KNEE', 'LEFT_ANKLE'],
    minAngle: 70,
    maxAngle: 170
  },
  'arm_circles': {
    thresholds: { extended: 160, contracted: 30 },
    landmarks: ['LEFT_SHOULDER', 'LEFT_ELBOW', 'LEFT_WRIST'],
    minAngle: 20,
    maxAngle: 180
  }
};

export function ExerciseTracker({ exercise, onComplete, onClose }: ExerciseTrackerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [repCount, setRepCount] = useState(0);
  const [formScore, setFormScore] = useState(0);
  const [currentState, setCurrentState] = useState('ready');
  const [feedback, setFeedback] = useState<string[]>([]);
  const [duration, setDuration] = useState(0);
  const [targetReps, setTargetReps] = useState(0);
  const [poseInstance, setPoseInstance] = useState<any>(null);
  const [cameraInstance, setCameraInstance] = useState<any>(null);
  const startTimeRef = useRef<number>(0);
  const exerciseStateRef = useRef('up');
  const formScoresRef = useRef<number[]>([]);

  // Parse target reps from exercise
  useEffect(() => {
    if (exercise.reps) {
      const repsMatch = exercise.reps.match(/\d+/);
      if (repsMatch) {
        setTargetReps(parseInt(repsMatch[0]));
      }
    } else if (exercise.duration) {
      // For time-based exercises, set a reasonable rep target
      setTargetReps(exercise.name.toLowerCase().includes('plank') ? 1 : 20);
    }
  }, [exercise]);

  // Calculate angle between three points
  const calculateAngle = useCallback((a: any, b: any, c: any) => {
    const radians = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
    let angle = Math.abs(radians * 180.0 / Math.PI);
    if (angle > 180.0) {
      angle = 360.0 - angle;
    }
    return angle;
  }, []);

  // Get exercise tracking key
  const getTrackingKey = useCallback((exerciseName: string) => {
    const name = exerciseName.toLowerCase().replace(/[^a-z]/g, '_');
    if (name.includes('march')) return 'march_in_place';
    if (name.includes('push')) return 'pushup';
    if (name.includes('squat')) return 'squat';
    if (name.includes('plank')) return 'plank';
    if (name.includes('lunge')) return 'lunge';
    if (name.includes('arm') && name.includes('circle')) return 'arm_circles';
    return 'pushup'; // Default fallback
  }, []);

  // Process pose results
  const onPoseResults = useCallback((results: any) => {
    if (!results.poseLandmarks || !canvasRef.current || !videoRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear and draw video frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (results.image) {
      ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
    }

    const landmarks = results.poseLandmarks;
    const trackingKey = getTrackingKey(exercise.name);
    const config = EXERCISE_CONFIGS[trackingKey as keyof typeof EXERCISE_CONFIGS];

    if (!config) return;

    try {
      let angle = 0;
      let formQuality = 0;

      // Calculate angles based on exercise type
      switch (trackingKey) {
        case 'march_in_place':
          const leftKnee = landmarks[25]; // LEFT_KNEE
          const rightKnee = landmarks[26]; // RIGHT_KNEE
          const leftHip = landmarks[23]; // LEFT_HIP
          const rightHip = landmarks[24]; // RIGHT_HIP
          
          if (leftKnee && rightKnee && leftHip && rightHip) {
            const leftKneeHeight = leftKnee.y;
            const rightKneeHeight = rightKnee.y;
            const hipHeight = (leftHip.y + rightHip.y) / 2;
            
            // Check if either knee is raised
            const leftRaised = leftKneeHeight < hipHeight - 0.1;
            const rightRaised = rightKneeHeight < hipHeight - 0.1;
            
            if ((leftRaised || rightRaised) && exerciseStateRef.current === 'down') {
              exerciseStateRef.current = 'up';
              setRepCount(prev => prev + 1);
              formScoresRef.current.push(85 + Math.random() * 15); // Simulate form score
            } else if (!leftRaised && !rightRaised && exerciseStateRef.current === 'up') {
              exerciseStateRef.current = 'down';
            }
            
            formQuality = leftRaised || rightRaised ? 90 : 70;
          }
          break;

        case 'pushup':
          const leftShoulder = landmarks[11];
          const leftElbow = landmarks[13];
          const leftWrist = landmarks[15];
          const rightShoulder = landmarks[12];
          const rightElbow = landmarks[14];
          const rightWrist = landmarks[16];

          if (leftShoulder && leftElbow && leftWrist && rightShoulder && rightElbow && rightWrist) {
            const leftAngle = calculateAngle(leftShoulder, leftElbow, leftWrist);
            const rightAngle = calculateAngle(rightShoulder, rightElbow, rightWrist);
            angle = (leftAngle + rightAngle) / 2;

            if (angle < config.thresholds.down && exerciseStateRef.current === 'up') {
              exerciseStateRef.current = 'down';
              setCurrentState('down');
            } else if (angle > config.thresholds.up && exerciseStateRef.current === 'down') {
              exerciseStateRef.current = 'up';
              setRepCount(prev => prev + 1);
              setCurrentState('up');
              formScoresRef.current.push(Math.min(100, Math.max(60, 100 - Math.abs(angle - 160) * 2)));
            }

            formQuality = Math.min(100, Math.max(0, 100 - Math.abs(angle - 120) * 1.5));
          }
          break;

        case 'squat':
          const leftHipS = landmarks[23];
          const leftKneeS = landmarks[25];
          const leftAnkleS = landmarks[27];

          if (leftHipS && leftKneeS && leftAnkleS) {
            angle = calculateAngle(leftHipS, leftKneeS, leftAnkleS);

            if (angle < config.thresholds.down && exerciseStateRef.current === 'up') {
              exerciseStateRef.current = 'down';
              setCurrentState('down');
            } else if (angle > config.thresholds.up && exerciseStateRef.current === 'down') {
              exerciseStateRef.current = 'up';
              setRepCount(prev => prev + 1);
              setCurrentState('up');
              formScoresRef.current.push(Math.min(100, Math.max(60, 100 - Math.abs(angle - 140) * 1.5)));
            }

            formQuality = Math.min(100, Math.max(0, 100 - Math.abs(angle - 120) * 2));
          }
          break;

        case 'plank':
          const shoulderP = landmarks[11];
          const hipP = landmarks[23];
          const kneeP = landmarks[25];

          if (shoulderP && hipP && kneeP) {
            angle = calculateAngle(shoulderP, hipP, kneeP);
            formQuality = angle > config.thresholds.good ? 95 : angle > config.thresholds.poor ? 75 : 50;
            
            // For plank, we track time rather than reps
            if (formQuality > 70) {
              setCurrentState('holding');
            } else {
              setCurrentState('adjust_form');
            }
          }
          break;
      }

      // Update form score
      if (formQuality > 0) {
        setFormScore(formQuality);
      }

      // Draw pose landmarks
      if (window.drawConnectors && window.drawLandmarks) {
        window.drawConnectors(ctx, landmarks, window.POSE_CONNECTIONS, {
          color: formQuality > 80 ? '#00FF00' : formQuality > 60 ? '#FFFF00' : '#FF0000',
          lineWidth: 4
        });
        window.drawLandmarks(ctx, landmarks, {
          color: '#FF0000',
          radius: 6
        });
      }

      // Display angle for debugging
      ctx.fillStyle = 'blue';
      ctx.font = '18px Arial';
      ctx.fillText(`Angle: ${angle.toFixed(0)}°`, 10, 30);
      ctx.fillText(`Form: ${formQuality.toFixed(0)}%`, 10, 60);

    } catch (error) {
      console.error('Error processing pose:', error);
    }
  }, [exercise.name, calculateAngle, getTrackingKey]);

  // Initialize MediaPipe
  useEffect(() => {
    const initializeMediaPipe = async () => {
      try {
        // Load MediaPipe scripts
        await loadMediaPipeScripts();
        
        if (window.Pose) {
          const pose = new window.Pose({
            locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
          });

          pose.setOptions({
            modelComplexity: 1,
            smoothLandmarks: true,
            enableSegmentation: false,
            smoothSegmentation: false,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
          });

          pose.onResults(onPoseResults);
          setPoseInstance(pose);
        }
      } catch (error) {
        console.error('Failed to initialize MediaPipe:', error);
        setFeedback(['Failed to load AI tracking. Please refresh the page.']);
      }
    };

    initializeMediaPipe();
  }, [onPoseResults]);

  // Load MediaPipe scripts
  const loadMediaPipeScripts = () => {
    return new Promise((resolve, reject) => {
      if (window.Pose) {
        resolve(true);
        return;
      }

      const scripts = [
        'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js',
        'https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js',
        'https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js',
        'https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js'
      ];

      let loadedCount = 0;
      
      scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
          loadedCount++;
          if (loadedCount === scripts.length) {
            resolve(true);
          }
        };
        script.onerror = reject;
        document.head.appendChild(script);
      });
    });
  };

  // Start camera
  const startCamera = async () => {
    try {
      if (!videoRef.current || !poseInstance) return;

      const camera = new window.Camera(videoRef.current, {
        onFrame: async () => {
          if (poseInstance && videoRef.current) {
            await poseInstance.send({ image: videoRef.current });
          }
        },
        width: 640,
        height: 480
      });

      await camera.start();
      setCameraInstance(camera);
      setCameraActive(true);
      setFeedback(['Camera started. Position yourself in view and start exercising!']);
    } catch (error) {
      console.error('Camera error:', error);
      setFeedback(['Camera access denied. Please allow camera permissions.']);
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (cameraInstance) {
      cameraInstance.stop();
      setCameraInstance(null);
    }
    setCameraActive(false);
  };

  // Start tracking
  const startTracking = () => {
    setIsTracking(true);
    startTimeRef.current = Date.now();
    setCurrentState('tracking');
    setFeedback(['Exercise started! Follow the form guidance.']);
  };

  // Stop tracking
  const stopTracking = () => {
    setIsTracking(false);
    const endTime = Date.now();
    const totalDuration = Math.round((endTime - startTimeRef.current) / 1000);
    setDuration(totalDuration);
    setCurrentState('completed');

    const avgFormScore = formScoresRef.current.length > 0 
      ? formScoresRef.current.reduce((a, b) => a + b, 0) / formScoresRef.current.length 
      : formScore;

    const results: ExerciseResults = {
      reps: repCount,
      formScore: Math.round(avgFormScore),
      duration: totalDuration,
      feedback: feedback
    };

    onComplete?.(results);
  };

  // Reset tracking
  const resetTracking = () => {
    setRepCount(0);
    setFormScore(0);
    setDuration(0);
    setCurrentState('ready');
    setFeedback([]);
    exerciseStateRef.current = 'up';
    formScoresRef.current = [];
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTracking) {
      interval = setInterval(() => {
        const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
        setDuration(elapsed);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking]);

  const progress = targetReps > 0 ? (repCount / targetReps) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Exercise Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5" />
                <span>{exercise.name}</span>
              </CardTitle>
              <CardDescription>{exercise.description}</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Camera className="h-3 w-3" />
                <span>{exercise.trackingQuality}</span>
              </Badge>
              <Badge variant="outline">
                {exercise.reps || exercise.duration}
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Video Feed */}
      <Card>
        <CardContent className="p-6">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              playsInline
            />
            <canvas
              ref={canvasRef}
              width={640}
              height={480}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {!cameraActive && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Camera not active</p>
                </div>
              </div>
            )}

            {/* Overlay Stats */}
            {cameraActive && (
              <div className="absolute top-4 left-4 space-y-2">
                <div className="bg-black/70 text-white px-3 py-1 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4" />
                    <span>Reps: {repCount}/{targetReps}</span>
                  </div>
                </div>
                <div className="bg-black/70 text-white px-3 py-1 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4" />
                    <span>Form: {Math.round(formScore)}%</span>
                  </div>
                </div>
                <div className="bg-black/70 text-white px-3 py-1 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Timer className="h-4 w-4" />
                    <span>{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Status Indicator */}
            <div className="absolute top-4 right-4">
              <div className={`px-3 py-1 rounded-lg text-white font-medium ${
                currentState === 'tracking' ? 'bg-green-600' :
                currentState === 'down' ? 'bg-blue-600' :
                currentState === 'up' ? 'bg-purple-600' :
                currentState === 'holding' ? 'bg-orange-600' :
                currentState === 'adjust_form' ? 'bg-red-600' :
                'bg-gray-600'
              }`}>
                {currentState === 'tracking' ? 'Tracking' :
                 currentState === 'down' ? 'Down' :
                 currentState === 'up' ? 'Up' :
                 currentState === 'holding' ? 'Hold' :
                 currentState === 'adjust_form' ? 'Adjust Form' :
                 'Ready'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{repCount}</div>
              <div className="text-sm text-muted-foreground">Reps Completed</div>
              {targetReps > 0 && (
                <Progress value={progress} className="mt-2" />
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{Math.round(formScore)}%</div>
              <div className="text-sm text-muted-foreground">Form Score</div>
              <Progress value={formScore} className="mt-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground">Duration</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback */}
      {feedback.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <div className="space-y-2">
              {feedback.map((msg, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span>{msg}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Controls */}
      <div className="flex space-x-4">
        {!cameraActive ? (
          <Button onClick={startCamera} className="flex-1">
            <Camera className="h-4 w-4 mr-2" />
            Start Camera
          </Button>
        ) : (
          <Button onClick={stopCamera} variant="outline" className="flex-1">
            <CameraOff className="h-4 w-4 mr-2" />
            Stop Camera
          </Button>
        )}

        {cameraActive && !isTracking && (
          <Button onClick={startTracking} className="flex-1">
            <Play className="h-4 w-4 mr-2" />
            Start Exercise
          </Button>
        )}

        {isTracking && (
          <Button onClick={stopTracking} variant="destructive" className="flex-1">
            <Pause className="h-4 w-4 mr-2" />
            Complete Exercise
          </Button>
        )}

        <Button onClick={resetTracking} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>

        {onClose && (
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        )}
      </div>
    </div>
  );
}

// Extend window type for MediaPipe
declare global {
  interface Window {
    Pose: any;
    Camera: any;
    drawConnectors: any;
    drawLandmarks: any;
    POSE_CONNECTIONS: any;
    POSE_LANDMARKS: any;
  }
}