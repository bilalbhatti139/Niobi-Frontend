import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import PersonalDetails from './personal-details/PersonalDetails';
import CoachFeed from './coach-feed/CoachFeed';
import Programs from './programs/Programs';
import Reviews from './reviews/Reviews';
import { useEffect, useState } from 'react';

const ProfileTabs = (props) => {
  const [tabs, setTabs] = useState('personalDetails');

  const data = [
    {
      label: 'Personal Details',
      value: 'personalDetails',
      desc: (
        <PersonalDetails
          isPublic={props.isPublic}
          profile_data={props.profile_data}
          user_data={props.user_data}
          settings_data={props.settings_data}
          set_is_render={props.set_is_render}
        />
      )
    },
    {
      label: 'Feed',
      value: 'feed',
      desc: <CoachFeed isPublic={props.isPublic} />
    },

    {
      label: 'Programs',
      value: 'programs',
      desc: <Programs isPublic={props.isPublic} />
    },

    {
      label: 'Reviews',
      value: 'reviews',
      desc: <Reviews isPublic={props.isPublic} />
    }
  ];

  return !props.isPublic ? (
    <Tabs id="custom-animation" value="personalDetails">
      <TabsHeader className="bg-white rounded-lg ">
        {data.map((item, index) => (
          <Tab
            onClick={() => {
              setTabs(item.value);
            }}
            key={index}
            value={item.value}>
            <div
              className={` ${
                item.value == tabs
                  ? 'shadow py-5 border-[rgb(148,6,135)]  border-b-4 rounded-lg'
                  : 'shadow py-5 '
              }`}>
              {item.label}
            </div>
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody>
        {data.map((item, index) => (
          <TabPanel key={index} value={item.value}>
            {item.desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  ) : (
    data.map((item, index) => {
      return (
        <>
          <div key={index}>{item.desc}</div>
        </>
      );
    })
  );
};

export default ProfileTabs;
