import { CometChat } from '@cometchat-pro/chat';
import React from 'react';

import {
  CometChatMessageList,
  CometChatUI
} from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src';
const uid = '6386119ceb5c57613849e82c';

const Chat = () => {
  const handleClick = () => {
    // CometChat.deleteConversation(uid, type).then(
    //   (deletedConversation) => {
    //     console.log(deletedConversation);
    //   },
    //   (error) => {
    //     console.log('error while deleting a conversation', error);
    //   }
    // );
    CometChat.getUser(uid).then(
      (user) => {
        console.log('Users:', user);
        // CometChat.getConversation(uid, conversationType).then((conversationId) => {
        //   console.log('open conversation:', conversationId);
        // });
        // <CometChatMessageList user={uid} />;
      },
      (error) => {
        console.log('Users Error:', error);
      }
    );
  };
  return (
    <>
      {/* <button onClick={handleClick} className="px-4 h-12 bg-slate-900 text-white">
        Open Chat
      </button> */}
      <div className="w-100 h-[91vh]">
        <CometChatUI />
        {/* <CometChatMessageList user={uid} /> */}
      </div>
    </>
  );
};

export default Chat;
