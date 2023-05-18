import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="flex justify-center mt-20">
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList className="flex">
          <Tab
            className={`px-4 py-2 rounded-sm ${
              selectedTab === 0 ? 'bg-blue-500 text-red-700' : 'bg-[#03BFA7] text-white'
            }`}
          >
            Teddy Bear
          </Tab>
          <Tab
            className={`px-4 py-2 ${
              selectedTab === 1 ? 'bg-red-500 text-white' : 'bg-[#03BFA7] text-white'
            }`}
          >
            Unicorn
          </Tab>

          <Tab
            className={`px-4 py-2 ${
              selectedTab === 2 ? 'bg-red-500 text-white' : 'bg-[#03BFA7] text-white'
            }`}
          >
            Dinosaur
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Category 1 Content</h2>
          {/* Add your content for Category 1 here */}
        </TabPanel>
        <TabPanel>
          <h2>Category 2 Content</h2>
          {/* Add your content for Category 2 here */}
        </TabPanel>
        <TabPanel>
          <h2>Category 3 Content</h2>
          {/* Add your content for Category 3 here */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
