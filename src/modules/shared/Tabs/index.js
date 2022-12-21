import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

const CustomTabs = (props) => {
  const [isActive, setActive] = useState(props.data[0]);

  useEffect(() => {
    setActive(props.data[0]);
  }, [props.data]);

  return props.data ? (
    <Tabs id="controlled-tabs" value={isActive.value}>
      <TabsHeader className="rounded-lg ">
        {props.data.map((item) => (
          <Tab key={item.value} value={item.value} className={'shadow py-5 '}>
            {item.label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {props.data.map((item) => (
          <TabPanel key={item.value} value={item.value}>
            {item.desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  ) : (
    <></>
  );
};

export default CustomTabs;
