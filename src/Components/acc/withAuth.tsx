'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import axios from 'axios';

export function withAuth(Component: React.ComponentType) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const [ok, setOk] = useState<boolean | null>(null);

    useEffect(() => {
      const checkAuth = async () => {
        // Get token from local storage
        const token = localStorage.getItem('token');

        if (!token) {
          setOk(false);
          return;
        }

        try {
          // Send token to backend for verification using Axios
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify`,
            {},
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.status === 200) {
            // Token is valid
            setOk(true);
          } else {
            // Token is invalid
            setOk(false);
          }
        } catch (error) {
          // Handle network or other errors
          console.error('Error during token verification:', error);
          setOk(false);
        }
      };

      checkAuth();
    }, [router]);

    if (ok === null) {
      return <Spinner />;
    }

    if (typeof window === 'undefined' || ok === false) {
      router.push('/accounts/login');
      return null;
    }

    return <Component {...props} />;
  };
}
