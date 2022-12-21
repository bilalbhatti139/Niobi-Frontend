import { CometChat } from '@cometchat-pro/chat';
import React from 'react';

function Logout() {
  React.useEffect(() => {
    CometChat.logout();
    localStorage.clear();
    window.location.replace('/login');
  }, []);

  return <div />;
}

export default Logout;
