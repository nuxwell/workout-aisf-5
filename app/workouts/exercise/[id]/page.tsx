import { workoutPlans } from '@/lib/workout-data';
import { ExercisePageClient } from '@/components/workouts/exercise-page-client';
import { notFound } from 'next/navigation';

// Generate static params for all exercises
export async function generateStaticParams() {
  const exerciseIds = new Set<string>();
  
  // Add defensive checks to prevent runtime errors
  if (!Array.isArray(workoutPlans)) {
    return [];
  }
  
  workoutPlans.forEach(plan => {
    // Check if plan has days array
    if (!plan || !Array.isArray(plan.days)) {
      return;
    }
    
    plan.days.forEach(day => {
      // Check if day object exists
      if (!day) {
        return;
      }
      
      // Add warmup exercises with defensive checks
      if (Array.isArray(day.warmup)) {
        day.warmup.forEach(exercise => {
          if (exercise && typeof exercise.name === 'string') {
            const id = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (id) {
              exerciseIds.add(id);
            }
          }
        });
      }
      
      // Add main workout exercises with defensive checks
      if (Array.isArray(day.mainWorkout)) {
        day.mainWorkout.forEach(exercise => {
          if (exercise && typeof exercise.name === 'string') {
            const id = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (id) {
              exerciseIds.add(id);
            }
          }
        });
      }
      
      // Add cooldown exercises with defensive checks
      if (Array.isArray(day.cooldown)) {
        day.cooldown.forEach(exercise => {
          if (exercise && typeof exercise.name === 'string') {
            const id = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (id) {
              exerciseIds.add(id);
            }
          }
        });
      }
    });
  });
  
  return Array.from(exerciseIds).map(id => ({ id }));
}

interface ExercisePageProps {
  params: {
    id: string;
  };
}

export default async function ExercisePage({ params }: ExercisePageProps) {
  // Await params to fix Next.js warning
  const { id } = await params;
  
  // Find the exercise data on the server
  let exerciseData = null;
  
  for (const plan of workoutPlans) {
    if (!plan || !Array.isArray(plan.days)) {
      continue;
    }
    
    for (const day of plan.days) {
      if (!day) {
        continue;
      }
      
      // Check warmup exercises
      if (Array.isArray(day.warmup)) {
        for (const exercise of day.warmup) {
          if (exercise && typeof exercise.name === 'string') {
            const exerciseId = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (exerciseId === id) {
              exerciseData = exercise;
              break;
            }
          }
        }
      }
      
      // Check main workout exercises
      if (!exerciseData && Array.isArray(day.mainWorkout)) {
        for (const exercise of day.mainWorkout) {
          if (exercise && typeof exercise.name === 'string') {
            const exerciseId = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (exerciseId === id) {
              exerciseData = exercise;
              break;
            }
          }
        }
      }
      
      // Check cooldown exercises
      if (!exerciseData && Array.isArray(day.cooldown)) {
        for (const exercise of day.cooldown) {
          if (exercise && typeof exercise.name === 'string') {
            const exerciseId = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (exerciseId === id) {
              exerciseData = exercise;
              break;
            }
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