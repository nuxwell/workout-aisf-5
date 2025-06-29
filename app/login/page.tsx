'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { School as Pool, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const demoAccounts = [
    { email: 'user@example.com', role: 'User' },
    { email: 'admin@example.com', role: 'Admin' },
    { email: 'manager@example.com', role: 'Manager' },
    { email: 'trainer@example.com', role: 'Trainer' },
    { email: 'caretaker@example.com', role: 'Caretaker' },
    { email: 'superadmin@example.com', role: 'Super Admin' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-teal-600 p-3 rounded-full">
              <Pool className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to AquaFit</CardTitle>
          <CardDescription>
            Sign in to your account to access your swimming and fitness journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p className="font-medium mb-3">Demo accounts:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {demoAccounts.map((account) => (
                <div key={account.email} className="text-left">
                  <p className="font-medium">{account.role}:</p>
                  <p className="text-teal-600">{account.email}</p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3 font-medium">Password: any password</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}