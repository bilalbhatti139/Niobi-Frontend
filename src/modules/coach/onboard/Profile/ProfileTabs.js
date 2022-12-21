import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { useState } from 'react';
import PersonalDetails from './personal-details/PersonalDetails';
import MyPrograms from './my-programs/MyPrograms';
import Reviews from './reviews/Reviews';
import CoachFeed from './coach-feed/CoachFeed';
import CompleteProfile from './complete-profile/CompleteProfile';

export default function ProfileTabs(props) {
  const [tabs, setTabs] = useState('personalDetails');
  const data = [
    {
      label: 'Personal Details',
      value: 'personalDetails',
      desc: <PersonalDetails data={props} />
    },
    {
      label: 'Feed',
      value: 'feed',
      desc: <CoachFeed />
    },

    {
      label: 'Programs',
      value: 'programs',
      desc: <MyPrograms />
    },

    {
      label: 'Reviews',
      value: 'reviews',
      desc: <Reviews />
    }
  ];

  return (
    <Tabs id="custom-animation" value="personalDetails">
      <TabsHeader className="bg-white rounded rounded-lg z-0">
        {data.map((item, index) => (
          <Tab
            className="z-0"
            onClick={() => {
              setTabs(item.value);
            }}
            key={index}
            value={item.value}
          >
            <div
              className={` z-0 ${
                item.value == tabs
                  ? 'shadow py-5 border-[rgb(148,6,135)]  border-b-4 rounded-lg '
                  : 'shadow py-5 '
              }`}
            >
              {item.label}
            </div>
          </Tab>
        ))}
      </TabsHeader>

      <CompleteProfile />
      <TabsBody>
        {data.map((item, index) => (
          <TabPanel key={index} value={item.value}>
            {item.desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
