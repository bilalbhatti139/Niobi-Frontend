import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useLogout from '../../../hooks/useLogout';
const navigation = [{ name: 'Dashboard', href: '/' }];

function UserProfile() {
  return (
    <div className="h-screen">
      <header className="bg-white">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center"></div>
          </div>
        </nav>
      </header>
      <div className="ml-10 hidden space-x-8 lg:block">Profile</div>
    </div>
  );
}

export default UserProfile;
