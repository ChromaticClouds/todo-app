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
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field.jsx';
import { Input } from '@/components/ui/input.jsx';
import { useAuthForm } from '@/hooks/use-auth-form.js';

export const Login = () => {
  const { login: form } = useAuthForm();

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <AppHeader />
      <div className="flex flex-col flex-1 gap-6 w-sm max-w-sm justify-center py-6">
        <div className="w-full flex justify-center">
          <Logo size={42} fontSize="large" />
        </div>
        <Card className="w-full max-w-sm">
          <CardHeader className="flex flex-col gap-6">
            <p className="text-3xl font-bold">Sign In</p>
            <div className="flex flex-col gap-2">
              <CardTitle>Sign in for content access</CardTitle>
              <CardDescription>
                Login for using and managing todos
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form
              id="login"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <div className="flex flex-col gap-6">
                <FieldGroup>
                  <form.Field name="username">
                    {(field) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                        <Input
                          id={field.name}
                          type="text"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          required
                        />
                      </Field>
                    )}
                  </form.Field>
                  <form.Field name="password">
                    {(field) => (
                      <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input
                          id={field.name}
                          type={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          required
                        />
                      </Field>
                    )}
                  </form.Field>
                </FieldGroup>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <form.Subscribe selector={(state) => [state.isSubmitting]}>
              {([isSubmitting]) => (
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  form="login"
                >
                  {isSubmitting ? '...' : 'Sign in'}
                </Button>
              )}
            </form.Subscribe>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
