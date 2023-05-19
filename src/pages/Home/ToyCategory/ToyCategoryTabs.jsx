import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyCategoryTabs = () => {
  return (
    <Tabs>
      <TabList className="flex">
        <Tab
          className={({ selected }) =>
            selected
              ? 'flex-1 p-4 text-center bg-blue-500 text-white'
              : 'flex-1 p-4 text-center bg-red-800'
          }
        >
          Category 1
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? 'flex-1 p-4 text-center bg-blue-500 text-white'
              : 'flex-1 p-4 text-center bg-gray-200'
          }
        >
          Category 2
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? 'flex-1 p-4 text-center bg-blue-500 text-white'
              : 'flex-1 p-4 text-center bg-gray-200'
          }
        >
          Category 3
        </Tab>
      </TabList>

      <TabPanel className="p-4">
        <p>Content for Category 1</p>
      </TabPanel>
      <TabPanel className="p-4">
        <p>Content for Category 2</p>
      </TabPanel>
      <TabPanel className="p-4">
        <p>Content for Category 3</p>
      </TabPanel>
    </Tabs>
  );
};

export default ToyCategoryTabs;

