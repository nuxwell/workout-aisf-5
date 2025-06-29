'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  Calendar,
  Clock,
  Target,
  Play,
  Edit,
  Trash2,
  Copy,
  Settings,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Camera,
  Zap,
  Heart,
  RotateCcw,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { workoutPlans, workoutTemplates } from '@/lib/workout-data';

export default function ManageWorkoutsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('6-day-standing');
  const [activeDay, setActiveDay] = useState(1);
  const [selectedExercise, setSelectedExercise] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentPlan = workoutPlans.find(plan => plan.id === selectedPlan);
  const currentDay = currentPlan?.days.find(day => day.day === activeDay);

  const filteredPlans = workoutPlans.filter(plan => 
    plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Manage Workouts</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage AI-powered workout plans with MediaPipe tracking
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Workout Plan</DialogTitle>
              <DialogDescription>
                Design a custom workout plan with AI form tracking
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="planName">Plan Name</Label>
                  <Input id="planName" placeholder="e.g., Beginner Strength" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (weeks)</Label>
                  <Input id="duration" type="number" placeholder="4" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Brief description of the plan" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <select
                    id="difficulty"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ageGroup">Age Group</Label>
                  <select
                    id="ageGroup"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  >
                    <option value="18-30">18-30</option>
                    <option value="30-40">30-40</option>
                    <option value="40+">40+</option>
                    <option value="seniors">Seniors (65+)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="daysPerWeek">Days/Week</Label>
                  <Input id="daysPerWeek" type="number" min="1" max="7" placeholder="6" />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1">Create Plan</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="search" className="sr-only">Search workout plans</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search workout plans..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                {workoutPlans.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Workout Plans List */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-semibold">Workout Plans</h3>
          {filteredPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedPlan === plan.id ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950' : ''
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{plan.name}</CardTitle>
                  <Badge variant={plan.difficulty === 'beginner' ? 'secondary' : 'default'}>
                    {plan.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span>{plan.days.length} days</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span>{plan.duration} weeks</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span>{plan.ageGroup}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Camera className="h-3 w-3 text-muted-foreground" />
                    <span>AI Tracking</span>
                  </div>
                </div>
                <div className="flex space-x-1 mt-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Plan Details */}
        <div className="lg:col-span-3">
          {currentPlan && (
            <div className="space-y-6">
              {/* Plan Header */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl flex items-center space-x-3">
                        <Dumbbell className="h-6 w-6 text-blue-600" />
                        <span>{currentPlan.name}</span>
                      </CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {currentPlan.description}
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-2" />
                        Configure
                      </Button>
                      <Button size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Start Plan
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{currentPlan.days.length}</div>
                      <div className="text-sm text-muted-foreground">Days per week</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{currentPlan.duration}</div>
                      <div className="text-sm text-muted-foreground">Weeks duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">30</div>
                      <div className="text-sm text-muted-foreground">Minutes/day</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{currentPlan.ageGroup}</div>
                      <div className="text-sm text-muted-foreground">Age group</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Day Navigation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Weekly Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2">
                    {currentPlan.days.map((day) => (
                      <Button
                        key={day.day}
                        variant={activeDay === day.day ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveDay(day.day)}
                        className="flex flex-col h-auto py-3"
                      >
                        <span className="text-xs font-medium">Day {day.day}</span>
                        <span className="text-xs text-muted-foreground mt-1">
                          {day.name.split(' ')[0]}
                        </span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Day Details */}
              {currentDay && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Day {currentDay.day}: {currentDay.name}</CardTitle>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentDay.warmup.map((exercise, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-medium">{exercise.name}</h4>
                                  <div className="flex items-center space-x-2">
                                    <Badge variant={exercise.trackingQuality === 'Excellent' ? 'default' : 'secondary'}>
                                      {exercise.trackingQuality}
                                    </Badge>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => {
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
                                    <Zap className="h-3 w-3" />
                                    <span>AI Tracked</span>
                                  </span>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="main" className="space-y-4">
                        <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <RotateCcw className="h-4 w-4 text-blue-600" />
                            <span className="font-medium text-blue-900 dark:text-blue-100">
                              2 Rounds × 10 minutes each
                            </span>
                          </div>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Complete all exercises in sequence, then repeat for the second round.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentDay.mainWorkout.map((exercise, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-medium">{exercise.name}</h4>
                                  <div className="flex items-center space-x-2">
                                    <Badge variant="outline" className="text-xs">
                                      {exercise.reps}
                                    </Badge>
                                    <Badge variant={exercise.trackingQuality === 'Excellent' ? 'default' : 'secondary'}>
                                      {exercise.trackingQuality}
                                    </Badge>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => {
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
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="cooldown" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentDay.cooldown.map((exercise, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
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
                                      onClick={() => {
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
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-6 flex space-x-4">
                      <Button className="flex-1">
                        <Play className="h-4 w-4 mr-2" />
                        Start Day {currentDay.day} Workout
                      </Button>
                      <Button variant="outline">
                        <Edit className="h-4 w-4 mr-2" />
                        Customize
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>

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
                <Button className="flex-1">
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