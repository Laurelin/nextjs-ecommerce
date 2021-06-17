import Head from 'next/head';
import Link from 'next/link';
import * as ROUTES from '../constants/routes';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Sign In Page</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="flex flex-col">
          <label htmlFor="inputEmail" className="my-2 mt-3">
            Email Address
          </label>
          <input
            type="email"
            className="rounded border-t border-l border-gray-400 shadow-inner p-1 focus:outline-none"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
          />
          <small id="emailHelp" className="mt-2">
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
            aria-describedby="emailHelp"
            placeholder="Password"
          />
          <button
            type="submit"
            className="rounded bg-gray-800 px-4 py-1 mt-3 text-gray-300 hover:text-gray-100 transition duration-200"
          >
            Login
          </button>
          <p className="my-2">
            Don't have an account?{' '}
            <Link href={ROUTES.REGISTER}>
              <a className="text-red-400">Register Now</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
