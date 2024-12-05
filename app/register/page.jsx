'use client';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import createUser from '@/app/actions/createUser';
import Link from 'next/link';

const RegisterPage = () => {
  const [state, formAction] = useFormState(createUser, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state.success) {
      toast.success('You can now log in!');
      router.push('/login');
    }
  }, [state, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF6] px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Create an account</h2>
          <p className="mt-2 text-sm text-black/70">Sign up to get started</p>
        </div>

        <form className="mt-8 space-y-6" action={formAction}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              required
            />
          </div>

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
              autoComplete="password"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-black">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              required
              autoComplete="confirm-password"
            />
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full bg-black text-[#FFFDF6] px-6 py-2.5 rounded-full text-sm 
              font-medium hover:bg-[#FFFDF6] hover:text-black hover:border hover:border-black 
              hover:scale-95 transition-all duration-300">
              Register
            </button>

            <p className="text-center text-sm text-black/70">
              Have an account?{' '}
              <Link
                href="/login"
                className="text-black font-medium hover:text-black/70 transition-colors">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
