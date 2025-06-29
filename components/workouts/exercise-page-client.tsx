'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExerciseTracker } from '@/components/workouts/exercise-tracker';
import { 
  Camera, 
  Target, 
  Zap, 
  Play, 
  ArrowLeft,
  Info,
  Lightbulb,
  Activity
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Exercise {
  name: string;
  description: string;
  duration?: string;
  reps?: string;
  focus: string;
  trackingQuality: string;
  images: string[];
  trackingKey?: string;
}

interface ExercisePageClientProps {
  exercise: Exercise;
}

interface ExerciseResults {
  reps: number;
  formScore: number;
  duration: number;
  feedback: string[];
}

export function ExercisePageClient({ exercise }: ExercisePageClientProps) {
  const router = useRouter();
  const [showTracker, setShowTracker] = useState(false);
  const [exerciseResults, setExerciseResults] = useState<ExerciseResults | null>(null);

  const handleStartExercise = () => {
    setShowTracker(true);
  };

  const handleExerciseComplete = (results: ExerciseResults) => {
    setExerciseResults(results);
    setShowTracker(false);
  };

  const handleCloseTracker = () => {
    setShowTracker(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'excellent':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'good': 
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'fair': 
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: 
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (showTracker) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={handleCloseTracker}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Exercise Details
          </Button>
          <h1 className="text-2xl font-bold">AI Exercise Tracking: {exercise.name}</h1>
          <p className="text-muted-foreground">Follow the on-screen guidance for proper form</p>
        </div>
        
        <ExerciseTracker 
          exercise={exercise}
          onComplete={handleExerciseComplete}
          onClose={handleCloseTracker}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <Button 
          variant="outline" 
          onClick={() => router.back()}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Workouts
        </Button>
        
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{exercise.name}</h1>
          <Badge className={getDifficultyColor(exercise.trackingQuality)}>
            <Camera className="h-3 w-3 mr-1" />
            {exercise.trackingQuality} Tracking
          </Badge>
        </div>
        <p className="text-gray-600 text-lg">{exercise.description}</p>
      </div>

      {/* Exercise Results */}
      {exerciseResults && (
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-800">
              <Activity className="h-5 w-5" />
              <span>Exercise Completed!</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{exerciseResults.reps}</div>
                <div className="text-sm text-green-700">Reps Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{exerciseResults.formScore}%</div>
                <div className="text-sm text-blue-700">Form Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {Math.floor(exerciseResults.duration / 60)}:{(exerciseResults.duration % 60).toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-purple-700">Duration</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Exercise Images */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="h-5 w-5" />
                <span>Exercise Demo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Image Gallery */}
              <div className="space-y-3">
                {exercise.images && exercise.images.length > 0 ? (
                  exercise.images.map((image, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={image}
                        alt={`${exercise.name} step ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <div className="aspect-video rounded-lg bg-gray-100 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <p>Exercise demonstration</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Exercise Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Target className="h-4 w-4 mx-auto mb-1 text-blue-600" />
                  <div className="font-semibold text-blue-800">
                    {exercise.reps || exercise.duration || 'Variable'}
                  </div>
                  <div className="text-xs text-blue-600">Target</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <Zap className="h-4 w-4 mx-auto mb-1 text-green-600" />
                  <div className="font-semibold text-green-800">{exercise.focus}</div>
                  <div className="text-xs text-green-600">Focus</div>
                </div>
              </div>

              {/* Start Exercise Button */}
              <Button 
                onClick={handleStartExercise} 
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Start AI Exercise Tracking
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="instructions" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="instructions" className="flex items-center space-x-2">
                <Info className="h-4 w-4" />
                <span>Instructions</span>
              </TabsTrigger>
              <TabsTrigger value="tips" className="flex items-center space-x-2">
                <Lightbulb className="h-4 w-4" />
                <span>Tips</span>
              </TabsTrigger>
              <TabsTrigger value="details" className="flex items-center space-x-2">
                <Activity className="h-4 w-4" />
                <span>Details</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="instructions" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>How to Perform {exercise.name}</CardTitle>
                  <CardDescription>
                    Step-by-step instructions for proper form
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Setup</h4>
                        <p className="text-blue-800">{exercise.description}</p>
                      </div>
                    </div>
                  </div>

                  {exercise.reps && (
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">Target Repetitions</span>
                      </div>
                      <p className="text-green-700">{exercise.reps}</p>
                    </div>
                  )}

                  {exercise.duration && (
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold text-purple-800">Target Duration</span>
                      </div>
                      <p className="text-purple-700">{exercise.duration}</p>
                    </div>
                  )}

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Camera className="h-5 w-5 text-yellow-600" />
                      <span className="font-semibold text-yellow-800">AI Tracking</span>
                    </div>
                    <p className="text-yellow-700">
                      This exercise uses AI-powered form analysis to provide real-time feedback on your technique.
                      Make sure you have good lighting and your full body is visible to the camera.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tips" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Exercise Tips & Safety</CardTitle>
                  <CardDescription>
                    Important guidance for safe and effective exercise
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Focus on proper form over speed or quantity</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Maintain steady, controlled breathing throughout the movement</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Listen to your body and stop if you feel pain or discomfort</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Use the AI feedback to improve your form in real-time</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Ensure adequate space around you for safe movement</p>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Lightbulb className="h-5 w-5 text-orange-600" />
                      <span className="font-semibold text-orange-800">Pro Tip</span>
                    </div>
                    <p className="text-orange-700">
                      Position yourself 3-6 feet from your camera for optimal AI tracking. 
                      Make sure your entire body is visible in the frame.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Exercise Details</CardTitle>
                  <CardDescription>
                    Technical information and specifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-gray-800 mb-2">Primary Focus</div>
                        <Badge variant="secondary" className="text-sm">
                          {exercise.focus}
                        </Badge>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-gray-800 mb-2">AI Tracking Quality</div>
                        <Badge className={getDifficultyColor(exercise.trackingQuality)}>
                          {exercise.trackingQuality}
                        </Badge>
                      </div>

                      {exercise.duration && (
                        <div>
                          <div className="font-semibold text-gray-800 mb-2">Duration</div>
                          <div className="text-gray-600">{exercise.duration}</div>
                        </div>
                      )}

                      {exercise.reps && (
                        <div>
                          <div className="font-semibold text-gray-800 mb-2">Repetitions</div>
                          <div className="text-gray-600">{exercise.reps}</div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-gray-800 mb-2">Equipment Needed</div>
                        <div className="text-gray-600">None (bodyweight exercise)</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-gray-800 mb-2">Space Required</div>
                        <div className="text-gray-600">Minimal (standing room)</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-gray-800 mb-2">Difficulty Level</div>
                        <div className="text-gray-600">Beginner-friendly</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-800 mb-2">AI Tracking Features</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Real-time form analysis</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Automatic rep counting</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Pose landmark detection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Performance scoring</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}