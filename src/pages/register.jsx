import { Logo } from '@/assets/logo.jsx';
import { AppHeader } from '@/components/app-header.jsx';
import { Button } from '@/components/ui/button.jsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';

export const Register = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <AppHeader />
      <div className="flex flex-col flex-1 gap-6 w-sm max-w-sm justify-center py-6">
        <div className="w-full flex justify-center">
          <Logo size={42} fontSize="large" />
        </div>
        <Card className="w-full max-w-sm">
          <CardHeader className='flex flex-col gap-6'>
            <p className="text-3xl font-bold">Sign Up</p>
            <div className="flex flex-col gap-2">
              <CardTitle>Sign up your account</CardTitle>
              <CardDescription>
                Create account with email and username
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
