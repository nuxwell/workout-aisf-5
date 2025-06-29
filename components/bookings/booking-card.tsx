'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, MapPin, Users, Star } from 'lucide-react';
import { format } from 'date-fns';

interface BookingCardProps {
  booking: {
    id: string;
    status: 'CONFIRMED' | 'CANCELLED' | 'COMPLETED' | 'NOT_ATTENDED';
    slot: {
      pool: {
        name: string;
        location: string;
      };
      date: Date;
      startTime: Date;
      endTime: Date;
      trainer?: {
        name: string;
        image?: string;
      };
    };
    createdAt: Date;
  };
  onCancel?: (id: string) => void;
  onReschedule?: (id: string) => void;
}

const statusColors = {
  CONFIRMED: 'bg-green-100 text-green-800 border-green-200',
  CANCELLED: 'bg-red-100 text-red-800 border-red-200',
  COMPLETED: 'bg-blue-100 text-blue-800 border-blue-200',
  NOT_ATTENDED: 'bg-orange-100 text-orange-800 border-orange-200',
};

export function BookingCard({ booking, onCancel, onReschedule }: BookingCardProps) {
  const { slot, status } = booking;
  const isUpcoming = new Date(slot.date) > new Date() && status === 'CONFIRMED';
  const canCancel = isUpcoming && new Date(slot.date).getDate() - new Date().getDate() > 0;

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{slot.pool.name}</CardTitle>
          <Badge className={statusColors[status]}>
            {status.replace('_', ' ')}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{format(slot.date, 'MMM d, yyyy')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>
              {format(slot.startTime, 'HH:mm')} - {format(slot.endTime, 'HH:mm')}
            </span>
          </div>
          <div className="flex items-center space-x-2 col-span-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{slot.pool.location}</span>
          </div>
        </div>

        {slot.trainer && (
          <div className="flex items-center space-x-3 pt-2 border-t">
            <Avatar className="h-8 w-8">
              <AvatarImage src={slot.trainer.image} alt={slot.trainer.name} />
              <AvatarFallback>
                {slot.trainer.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{slot.trainer.name}</p>
              <p className="text-xs text-muted-foreground">Personal Trainer</p>
            </div>
            <div className="ml-auto flex items-center space-x-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">4.8</span>
            </div>
          </div>
        )}

        {isUpcoming && (
          <div className="flex space-x-2 pt-2">
            {canCancel && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onCancel?.(booking.id)}
                className="flex-1"
              >
                Cancel
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onReschedule?.(booking.id)}
              className="flex-1"
            >
              Reschedule
            </Button>
          </div>
        )}

        {status === 'COMPLETED' && (
          <Button variant="outline" size="sm" className="w-full">
            <Star className="h-4 w-4 mr-2" />
            Rate Session
          </Button>
        )}
      </CardContent>
    </Card>
  );
}