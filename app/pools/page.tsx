'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Clock, Calendar, Star } from 'lucide-react';
import { mockPools, mockSlots } from '@/lib/mock-data';
import { format } from 'date-fns';
import Image from 'next/image';

export default function PoolsPage() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Swimming Pools</h1>
        <p className="text-muted-foreground mt-1">
          Discover our world-class swimming facilities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockPools.map((pool) => {
          const poolSlots = mockSlots.filter(slot => slot.poolId === pool.id);
          const upcomingSlots = poolSlots.filter(slot => 
            new Date(slot.date) > new Date() && slot.availableSpots > 0
          );

          return (
            <Card key={pool.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={pool.images[0]}
                  alt={pool.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600 text-white">
                    {upcomingSlots.length} available slots
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{pool.name}</CardTitle>
                <CardDescription className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{pool.location}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Upcoming Sessions</h4>
                  {upcomingSlots.slice(0, 3).map((slot) => (
                    <div key={slot.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>{format(slot.date, 'MMM d')}</span>
                          <Clock className="h-3 w-3 text-muted-foreground ml-2" />
                          <span>{format(slot.startTime, 'HH:mm')}</span>
                        </div>
                        {slot.trainer && (
                          <div className="flex items-center space-x-2 text-xs">
                            <Star className="h-3 w-3 text-yellow-400" />
                            <span>{slot.trainer.name}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-sm">
                          <Users className="h-3 w-3 text-muted-foreground" />
                          <span>{slot.availableSpots}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">spots left</p>
                      </div>
                    </div>
                  ))}
                  
                  {upcomingSlots.length === 0 && (
                    <p className="text-sm text-muted-foreground">No available sessions</p>
                  )}
                </div>

                <Button className="w-full">
                  View All Sessions
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}