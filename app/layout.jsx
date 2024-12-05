import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthWrapper from '@/components/authWrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OpenSpace | Quick and easy booking at your fingertips',
  description:
    'OpenSpace is a platform that allows you to book spaces for your events, meetings, and more.',
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang="en">
        <body className={inter.className}>
          <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Header />
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthWrapper>
  );
}
