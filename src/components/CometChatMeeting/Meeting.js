import { useEffect, useCallback } from 'react';

import { CometChatMessages } from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src';

import { CometChat } from '@cometchat-pro/chat';
import { useNavigate, useParams } from 'react-router-dom';

const Meeting = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  let meeting = {
    guid: id
  };

  const goBack = () => {
    CometChat.leaveGroup(meeting?.guid);
    navigate(-1);
  };

  let myid = localStorage.getItem('');

  const startDirectCall = useCallback(() => {
    if (CometChat && meeting) {
      const sessionID = meeting.guid;
      const audioOnly = false;
      const defaultLayout = true;
      const callSettings = new CometChat.CallSettingsBuilder()
        .enableDefaultLayout(defaultLayout)
        .setSessionID(sessionID)
        .setIsAudioOnlyCall(audioOnly)
        .build();
      CometChat.startCall(
        callSettings,
        document.getElementById('call__screen'),
        new CometChat.OngoingCallListener({
          onUserListUpdated: (userList) => {},
          onCallEnded: (call) => {
            goBack();
          },
          onError: (error) => {
            goBack();
          },
          onMediaDeviceListUpdated: (deviceList) => {},
          onUserMuted: (userMuted, userMutedBy) => {},
          onScreenShareStarted: () => {},
          onScreenShareStopped: () => {}
        })
      );
    }
  }, [meeting]);

  useEffect(() => {
    window.onhashchange = function () {
      alert('are you sure');
    };
    if (meeting && CometChat) {
      startDirectCall();
    }
  }, [meeting, CometChat, startDirectCall]);

  // if (!meeting || !CometChat) {
  //   goBack();
  //   return <></>;
  // }

  return (
    <>
      {meeting.guid && (
        <div className="meeting">
          <div className="meeting__left h-full">
            <div id="call__screen" className="!top-0 h-screen"></div>
          </div>
          <div className="meeting__right">
            <CometChatMessages chatWithGroup={meeting.guid} />
          </div>
        </div>
      )}
    </>
  );
};

export default Meeting;
