import { workoutPlans } from '@/lib/workout-data';
import { ExercisePageClient } from '@/components/workouts/exercise-page-client';
import { notFound } from 'next/navigation';

// Generate static params for all exercises
export async function generateStaticParams() {
  const exerciseIds = new Set<string>();
  
  workoutPlans.forEach(plan => {
    plan.days.forEach(day => {
      // Add warmup exercises
      day.warmup.forEach(exercise => {
        const id = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        exerciseIds.add(id);
      });
      
      // Add main workout exercises
      day.mainWorkout.forEach(exercise => {
        const id = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        exerciseIds.add(id);
      });
      
      // Add cooldown exercises
      day.cooldown.forEach(exercise => {
        const id = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        exerciseIds.add(id);
      });
    });
  });
  
  return Array.from(exerciseIds).map(id => ({ id }));
}

interface ExercisePageProps {
  params: {
    id: string;
  };
}

export default function ExercisePage({ params }: ExercisePageProps) {
  // Find the exercise data on the server
  let exerciseData = null;
  
  for (const plan of workoutPlans) {
    for (const day of plan.days) {
      // Check warmup exercises
      for (const exercise of day.warmup) {
        const exerciseId = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (exerciseId === params.id) {
          exerciseData = exercise;
          break;
        }
      }
      
      // Check main workout exercises
      if (!exerciseData) {
        for (const exercise of day.mainWorkout) {
          const exerciseId = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
          if (exerciseId === params.id) {
            exerciseData = exercise;
            break;
          }
        }
      }
      
      // Check cooldown exercises
      if (!exerciseData) {
        for (const exercise of day.cooldown) {
          const exerciseId = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
          if (exerciseId === params.id) {
            exerciseData = exercise;
            break;
          }
        }
      }
      
      if (exerciseData) break;
    }
    if (exerciseData) break;
  }
  
  if (!exerciseData) {
    notFound();
  }
  
  return <ExercisePageClient exercise={exerciseData} />;
}