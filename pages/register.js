import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import * as ROUTES from '../constants/routes';

export default function Register() {
  const initialState = { name: '', email: '', password: '', cfPassword: '' };
  const [userData, setUserData] = useState(initialState);

  return (
    <div>
      <Head>
        <title>Registration Page</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="flex flex-col">
          <label htmlFor="name" className="my-1">
            Name
          </label>
          <input
            type="text"
            className="rounded border-t border-l border-gray-400 shadow-inner p-1 focus:outline-none"
            id="name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="inputEmail" className="my-2 mt-3">
            Email Address
          </label>
          <input
            type="email"
            className="rounded border-t border-l border-gray-400 shadow-inner p-1 focus:outline-none"
            id="inputEmail"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="mt-1">
            We'll never share your email with anyone else
          </small>
        </div>
        <div className="flex flex-col">
          <label htmlFor="inputPassword" className="my-2 mt-3">
            Password
          </label>
          <input
            type="password"
            className="rounded border-t border-l border-gray-400 shadow-inner p-1 focus:outline-none"
            id="inputPassword"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="my-2 mt-3">
            Confirm Password
          </label>
          <input
            type="password"
            className="rounded border-t border-l border-gray-400 shadow-inner p-1 focus:outline-none"
            id="confirmPassword"
          />
        </div>
        <button
          type="submit"
          className="rounded w-full bg-gray-800 px-4 py-1 mt-3 text-gray-300 hover:text-gray-100 transition duration-200"
        >
          Register
        </button>

        <p className="my-2">
          Already have an account?{' '}
          <Link href={ROUTES.LOGIN}>
            <a className="text-red-400">Login Now</a>
          </Link>
        </p>
      </form>
    </div>
  );
}
