import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useLogout from '../../../hooks/useLogout';
const navigation = [{ name: 'Dashboard', href: '/' }];

const UserDashboard = () => {
  const logout = useLogout();
  const { auth } = useAuth();
  const logoutUser = async () => {
    await logout();
  };

  return (
    <div className="h-screen">
      <header className="bg-white">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
              <div href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-6 w-auto"
                  src={`${process.env.PUBLIC_URL}/images/logo1xdark.png`}
                  alt="logo"
                />
              </div>
              <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link
                    key={link.name}
                    path={link.href}
                    className="text-base font-medium text-dark hover:opacity-75">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <div className="inline-block rounded-md border border-transparent py-2 px-4 text-base font-medium text-dark hover:bg-opacity-75">
                {auth.email}
              </div>
              <button
                onClick={logoutUser}
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50">
                Logout
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-dark hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="grid grid-cols-12 gap-4 py-10">
        <div className="col-start-3 col-span-2 ">
          <div className="flex flex-row gap-2 ">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <Link to="/settings">
              <h5 className="mb-2 text-lg font-medium text-gray-900">Settings</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
