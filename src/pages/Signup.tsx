
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {t('signup.title', 'Create an account')}
            </CardTitle>
            <CardDescription className="text-center">
              {t('signup.description', 'Fill in your details to create a new account')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    {t('signup.firstName', 'First name')}
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    {t('signup.lastName', 'Last name')}
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('signup.email', 'Email address')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full"
                  placeholder={t('signup.emailPlaceholder', 'name@example.com')}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  {t('signup.password', 'Password')}
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  {t('signup.confirmPassword', 'Confirm password')}
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  {t('signup.termsAgreement', 'I agree to the Terms of Service and Privacy Policy')}
                </label>
              </div>
              <Button type="submit" className="w-full">
                {t('signup.createAccount', 'Create account')}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              {t('signup.hasAccount', 'Already have an account?')}{' '}
              <Link to="/login" className="font-medium text-primary hover:text-primary/80">
                {t('signup.signIn', 'Sign in')}
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
