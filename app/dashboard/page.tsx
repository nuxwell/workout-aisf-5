'use client';

import { useAuth } from '@/lib/auth';
import { StatsCard } from '@/components/dashboard/stats-card';
import { BookingCard } from '@/components/bookings/booking-card';
import { WorkoutCard } from '@/components/workouts/workout-card';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
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
  Calendar, 
  Clock, 
  Users, 
  TrendingUp, 
  Award, 
  Target,
  Plus,
  ArrowRight,
  Settings,
  Palette,
  Dumbbell,
  Play,
  CheckCircle,
  Camera,
  Zap,
  Heart,
  Star,
  ChevronRight,
  Activity,
  Timer,
  BarChart3
} from 'lucide-react';
import { mockBookings, mockWorkouts, mockFitnessTests } from '@/lib/mock-data';
import { workoutPlans } from '@/lib/workout-data';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) return null;

  const upcomingBookings = mockBookings.filter(b => 
    new Date(b.slot.date) > new Date() && b.status === 'CONFIRMED'
  );

  const recentWorkouts = mockWorkouts.slice(0, 2);
  const latestFitnessTest = mockFitnessTests[0];

  // Get the 6-day standing workout plan
  const standingWorkoutPlan = workoutPlans.find(plan => plan.id === '6-day-standing');
  
  // Mock progress data for the workout plan
  const workoutProgress = {
    currentWeek: 2,
    totalWeeks: 4,
    completedDays: 8,
    totalDays: 24,
    currentDay: 3,
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

  const completionPercentage = (workoutProgress.completedDays / workoutProgress.totalDays) * 100;
  const weeklyCompletionPercentage = (workoutProgress.weeklyProgress.filter(d => d.completed).length / workoutProgress.weeklyProgress.length) * 100;

  return (
    <div className="p-6 space-y-8 bg-background transition-colors duration-300">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground mt-1">
            Here's your fitness journey overview
          </p>
        </div>
        
        {/* Theme Switcher */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Palette className="h-4 w-4" />
            <span>Appearance</span>
          </div>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="This Month's Sessions"
          value="12"
          description="Swimming & training sessions"
          icon={Calendar}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Total Workout Time"
          value="8.5h"
          description="Hours of training this month"
          icon={Clock}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Fitness Score"
          value={latestFitnessTest?.score.toString() || "0"}
          description="Latest assessment score"
          icon={Award}
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard
          title="Goals Achieved"
          value="3/5"
          description="Monthly fitness goals"
          icon={Target}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 6-Day Standing Workout Plan */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Workout Plan */}
          {standingWorkoutPlan && (
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Dumbbell className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-blue-900 dark:text-blue-100">
                        {standingWorkoutPlan.name}
                      </CardTitle>
                      <CardDescription className="text-blue-700 dark:text-blue-300">
                        Week {workoutProgress.currentWeek} of {workoutProgress.totalWeeks} • Age 40+ Optimized
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-blue-600 text-white">
                      <Camera className="h-3 w-3 mr-1" />
                      AI Tracking
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4 mr-2" />
                          Manage
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Workout Plan Settings</DialogTitle>
                          <DialogDescription>
                            Customize your 6-day standing workout plan
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-2">Progress Overview</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Completed Days:</span>
                                  <span className="font-medium">{workoutProgress.completedDays}/{workoutProgress.totalDays}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Current Streak:</span>
                                  <span className="font-medium">{workoutProgress.streakDays} days</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Avg Form Score:</span>
                                  <span className="font-medium">{workoutProgress.avgFormScore}%</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Plan Details</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Duration:</span>
                                  <span className="font-medium">30 min/day</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Difficulty:</span>
                                  <span className="font-medium">Beginner</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Focus:</span>
                                  <span className="font-medium">Standing Exercises</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button asChild className="flex-1">
                              <Link href="/workouts/manage">
                                <Settings className="h-4 w-4 mr-2" />
                                Full Management
                              </Link>
                            </Button>
                            <Button variant="outline">Reset Progress</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Overall Progress */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Overall Progress
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

                {/* This Week's Schedule */}
                <div className="space-y-3">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">This Week's Schedule</h4>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    {workoutProgress.weeklyProgress.map((day) => (
                      <div
                        key={day.day}
                        className={`p-3 rounded-lg text-center transition-all ${
                          day.isToday
                            ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                            : day.completed
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                        }`}
                      >
                        <div className="text-xs font-medium mb-1">{day.day}</div>
                        <div className="text-xs">{day.name.split(' ')[0]}</div>
                        {day.completed && (
                          <CheckCircle className="h-3 w-3 mx-auto mt-1" />
                        )}
                        {day.isToday && (
                          <div className="text-xs mt-1 font-medium">Today</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{workoutProgress.streakDays}</div>
                    <div className="text-xs text-muted-foreground">Day Streak</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{workoutProgress.avgFormScore}%</div>
                    <div className="text-xs text-muted-foreground">Avg Form</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">30</div>
                    <div className="text-xs text-muted-foreground">Min/Day</div>
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
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Upcoming Bookings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Upcoming Sessions</h2>
              <Button asChild variant="outline" size="sm">
                <Link href="/bookings">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            {upcomingBookings.length > 0 ? (
              <div className="space-y-4">
                {upcomingBookings.slice(0, 2).map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No upcoming sessions</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Book your next swimming or training session to continue your fitness journey.
                  </p>
                  <Button asChild>
                    <Link href="/bookings">
                      <Plus className="h-4 w-4 mr-2" />
                      Book Session
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Fitness Progress Sidebar */}
        <div className="space-y-6">
          {/* Weekly Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Weekly Progress</span>
              </CardTitle>
              <CardDescription>Your activity this week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Swimming Sessions</span>
                  <span>3/4</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Workout Sessions</span>
                  <span>2/3</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Fitness Goals</span>
                  <span>4/5</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* AI Form Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="h-5 w-5" />
                <span>AI Form Analysis</span>
              </CardTitle>
              <CardDescription>Recent workout feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Squats</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    92%
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-medium">Push-ups</span>
                  </div>
                  <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                    78%
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">Planks</span>
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    85%
                  </Badge>
                </div>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/workouts">
                  <Camera className="h-4 w-4 mr-2" />
                  View All Analysis
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Workout */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Workouts</CardTitle>
              <CardDescription>Your latest training sessions</CardDescription>
            </CardHeader>
            <CardContent>
              {recentWorkouts.length > 0 ? (
                <div className="space-y-4">
                  {recentWorkouts.map((workout) => (
                    <div key={workout.id} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{workout.name}</h4>
                        <span className="text-xs text-muted-foreground">
                          {workout.duration}min
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {workout.exercises.length} exercises completed
                      </p>
                    </div>
                  ))}
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/workouts">View All Workouts</Link>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-muted-foreground mb-4">No recent workouts</p>
                  <Button asChild size="sm">
                    <Link href="/workouts">Start Workout</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}