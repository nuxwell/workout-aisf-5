'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ExerciseTracker } from '@/components/workouts/exercise-tracker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Star, Share2 } from 'lucide-react';
import { workoutPlans } from '@/lib/workout-data';

interface ExerciseResults {
  reps: number;
  formScore: number;
  duration: number;
  feedback: string[];
}

export async function generateStaticParams() {
  const params: { id: string }[] = [];
  
  for (const plan of workoutPlans) {
    for (const day of plan.days) {
      // Add warmup exercises
      day.warmup.forEach((exercise: any) => {
        const id = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        params.push({ id });
      });

      // Add main workout exercises
      day.mainWorkout.forEach((exercise: any) => {
        const id = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        params.push({ id });
      });

      // Add cooldown exercises
      day.cooldown.forEach((exercise: any) => {
        const id = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        params.push({ id });
      });
    }
  }

  // Remove duplicates
  const uniqueParams = params.filter((param, index, self) => 
    index === self.findIndex(p => p.id === param.id)
  );

  return uniqueParams;
}

export default function ExercisePage() {
  const params = useParams();
  const router = useRouter();
  const [exercise, setExercise] = useState<any>(null);
  const [results, setResults] = useState<ExerciseResults | null>(null);
  const [showTracker, setShowTracker] = useState(false);

  useEffect(() => {
    // Find exercise by ID across all workout plans
    const exerciseId = params.id as string;
    
    for (const plan of workoutPlans) {
      for (const day of plan.days) {
        // Check warmup exercises
        const warmupExercise = day.warmup.find((ex: any) => 
          ex.name.toLowerCase().replace(/[^a-z0-9]/g, '') === exerciseId
        );
        if (warmupExercise) {
          setExercise({ ...warmupExercise, section: 'warmup', day: day.day, plan: plan.name });
          return;
        }

        // Check main workout exercises
        const mainExercise = day.mainWorkout.find((ex: any) => 
          ex.name.toLowerCase().replace(/[^a-z0-9]/g, '') === exerciseId
        );
        if (mainExercise) {
          setExercise({ ...mainExercise, section: 'main', day: day.day, plan: plan.name });
          return;
        }

        // Check cooldown exercises
        const cooldownExercise = day.cooldown.find((ex: any) => 
          ex.name.toLowerCase().replace(/[^a-z0-9]/g, '') === exerciseId
        );
        if (cooldownExercise) {
          setExercise({ ...cooldownExercise, section: 'cooldown', day: day.day, plan: plan.name });
          return;
        }
      }
    }
  }, [params.id]);

  const handleExerciseComplete = (exerciseResults: ExerciseResults) => {
    setResults(exerciseResults);
    setShowTracker(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Fair';
    return 'Needs Improvement';
  };

  if (!exercise) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Exercise Not Found</h1>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  if (showTracker) {
    return (
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button variant="outline" onClick={() => setShowTracker(false)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Exercise
            </Button>
          </div>
          <ExerciseTracker
            exercise={exercise}
            onComplete={handleExerciseComplete}
            onClose={() => setShowTracker(false)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Workouts
          </Button>
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Share Exercise
          </Button>
        </div>

        {/* Exercise Details */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">{exercise.name}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {exercise.plan} • Day {exercise.day} • {exercise.section}
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={exercise.trackingQuality === 'Excellent' ? 'default' : 'secondary'}>
                  {exercise.trackingQuality} Tracking
                </Badge>
                <Badge variant="outline">
                  {exercise.reps || exercise.duration}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{exercise.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium mb-1">Focus Area</h4>
                <p className="text-sm text-muted-foreground">{exercise.focus}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Target</h4>
                <p className="text-sm text-muted-foreground">
                  {exercise.reps || exercise.duration}
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">AI Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  MediaPipe Pose Detection
                </p>
              </div>
            </div>

            {/* Exercise Images */}
            {exercise.images && exercise.images.length > 0 && (
              <div>
                <h3 className="font-semibold mb-4">Form Guide</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {exercise.images.map((image: string, index: number) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${exercise.name} step ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-4">
              <Button onClick={() => setShowTracker(true)} className="flex-1">
                Start AI-Tracked Exercise
              </Button>
              <Button variant="outline">
                View Instructions
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {results && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Exercise Completed!</span>
              </CardTitle>
              <CardDescription>
                Great job! Here's your performance summary.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{results.reps}</div>
                  <div className="text-sm text-muted-foreground">Reps Completed</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className={`text-3xl font-bold ${getScoreColor(results.formScore)}`}>
                    {results.formScore}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Form Score • {getScoreLabel(results.formScore)}
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">
                    {Math.floor(results.duration / 60)}:{(results.duration % 60).toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
              </div>

              {results.feedback.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">AI Feedback</h4>
                  <div className="space-y-2">
                    {results.feedback.map((feedback, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{feedback}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-4">
                <Button onClick={() => setShowTracker(true)} className="flex-1">
                  Try Again
                </Button>
                <Button variant="outline" onClick={() => router.push('/workouts')}>
                  Back to Workouts
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}