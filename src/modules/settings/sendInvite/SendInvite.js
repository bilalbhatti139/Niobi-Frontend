import { copyToClipboard } from '../../../utils';
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';
import React from 'react';

const SendInvite = (props) => {
  const referUrl = `${process.env.REACT_APP_FRONT_END_URL}/signup?user_id=${props.user_id}`;

  return (
    <div className=" w-[100%] lg:mr-10 sm:p-6 md:p-8 bg-white rounded-lg border border-gray-200 shadow-md ">
      <div>
        <h1 className="font-[600] text-2xl mb-2">Share that Wellavi feelings</h1>
        <p className="text-gray-500">
          Help your friends stress less, sleep better and get a little happier and healthier with
          Wellavi.
        </p>
      </div>
      <div className="text-xl mt-5 mb-10 font-[400]">
        Refer your friend and earn a $10 referral bonus after they book their first paid session.
      </div>
      <div className="grid grid-cols-12 gap-4 mt-3 border-b-2 border-gray-200 pb-4">
        <div className="col-span-6 text-center">Invite friends</div>
        <div className="col-span-6 text-center">Invite a coach</div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-3">
        <EmailShareButton
          style={{
            border: '2px solid #e5e7eb',
            borderRadius: '0.5rem',
            '&hover': { background: '#e2e2e2' }
          }}
          className="col-span-3 hover:bg-[#e2e2e2]"
          subject="Mail from Wellavi-web"
          body={referUrl}>
          <span className="flex justify-center ">
            <EmailIcon round={true} size={30} />
          </span>
          <div className="hidden lg:grid cursor-pointer">Email</div>
        </EmailShareButton>
        <FacebookShareButton
          style={{
            border: '2px solid #e5e7eb',
            borderRadius: '0.5rem',
            '&hover': { background: '#e2e2e2' }
          }}
          className="col-span-3 hover:bg-[#e2e2e2]"
          url={referUrl}
          quote={'Referral Link'}>
          <span className="flex justify-center">
            <FacebookIcon round={true} size={30} />
          </span>
          <div className="hidden cursor-pointer lg:grid">Facebook</div>
        </FacebookShareButton>
        <LinkedinShareButton
          style={{
            border: '2px solid #e5e7eb',
            borderRadius: '0.5rem',
            '&hover': { background: '#e2e2e2' }
          }}
          className="col-span-3 hover:bg-[#e2e2e2]"
          title="Wellavi"
          summary="Wellavi"
          url={referUrl}>
          <span className="flex justify-center">
            <LinkedinIcon round={true} size={30} />
          </span>
          <div className="hidden lg:grid">LinkedIn</div>
        </LinkedinShareButton>
        <WhatsappShareButton
          style={{
            border: '2px solid #e5e7eb',
            height: '8rem',
            borderRadius: '0.5rem',
            '&hover': { background: '#a8a5a5' }
          }}
          className="col-span-3 hover:bg-[#e2e2e2]"
          title={'Whatsapp Referral Link'}
          url={referUrl}>
          <span className="flex justify-center ">
            <WhatsappIcon round={true} size={30} />
          </span>
          <div className="hidden lg:grid">WhatsApp</div>
        </WhatsappShareButton>
      </div>
      <div className="mt-4 mb-1">Copy your link</div>
      <div className="grid grid-cols-12 border-2 border-gray-200 p-3 ">
        <div className="col-span-11 text-gray-500">{referUrl}</div>
        <div
          onClick={() => copyToClipboard(referUrl)}
          className="col-span-1 text-[#BE1865] cursor-pointer hover:bg-[#ffffffa1] flex justify-end">
          Copy
        </div>
      </div>
    </div>
  );
};

export default SendInvite;
