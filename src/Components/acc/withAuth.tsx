import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import axios from 'axios';

export function withAuth(Component: React.ComponentType) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [ok, setOk] = useState<boolean | null>(null);

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
          setOk(false);
          return;
        }

        try {
          const response = await axios.post(
            `${apiUrl}/api/auth/verify`,
            {},
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.status === 200) {
            setOk(true);
          } else {
            setOk(false);
          }
        } catch (error) {
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
