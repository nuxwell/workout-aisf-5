// Mock data for development
export const mockUsers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'USER',
    level: 'beginner',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'TRAINER',
    level: 'expert',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike@example.com',
    role: 'ADMIN',
    level: 'expert',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'manager@example.com',
    role: 'MANAGER',
    level: 'advanced',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '5',
    name: 'David Rodriguez',
    email: 'trainer@example.com',
    role: 'TRAINER',
    level: 'expert',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    email: 'caretaker@example.com',
    role: 'CARETAKER',
    level: 'intermediate',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '7',
    name: 'Robert Chen',
    email: 'superadmin@example.com',
    role: 'SUPERADMIN',
    level: 'expert',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const mockPools = [
  {
    id: '1',
    name: 'Olympic Pool',
    location: 'Main Building - Level 1',
    images: [
      'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '2',
    name: 'Training Pool',
    location: 'Main Building - Level 2',
    images: [
      'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '3',
    name: 'Kids Pool',
    location: 'Recreation Area',
    images: [
      'https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];

export const mockSlots = [
  {
    id: '1',
    poolId: '1',
    pool: mockPools[0],
    date: new Date('2025-01-20'),
    startTime: new Date('2025-01-20T09:00:00'),
    endTime: new Date('2025-01-20T10:00:00'),
    capacity: 20,
    trainerId: '2',
    trainer: mockUsers[1],
    availableSpots: 15
  },
  {
    id: '2',
    poolId: '1',
    pool: mockPools[0],
    date: new Date('2025-01-20'),
    startTime: new Date('2025-01-20T10:00:00'),
    endTime: new Date('2025-01-20T11:00:00'),
    capacity: 20,
    trainerId: '2',
    trainer: mockUsers[1],
    availableSpots: 8
  },
  {
    id: '3',
    poolId: '2',
    pool: mockPools[1],
    date: new Date('2025-01-20'),
    startTime: new Date('2025-01-20T14:00:00'),
    endTime: new Date('2025-01-20T15:00:00'),
    capacity: 12,
    availableSpots: 12
  }
];

export const mockBookings = [
  {
    id: '1',
    userId: '1',
    slotId: '1',
    status: 'CONFIRMED',
    slot: mockSlots[0],
    createdAt: new Date('2025-01-15')
  },
  {
    id: '2',
    userId: '1',
    slotId: '2',
    status: 'COMPLETED',
    slot: mockSlots[1],
    createdAt: new Date('2025-01-14')
  }
];

export const mockWorkouts = [
  {
    id: '1',
    name: 'Full Body Strength',
    type: 'beginner',
    date: new Date('2025-01-19'),
    duration: 45,
    exercises: [
      {
        id: '1',
        name: 'Push-ups',
        trackingKey: 'pushup',
        sets: [
          { id: '1', reps: 10, formScore: 85.5 },
          { id: '2', reps: 8, formScore: 92.1 }
        ]
      },
      {
        id: '2',
        name: 'Squats',
        trackingKey: 'squat',
        sets: [
          { id: '3', reps: 15, formScore: 88.3 },
          { id: '4', reps: 12, formScore: 90.7 }
        ]
      }
    ]
  }
];

export const mockFitnessTests = [
  {
    id: '1',
    score: 78,
    notes: 'Good improvement in cardiovascular endurance',
    createdAt: new Date('2025-01-10')
  },
  {
    id: '2',
    score: 82,
    notes: 'Excellent form on strength exercises',
    createdAt: new Date('2025-01-05')
  }
];