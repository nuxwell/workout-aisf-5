'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Clock, Dumbbell, TrendingUp, Play, Camera, Eye } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';

interface WorkoutCardProps {
  workout: {
    id: string;
    name: string;
    type: string;
    date: Date;
    duration: number;
    exercises: {
      id: string;
      name: string;
      sets: {
        id: string;
        reps: number;
        formScore?: number;
      }[];
    }[];
  };
  onStart?: (id: string) => void;
  onView?: (id: string) => void;
}

export function WorkoutCard({ workout, onStart, onView }: WorkoutCardProps) {
  const avgFormScore = workout.exercises.reduce((acc, exercise) => {
    const exerciseAvg = exercise.sets.reduce((setAcc, set) => 
      setAcc + (set.formScore || 0), 0) / exercise.sets.length;
    return acc + exerciseAvg;
  }, 0) / workout.exercises.length;

  const totalSets = workout.exercises.reduce((acc, exercise) => 
    acc + exercise.sets.length, 0);

  const isUpcoming = workout.date > new Date();
  const isCompleted = !isUpcoming && avgFormScore > 0;

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{workout.name}</CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant={workout.type === 'beginner' ? 'secondary' : 'default'}>
              {workout.type}
            </Badge>
            <Badge variant="outline" className="flex items-center space-x-1">
              <Camera className="h-3 w-3" />
              <span>AI</span>
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {format(workout.date, 'MMM d, yyyy')}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{workout.duration}min</span>
          </div>
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
            <span>{workout.exercises.length} exercises</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span>{totalSets} sets</span>
          </div>
        </div>

        {isCompleted && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>AI Form Score</span>
              <span className="font-medium">{avgFormScore.toFixed(1)}%</span>
            </div>
            <Progress value={avgFormScore} className="h-2" />
          </div>
        )}

        <div className="space-y-2">
          <p className="text-sm font-medium">Exercises:</p>
          <div className="flex flex-wrap gap-1">
            {workout.exercises.slice(0, 3).map((exercise, index) => (
              <Badge key={exercise.id} variant="outline" className="text-xs">
                {exercise.name}
              </Badge>
            ))}
            {workout.exercises.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{workout.exercises.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex space-x-2 pt-2">
          {isUpcoming ? (
            <Button onClick={() => onStart?.(workout.id)} className="flex-1">
              <Play className="h-4 w-4 mr-2" />
              Start AI Workout
            </Button>
          ) : (
            <Button variant="outline" onClick={() => onView?.(workout.id)} className="flex-1">
              <Eye className="h-4 w-4 mr-2" />
              View Results
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}