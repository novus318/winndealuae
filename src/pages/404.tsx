import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const NotFound = () => {
  const navigate = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate.push('/');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, [navigate]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-black-100 px-4 py-12">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Oops! Page not found.
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
         Being redirected...
        </p>
      </div>
    </div>
  );
};

export default NotFound;
