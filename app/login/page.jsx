'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import createSession from '../actions/createSession';
import { useEffect } from 'react';
import { useActionState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/authContext';

const LoginPage = () => {
  const [state, formAction] = useActionState(createSession, {});

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success('Logged in successfully');
      setIsAuthenticated(true);
      router.push('/');
    }
  }, [state]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF6] px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Welcome back</h2>
          <p className="mt-2 text-sm text-black/70">
            Please sign in to your account
          </p>
        </div>

        <form className="mt-8 space-y-6" action={formAction}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full bg-black text-[#FFFDF6] px-6 py-2.5 rounded-full text-sm 
              font-medium hover:bg-[#FFFDF6] hover:text-black hover:border hover:border-black 
              hover:scale-95 transition-all duration-300">
              Login
            </button>

            <p className="text-center text-sm text-black/70">
              No account?
              <Link
                href="/register"
                className="ml-1 text-black font-medium hover:text-black/70 transition-colors">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
