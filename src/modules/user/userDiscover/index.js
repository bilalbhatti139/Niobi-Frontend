import UserTabs from '../../../components/UserDiscover/Tabs';


function UserDiscover() {
  return (
    <div className="h-screen">
      <header className="bg-white">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-indigo-500  lg:border-none">
            <div className="flex items-center"></div>
          </div>
        </nav>
      </header>
      <UserTabs />
    </div>
  );
}

export default UserDiscover;
