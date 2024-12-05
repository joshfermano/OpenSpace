'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import openLogo from '@/assets/images/openspaceblack.svg';
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from 'react-icons/fa';
import destroySession from '@/app/actions/destroySession';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/authContext';

const Header = () => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    const { success, error } = await destroySession();
    if (success) {
      setIsAuthenticated(false);
      router.push('/login');
    } else {
      toast.error(error);
    }
  };

  return (
    <header className="bg-[#FFFDF6] border-b border-black/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                className="h-10 w-10"
                src={openLogo}
                alt="OpenSpace"
                priority={true}
              />
            </Link>

            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                <Link
                  href="/"
                  className="text-black hover:text-black/70 transition-all text-sm font-medium hover:scale-110  duration-300">
                  Rooms
                </Link>

                {isAuthenticated && (
                  <>
                    <Link
                      href="/bookings"
                      className="text-black hover:text-black/70 transition-all text-sm font-medium hover:scale-110  duration-300">
                      Bookings
                    </Link>
                    <Link
                      href="/rooms/add"
                      className="text-black hover:text-black/70 transition-all text-sm font-medium hover:scale-110  duration-300">
                      Add Room
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {!isAuthenticated ? (
              <>
                <Link
                  href="/login"
                  className="text-black hover:text-black/70 transition-colors text-sm font-medium flex items-center">
                  <FaSignInAlt className="mr-2" /> Login
                </Link>
                <Link
                  href="/register"
                  className="bg-black text-[#FFFDF6] px-4 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-colors flex items-center">
                  <FaUser className="mr-2" /> Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/rooms/my"
                  className="text-black hover:text-black/70 transition-colors text-sm font-medium flex items-center">
                  <FaBuilding className="mr-2" /> My Rooms
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-black hover:text-black/70 transition-colors text-sm font-medium flex items-center">
                  <FaSignOutAlt className="mr-2" /> Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="md:hidden border-t border-black/10">
        <div className="px-4 py-3 space-y-3">
          <Link
            href="/"
            className="block text-black hover:text-black/70 transition-colors text-sm font-medium">
            Rooms
          </Link>
          {isAuthenticated && (
            <>
              <Link
                href="/bookings"
                className="block text-black hover:text-black/70 transition-colors text-sm font-medium">
                Bookings
              </Link>
              <Link
                href="/rooms/add"
                className="block text-black hover:text-black/70 transition-colors text-sm font-medium">
                Add Room
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
