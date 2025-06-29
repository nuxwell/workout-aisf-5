'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Target, Zap, Play, Pause, RotateCcw } from 'lucide-react';

interface Exercise {
  name: string;
  description: string;
  duration?: string;
  reps?: string;
  focus: string;
  trackingQuality: string;
  images: string[];
}

interface ExercisePageClientProps {
  exercise: Exercise;
}

export function ExercisePageClient({ exercise }: ExercisePageClientProps) {
  // Helper function to parse duration string to seconds
  const parseDurationToSeconds = (duration?: string): number => {
    if (!duration) return 60; // Default to 60 seconds
    
    const lowerDuration = duration.toLowerCase();
    
    // Extract numbers from the duration string
    const numbers = lowerDuration.match(/\d+/g);
    if (!numbers || numbers.length === 0) return 60;
    
    const value = parseInt(numbers[0]);
    
    if (lowerDuration.includes('minute')) {
      return value * 60;
    } else if (lowerDuration.includes('second')) {
      return value;
    } else {
      // Default to seconds if no unit specified
      return value;
    }
  };

  const durationInSeconds = parseDurationToSeconds(exercise.duration);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          setProgress(((durationInSeconds - newTime) / durationInSeconds) * 100);
          return newTime;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, durationInSeconds]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(durationInSeconds);
    setProgress(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
      case 'low': 
        return 'bg-green-100 text-green-800';
      case 'intermediate':
      case 'medium': 
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
      case 'high': 
        return 'bg-red-100 text-red-800';
      default: 
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{exercise.name}</h1>
          <Badge className={getDifficultyColor(exercise.trackingQuality)}>
            {exercise.trackingQuality}
          </Badge>
        </div>
        <p className="text-gray-600 text-lg">{exercise.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timer Section */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                Exercise Timer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-blue-600 mb-2">
                  {formatTime(timeLeft)}
                </div>
                <Progress value={progress} className="w-full" />
              </div>
              
              <div className="flex gap-2 justify-center">
                {!isActive ? (
                  <Button onClick={handleStart} className="flex-1">
                    <Play className="h-4 w-4 mr-2" />
                    Start
                  </Button>
                ) : (
                  <Button onClick={handlePause} variant="outline" className="flex-1">
                    <Pause className="h-4 w-4 mr-2" />
                    Pause
                  </Button>
                )}
                <Button onClick={handleReset} variant="outline">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Target className="h-4 w-4 mx-auto mb-1 text-gray-600" />
                  <div className="font-semibold">{exercise.duration || `${durationInSeconds}s`}</div>
                  <div className="text-gray-600">Duration</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Zap className="h-4 w-4 mx-auto mb-1 text-gray-600" />
                  <div className="font-semibold">{exercise.focus}</div>
                  <div className="text-gray-600">Focus</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="instructions" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="tips">Tips</TabsTrigger>
              <TabsTrigger value="muscles">Details</TabsTrigger>
            </TabsList>
            
            <TabsContent value="instructions" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>How to Perform</CardTitle>
                  <CardDescription>
                    Exercise description and instructions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    <span className="text-gray-700">{exercise.description}</span>
                  </div>
                  {exercise.reps && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-800">Repetitions:</div>
                      <div className="text-blue-700">{exercise.reps}</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tips" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Exercise Tips</CardTitle>
                  <CardDescription>
                    General guidance for this exercise
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600">
                    <p>Focus on proper form and controlled movements. Listen to your body and adjust intensity as needed.</p>
                    <p className="mt-2">Maintain steady breathing throughout the exercise.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="muscles" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Exercise Details</CardTitle>
                  <CardDescription>
                    Additional information about this exercise
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">Focus Area:</div>
                      <Badge variant="secondary" className="text-sm">
                        {exercise.focus}
                      </Badge>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">Tracking Quality:</div>
                      <Badge variant="secondary" className="text-sm">
                        {exercise.trackingQuality}
                      </Badge>
                    </div>
                    {exercise.duration && (
                      <div>
                        <div className="font-semibold text-gray-800 mb-1">Duration:</div>
                        <div className="text-gray-600">{exercise.duration}</div>
                      </div>
                    )}
                    {exercise.reps && (
                      <div>
                        <div className="font-semibold text-gray-800 mb-1">Repetitions:</div>
                        <div className="text-gray-600">{exercise.reps}</div>
                      </div>
                    )}
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