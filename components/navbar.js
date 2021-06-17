import { Fragment } from 'react';
import { useRouter } from 'next/router';
import {
  ShoppingCartIcon,
  UserCircleIcon,
  ChevronDownIcon
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import * as ROUTES from '../constants/routes';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const router = useRouter();
  const isActive = (route) => {
    if (route === router.pathname) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <nav>
      <div className="flex flex-row justify-between items-center mx-auto h-12 bg-white border-b border-gray-300 shadow-md">
        <Link href={ROUTES.HOME}>
          <a className="text-xl font-bold uppercase p-2 hover:text-gray-400 transition duration-200">
            Laura
          </a>
        </Link>
        <div className="flex flex-row w-1/3 justify-end items-center pr-2 ml-6">
          <Link href={ROUTES.CART}>
            <a className="inline-flex text-sm mr-2 justify-center group hover:text-gray-400 transition duration-200">
              <ShoppingCartIcon
                className="w-6 mr-1 group-hover:text-gray-400 transition duration-200"
                aria-hidden="true"
              />
              Cart
            </a>
          </Link>
          <Link href={ROUTES.LOGIN}>
            <a className="inline-flex text-sm mr-2 justify-center group hover:text-gray-400 transition duration-200">
              <UserCircleIcon
                className="w-6 mr-1 group-hover:text-gray-400 transition duration-200"
                aria-hidden="true"
              />
              Sign In
            </a>
          </Link>

          {/* <Menu as="div" className="relative inline-block">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md text-sm focus:outline-none">
                    <UserCircleIcon
                      className="ml-2 h-6 w-6"
                      aria-hidden="true"
                    />
                    Username
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Profile
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block w-full text-left px-4 py-2 text-sm'
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu> */}
        </div>
      </div>
    </nav>
  );
}
