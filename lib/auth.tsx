'use client';

// Mock authentication context
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN' | 'MANAGER' | 'TRAINER' | 'CARETAKER' | 'SUPERADMIN';
  level: string;
  image?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for different roles
const mockUsersByEmail: Record<string, User> = {
  'user@example.com': {
    id: '1',
    name: 'John Smith',
    email: 'user@example.com',
    role: 'USER',
    level: 'beginner',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  'admin@example.com': {
    id: '3',
    name: 'Mike Wilson',
    email: 'admin@example.com',
    role: 'ADMIN',
    level: 'expert',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  'manager@example.com': {
    id: '4',
    name: 'Emily Davis',
    email: 'manager@example.com',
    role: 'MANAGER',
    level: 'advanced',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  'trainer@example.com': {
    id: '5',
    name: 'David Rodriguez',
    email: 'trainer@example.com',
    role: 'TRAINER',
    level: 'expert',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  'caretaker@example.com': {
    id: '6',
    name: 'Lisa Thompson',
    email: 'caretaker@example.com',
    role: 'CARETAKER',
    level: 'intermediate',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  'superadmin@example.com': {
    id: '7',
    name: 'Robert Chen',
    email: 'superadmin@example.com',
    role: 'SUPERADMIN',
    level: 'expert',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - check if email exists in our mock data
    const mockUser = mockUsersByEmail[email.toLowerCase()];
    
    if (mockUser) {
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } else {
      // Default fallback for any other email
      const defaultUser: User = {
        id: '1',
        name: 'John Smith',
        email,
        role: 'USER',
        level: 'beginner',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
      };
      
      setUser(defaultUser);
      localStorage.setItem('user', JSON.stringify(defaultUser));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}