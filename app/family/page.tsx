'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Users, 
  Plus, 
  Mail, 
  Crown, 
  Calendar,
  UserPlus,
  Settings,
  Trash2
} from 'lucide-react';

const mockFamilies = [
  {
    id: '1',
    name: 'Smith Family',
    members: [
      {
        id: '1',
        name: 'John Smith',
        email: 'john@example.com',
        role: 'owner',
        level: 'beginner',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'member',
        level: 'intermediate',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '3',
        name: 'Tommy Smith',
        email: 'tommy@example.com',
        role: 'member',
        level: 'beginner',
        image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
    recentBookings: 3,
    nextSession: new Date('2025-01-20T10:00:00')
  }
];

export default function FamilyPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [familyName, setFamilyName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Family Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage family members and group bookings
          </p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Family
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Family</DialogTitle>
              <DialogDescription>
                Start a family group to book sessions together and track progress.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="familyName">Family Name</Label>
                <Input
                  id="familyName"
                  value={familyName}
                  onChange={(e) => setFamilyName(e.target.value)}
                  placeholder="Enter family name"
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={() => setIsCreateDialogOpen(false)} className="flex-1">
                  Create Family
                </Button>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {mockFamilies.length > 0 ? (
        <div className="space-y-6">
          {mockFamilies.map((family) => (
            <Card key={family.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>{family.name}</span>
                    </CardTitle>
                    <CardDescription>
                      {family.members.length} members • {family.recentBookings} recent bookings
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Group Booking
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Family Members */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Family Members</h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Add Member
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Family Member</DialogTitle>
                          <DialogDescription>
                            Invite someone to join your family group.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="memberEmail">Email Address</Label>
                            <Input
                              id="memberEmail"
                              type="email"
                              value={memberEmail}
                              onChange={(e) => setMemberEmail(e.target.value)}
                              placeholder="Enter member's email"
                            />
                          </div>
                          <div className="flex space-x-2">
                            <Button className="flex-1">
                              <Mail className="h-4 w-4 mr-2" />
                              Send Invitation
                            </Button>
                            <Button variant="outline">Cancel</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {family.members.map((member) => (
                      <Card key={member.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={member.image} alt={member.name} />
                              <AvatarFallback>
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <p className="font-medium truncate">{member.name}</p>
                                {member.role === 'owner' && (
                                  <Crown className="h-4 w-4 text-yellow-500" />
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground truncate">
                                {member.email}
                              </p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {member.level}
                                </Badge>
                                <Badge variant={member.role === 'owner' ? 'default' : 'secondary'} className="text-xs">
                                  {member.role}
                                </Badge>
                              </div>
                            </div>
                            {member.role !== 'owner' && (
                              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="text-lg font-medium">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Family pool session booked</p>
                        <p className="text-xs text-muted-foreground">
                          Olympic Pool • Jan 20, 10:00 AM • 3 members
                        </p>
                      </div>
                      <Badge variant="outline">Upcoming</Badge>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Group training completed</p>
                        <p className="text-xs text-muted-foreground">
                          Training Pool • Jan 18, 2:00 PM • 2 members
                        </p>
                      </div>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-gray-600 rounded-full" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Tommy Smith joined the family</p>
                        <p className="text-xs text-muted-foreground">Jan 15, 3:30 PM</p>
                      </div>
                      <Badge variant="outline">New Member</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-12">
            <Users className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">No family groups yet</h3>
            <p className="text-muted-foreground text-center mb-6">
              Create a family group to book sessions together and track everyone's progress.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Family
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Family</DialogTitle>
                  <DialogDescription>
                    Start a family group to book sessions together and track progress.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="familyName">Family Name</Label>
                    <Input
                      id="familyName"
                      value={familyName}
                      onChange={(e) => setFamilyName(e.target.value)}
                      placeholder="Enter family name"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1">Create Family</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      )}
    </div>
  );
}