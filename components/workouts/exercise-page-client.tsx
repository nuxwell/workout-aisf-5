'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Camera,
  Target,
  Clock,
  Zap,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Timer,
  Heart,
  Activity
} from 'lucide-react';

interface Exercise {
  name: string;
  description: string;
  focus: string;
  trackingQuality: string;
  reps?: string;
  duration?: string;
  images: string[];
}

interface ExercisePageClientProps {
  exercise: Exercise;
}

export function ExercisePageClient({ exercise }: ExercisePageClientProps) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [currentRep, setCurrentRep] = useState(0);
  const [workoutTimer, setWorkoutTimer] = useState(0);
  const [formScore, setFormScore] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % exercise.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + exercise.images.length) % exercise.images.length);
  };

  const startWorkout = () => {
    setIsWorkoutActive(true);
    setCurrentRep(0);
    setWorkoutTimer(0);
    setFormScore(0);
    
    // Simulate AI tracking
    const interval = setInterval(() => {
      setWorkoutTimer(prev => prev + 1);
      
      // Simulate rep counting and form scoring
      if (Math.random() > 0.7) {
        setCurrentRep(prev => prev + 1);
        setFormScore(prev => Math.min(100, prev + Math.random() * 10));
      }
    }, 1000);

    // Auto-stop after target reps or duration
    setTimeout(() => {
      clearInterval(interval);
      setIsWorkoutActive(false);
    }, 30000); // 30 seconds demo
  };

  const stopWorkout = () => {
    setIsWorkoutActive(false);
  };

  const resetWorkout = () => {
    setIsWorkoutActive(false);
    setCurrentRep(0);
    setWorkoutTimer(0);
    setFormScore(0);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold">{exercise.name}</h1>
              <p className="text-muted-foreground mt-1">
                AI-Powered Exercise with MediaPipe Tracking
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant={exercise.trackingQuality === 'Excellent' ? 'default' : 'secondary'}>
              <Camera className="h-3 w-3 mr-1" />
              {exercise.trackingQuality} Tracking
            </Badge>
            <Badge variant="outline">
              <Target className="h-3 w-3 mr-1" />
              {exercise.focus}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Exercise Demonstration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Carousel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Exercise Demonstration</span>
                </CardTitle>
                <CardDescription>
                  Step-by-step visual guide for proper form
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={exercise.images[currentImageIndex]}
                      alt={`${exercise.name} step ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {exercise.images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {exercise.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index 
                          ? 'border-blue-500 ring-2 ring-blue-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${exercise.name} step ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Tracking Interface */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-blue-900 dark:text-blue-100">
                  <Zap className="h-5 w-5" />
                  <span>AI Form Tracking</span>
                </CardTitle>
                <CardDescription className="text-blue-700 dark:text-blue-300">
                  Real-time MediaPipe analysis of your exercise form
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Workout Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {exercise.reps ? currentRep : Math.floor(workoutTimer / 60)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {exercise.reps ? 'Reps' : 'Minutes'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{formScore.toFixed(0)}%</div>
                    <div className="text-sm text-muted-foreground">Form Score</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{workoutTimer}s</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                </div>

                {/* Form Score Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Real-time Form Analysis</span>
                    <span className="text-sm text-muted-foreground">{formScore.toFixed(1)}%</span>
                  </div>
                  <Progress value={formScore} className="h-3" />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Poor</span>
                    <span>Excellent</span>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex space-x-3">
                  {!isWorkoutActive ? (
                    <Button onClick={startWorkout} className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Play className="h-4 w-4 mr-2" />
                      Start AI Tracking
                    </Button>
                  ) : (
                    <Button onClick={stopWorkout} className="flex-1 bg-red-600 hover:bg-red-700">
                      <Pause className="h-4 w-4 mr-2" />
                      Stop Tracking
                    </Button>
                  )}
                  <Button variant="outline" onClick={resetWorkout}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>

                {/* AI Feedback */}
                {isWorkoutActive && (
                  <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-900 dark:text-blue-100">
                        Live Feedback
                      </span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      {formScore > 80 
                        ? "Excellent form! Keep it up!" 
                        : formScore > 60 
                        ? "Good form, try to maintain proper posture."
                        : "Focus on your form - slow down if needed."}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Exercise Details Sidebar */}
          <div className="space-y-6">
            {/* Exercise Info */}
            <Card>
              <CardHeader>
                <CardTitle>Exercise Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus Area:</span>
                    <span className="font-medium">{exercise.focus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tracking Quality:</span>
                    <Badge variant={exercise.trackingQuality === 'Excellent' ? 'default' : 'secondary'}>
                      {exercise.trackingQuality}
                    </Badge>
                  </div>
                  {exercise.reps && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Target Reps:</span>
                      <span className="font-medium">{exercise.reps}</span>
                    </div>
                  )}
                  {exercise.duration && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{exercise.duration}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exercise.description}
                </p>
              </CardContent>
            </Card>

            {/* AI Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>AI Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                    <Camera className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Pose Detection</p>
                    <p className="text-xs text-muted-foreground">Real-time form analysis</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Rep Counting</p>
                    <p className="text-xs text-muted-foreground">Automatic repetition tracking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg">
                    <Heart className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Form Scoring</p>
                    <p className="text-xs text-muted-foreground">Quality assessment</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-lg">
                    <Timer className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Progress Tracking</p>
                    <p className="text-xs text-muted-foreground">Performance analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Set Timer
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Set Rep Goal
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="h-4 w-4 mr-2" />
                  View History
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}