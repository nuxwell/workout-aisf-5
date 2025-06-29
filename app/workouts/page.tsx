'use client';

import { useState } from 'react';
import { WorkoutCard } from '@/components/workouts/workout-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Dumbbell, 
  Plus, 
  Search,
  TrendingUp,
  Clock,
  Target,
  Award,
  Play,
  Calendar,
  Users,
  Camera,
  Zap,
  Heart,
  CheckCircle,
  Star,
  Settings,
  BarChart3,
  Timer,
  Activity,
  ChevronRight,
  Image as ImageIcon,
  ChevronLeft
} from 'lucide-react';
import { mockWorkouts, mockFitnessTests } from '@/lib/mock-data';
import { workoutPlans } from '@/lib/workout-data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function WorkoutsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [activeDay, setActiveDay] = useState(1);
  const [selectedExercise, setSelectedExercise] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get the 6-day standing workout plan
  const standingWorkoutPlan = workoutPlans.find(plan => plan.id === '6-day-standing');
  const currentDay = standingWorkoutPlan?.days.find(day => day.day === activeDay);

  // Mock progress data
  const workoutProgress = {
    currentWeek: 2,
    totalWeeks: 4,
    completedDays: 8,
    totalDays: 24,
    weeklyProgress: [
      { day: 'Monday', completed: true, name: 'Full Body Intro' },
      { day: 'Tuesday', completed: true, name: 'Upper Body' },
      { day: 'Wednesday', completed: false, name: 'Lower Body', isToday: true },
      { day: 'Thursday', completed: false, name: 'Core + Stability' },
      { day: 'Friday', completed: false, name: 'Full Body Strength' },
      { day: 'Saturday', completed: false, name: 'Flexibility + Flow' }
    ],
    streakDays: 5,
    avgFormScore: 87.3
  };

  const filteredWorkouts = mockWorkouts.filter(workout => {
    const matchesSearch = workout.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || workout.type === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const upcomingWorkouts = filteredWorkouts.filter(w => new Date(w.date) > new Date());
  const completedWorkouts = filteredWorkouts.filter(w => new Date(w.date) <= new Date());

  const latestFitnessTest = mockFitnessTests[0];
  const avgFormScore = completedWorkouts.length > 0 
    ? completedWorkouts.reduce((acc, workout) => {
        const workoutAvg = workout.exercises.reduce((exerciseAcc, exercise) => {
          const exerciseScore = exercise.sets.reduce((setAcc, set) => 
            setAcc + (set.formScore || 0), 0) / exercise.sets.length;
          return exerciseAcc + exerciseScore;
        }, 0) / workout.exercises.length;
        return acc + workoutAvg;
      }, 0) / completedWorkouts.length
    : 0;

  const completionPercentage = (workoutProgress.completedDays / workoutProgress.totalDays) * 100;

  const nextImage = () => {
    if (selectedExercise) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedExercise.images.length);
    }
  };

  const prevImage = () => {
    if (selectedExercise) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedExercise.images.length) % selectedExercise.images.length);
    }
  };

  const startExercise = (exercise: any) => {
    const exerciseId = exercise.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    router.push(`/workouts/exercise/${exerciseId}`);
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI-Powered Workouts</h1>
          <p className="text-muted-foreground mt-1">
            High-Confidence 6-Day Standing Workout Plan with MediaPipe tracking
          </p>
        </div>
        <Button asChild>
          <Link href="/workouts/manage">
            <Settings className="h-4 w-4 mr-2" />
            Manage Plans
          </Link>
        </Button>
      </div>

      {/* Main Workout Plan */}
      {standingWorkoutPlan && (
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Dumbbell className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-blue-900 dark:text-blue-100">
                    {standingWorkoutPlan.name}
                  </CardTitle>
                  <CardDescription className="text-blue-700 dark:text-blue-300 text-base">
                    {standingWorkoutPlan.description}
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-blue-600 text-white">
                  <Camera className="h-3 w-3 mr-1" />
                  MediaPipe Ready
                </Badge>
                <Badge className="bg-green-600 text-white">
                  Age 40+ Optimized
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Plan Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{standingWorkoutPlan.days.length}</div>
                <div className="text-sm text-muted-foreground">Days/Week</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">30</div>
                <div className="text-sm text-muted-foreground">Min/Day</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{workoutProgress.streakDays}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{workoutProgress.avgFormScore}%</div>
                <div className="text-sm text-muted-foreground">Avg Form</div>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  Overall Progress - Week {workoutProgress.currentWeek} of {workoutProgress.totalWeeks}
                </span>
                <span className="text-sm text-blue-700 dark:text-blue-300">
                  {workoutProgress.completedDays}/{workoutProgress.totalDays} days
                </span>
              </div>
              <Progress value={completionPercentage} className="h-3" />
              <div className="flex items-center justify-between text-xs text-blue-600 dark:text-blue-400">
                <span>{completionPercentage.toFixed(0)}% Complete</span>
                <span>{workoutProgress.totalDays - workoutProgress.completedDays} days remaining</span>
              </div>
            </div>

            {/* Weekly Schedule */}
            <div className="space-y-3">
              <h4 className="font-medium text-blue-900 dark:text-blue-100">This Week's Schedule</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {workoutProgress.weeklyProgress.map((day, index) => (
                  <Button
                    key={day.day}
                    variant={day.isToday ? 'default' : day.completed ? 'secondary' : 'outline'}
                    size="sm"
                    onClick={() => setActiveDay(index + 1)}
                    className={`flex flex-col h-auto py-3 ${
                      day.isToday
                        ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                        : day.completed
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                        : ''
                    }`}
                  >
                    <span className="text-xs font-medium">{day.day}</span>
                    <span className="text-xs mt-1">{day.name.split(' ')[0]}</span>
                    {day.completed && (
                      <CheckCircle className="h-3 w-3 mx-auto mt-1" />
                    )}
                    {day.isToday && (
                      <div className="text-xs mt-1 font-medium">Today</div>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                <Play className="h-4 w-4 mr-2" />
                Start Today's Workout
              </Button>
              <Button variant="outline" asChild>
                <Link href="/workouts/manage">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Full Plan
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fitness Score</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{latestFitnessTest?.score || 0}</div>
            <p className="text-xs text-muted-foreground">Latest assessment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Form Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{workoutProgress.avgFormScore}%</div>
            <p className="text-xs text-muted-foreground">AI-analyzed form quality</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workouts Completed</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{workoutProgress.completedDays}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Workout Detail */}
      {currentDay && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Today: {currentDay.name}</CardTitle>
                <CardDescription className="mt-1">
                  {currentDay.description}
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Camera className="h-3 w-3" />
                  <span>MediaPipe Ready</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>30 min</span>
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="warmup" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="warmup">Warm-Up (5min)</TabsTrigger>
                <TabsTrigger value="main">Main Workout (20min)</TabsTrigger>
                <TabsTrigger value="cooldown">Cool-Down (5min)</TabsTrigger>
              </TabsList>

              <TabsContent value="warmup" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentDay.warmup.map((exercise, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => startExercise(exercise)}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{exercise.name}</h4>
                          <div className="flex items-center space-x-2">
                            <Badge variant={exercise.trackingQuality === 'Excellent' ? 'default' : 'secondary'} className="text-xs">
                              {exercise.trackingQuality}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedExercise(exercise);
                                setCurrentImageIndex(0);
                              }}
                            >
                              <ImageIcon className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {exercise.description}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center space-x-1">
                            <Target className="h-3 w-3" />
                            <span>{exercise.focus}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Camera className="h-3 w-3" />
                            <span>AI Tracked</span>
                          </span>
                        </div>
                        <Button size="sm" className="w-full mt-3">
                          <Play className="h-3 w-3 mr-1" />
                          Start Exercise
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="main" className="space-y-4">
                <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Timer className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-blue-900 dark:text-blue-100">
                      2 Rounds × 10 minutes each
                    </span>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Complete all exercises in sequence, then repeat for the second round.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentDay.mainWorkout.map((exercise, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => startExercise(exercise)}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{exercise.name}</h4>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {exercise.reps}
                            </Badge>
                            <Badge variant={exercise.trackingQuality === 'Excellent' ? 'default' : 'secondary'} className="text-xs">
                              {exercise.trackingQuality}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedExercise(exercise);
                                setCurrentImageIndex(0);
                              }}
                            >
                              <ImageIcon className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {exercise.description}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center space-x-1">
                            <Target className="h-3 w-3" />
                            <span>{exercise.focus}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Camera className="h-3 w-3" />
                            <span>Rep Counting</span>
                          </span>
                        </div>
                        <Button size="sm" className="w-full mt-3">
                          <Play className="h-3 w-3 mr-1" />
                          Start Exercise
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cooldown" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentDay.cooldown.map((exercise, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => startExercise(exercise)}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{exercise.name}</h4>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {exercise.duration}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedExercise(exercise);
                                setCurrentImageIndex(0);
                              }}
                            >
                              <ImageIcon className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {exercise.description}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center space-x-1">
                            <Heart className="h-3 w-3" />
                            <span>{exercise.focus}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <CheckCircle className="h-3 w-3" />
                            <span>Pose Detection</span>
                          </span>
                        </div>
                        <Button size="sm" className="w-full mt-3">
                          <Play className="h-3 w-3 mr-1" />
                          Start Exercise
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex space-x-4">
              <Button className="flex-1">
                <Play className="h-4 w-4 mr-2" />
                Start Today's Workout
              </Button>
              <Button variant="outline" asChild>
                <Link href="/workouts/manage">
                  <Settings className="h-4 w-4 mr-2" />
                  Customize Plan
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Additional Workouts Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Additional Workouts</CardTitle>
              <CardDescription>
                Explore other workout options and track your progress
              </CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Custom
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Custom Workout</DialogTitle>
                  <DialogDescription>
                    Design your own workout with AI form tracking
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="workoutName">Workout Name</Label>
                      <Input id="workoutName" placeholder="e.g., Upper Body Focus" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (minutes)</Label>
                      <Input id="duration" type="number" placeholder="30" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="exercises">Select Exercises</Label>
                    <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                      {['Push-ups', 'Squats', 'Planks', 'Lunges', 'Burpees', 'Mountain Climbers'].map((exercise) => (
                        <label key={exercise} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{exercise}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1">Create Workout</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Label htmlFor="search" className="sr-only">Search workouts</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search workouts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </select>
            </div>
          </div>

          {/* Workouts Tabs */}
          <Tabs defaultValue="upcoming" className="space-y-4">
            <TabsList>
              <TabsTrigger value="upcoming">
                Upcoming ({upcomingWorkouts.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({completedWorkouts.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingWorkouts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingWorkouts.map((workout) => (
                    <WorkoutCard 
                      key={workout.id} 
                      workout={workout}
                      onStart={(id) => console.log('Start workout:', id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Dumbbell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Focus on Your Main Plan</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Your 6-Day Standing Workout Plan is your primary focus. Additional workouts will appear here.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedWorkouts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedWorkouts.map((workout) => (
                    <WorkoutCard 
                      key={workout.id} 
                      workout={workout}
                      onView={(id) => console.log('View workout:', id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">No completed workouts</h3>
                  <p className="text-muted-foreground text-center">
                    Your completed workouts with AI form analysis will appear here.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Exercise Images Modal */}
      {selectedExercise && (
        <Dialog open={!!selectedExercise} onOpenChange={() => setSelectedExercise(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                <ImageIcon className="h-5 w-5" />
                <span>{selectedExercise.name} - Form Demonstration</span>
              </DialogTitle>
              <DialogDescription>
                Step-by-step visual guide for proper exercise form
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Image Carousel */}
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={selectedExercise.images[currentImageIndex]}
                    alt={`${selectedExercise.name} step ${currentImageIndex + 1}`}
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
                  {currentImageIndex + 1} / {selectedExercise.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {selectedExercise.images.map((image: string, index: number) => (
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
                      alt={`${selectedExercise.name} step ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Exercise Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Exercise Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Focus:</span>
                      <span>{selectedExercise.focus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tracking Quality:</span>
                      <Badge variant={selectedExercise.trackingQuality === 'Excellent' ? 'default' : 'secondary'}>
                        {selectedExercise.trackingQuality}
                      </Badge>
                    </div>
                    {selectedExercise.reps && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Repetitions:</span>
                        <span>{selectedExercise.reps}</span>
                      </div>
                    )}
                    {selectedExercise.duration && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span>{selectedExercise.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Instructions</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedExercise.description}
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1" onClick={() => startExercise(selectedExercise)}>
                  <Play className="h-4 w-4 mr-2" />
                  Start Exercise
                </Button>
                <Button variant="outline">
                  <Camera className="h-4 w-4 mr-2" />
                  AI Form Check
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}