'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, Users, Clock, Settings } from "lucide-react";

export default function AdminPoolsPage() {
  const pools = [
    {
      id: 1,
      name: "Olympic Pool",
      type: "Competition",
      capacity: 200,
      currentOccupancy: 45,
      status: "Active",
      temperature: "26°C",
      lastMaintenance: "2024-01-15",
      nextMaintenance: "2024-01-22"
    },
    {
      id: 2,
      name: "Kids Pool",
      type: "Recreational",
      capacity: 50,
      currentOccupancy: 12,
      status: "Active",
      temperature: "28°C",
      lastMaintenance: "2024-01-14",
      nextMaintenance: "2024-01-21"
    },
    {
      id: 3,
      name: "Therapy Pool",
      type: "Therapeutic",
      capacity: 30,
      currentOccupancy: 8,
      status: "Maintenance",
      temperature: "32°C",
      lastMaintenance: "2024-01-16",
      nextMaintenance: "2024-01-18"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'Closed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getOccupancyColor = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    if (percentage < 50) return 'text-green-600';
    if (percentage < 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Pool Management</h1>
          <p className="text-gray-600">Monitor and manage all pool facilities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pools.map((pool) => (
            <Card key={pool.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">{pool.name}</CardTitle>
                  </div>
                  <Badge className={getStatusColor(pool.status)}>
                    {pool.status}
                  </Badge>
                </div>
                <CardDescription className="text-sm text-gray-600">
                  {pool.type} Pool
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Occupancy</p>
                      <p className={`font-semibold ${getOccupancyColor(pool.currentOccupancy, pool.capacity)}`}>
                        {pool.currentOccupancy}/{pool.capacity}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Temperature</p>
                      <p className="font-semibold text-blue-600">{pool.temperature}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Last Maintenance:</span>
                    <span className="font-medium">{pool.lastMaintenance}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-gray-600">Next Maintenance:</span>
                    <span className="font-medium">{pool.nextMaintenance}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Clock className="h-4 w-4 mr-1" />
                    Schedule
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Settings className="h-4 w-4 mr-1" />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Total Occupancy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {pools.reduce((sum, pool) => sum + pool.currentOccupancy, 0)}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                of {pools.reduce((sum, pool) => sum + pool.capacity, 0)} capacity
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Droplets className="h-5 w-5 mr-2 text-green-600" />
                Active Pools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {pools.filter(pool => pool.status === 'Active').length}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                of {pools.length} total pools
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Settings className="h-5 w-5 mr-2 text-yellow-600" />
                Maintenance Due
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">
                {pools.filter(pool => pool.status === 'Maintenance').length}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                pools need attention
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}