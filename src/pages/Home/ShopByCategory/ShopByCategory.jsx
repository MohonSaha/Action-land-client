import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToyCard from '../CategoryToyCard/CategoryToyCard';
import { FaTag, FaTags, FaUserTag } from 'react-icons/fa';

const ShopByCategory = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [activeTab, setActiveTab] = useState("Marvel")
    const [toys, setToys] = useState([])

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        fetch(`https://zoo-land-server.vercel.app/allToys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])





    return (


        <div className='md:-mt-12 mt-16 '>
            <div className='mb-6 text-center '>
                <h3 className='text-xl text-[#03BFA7] font-semibold'> Shop By Category</h3 >
                <h1 className='text-5xl font-bold'>Trending Toy Categoryes</h1>
            </div>

            <div className="divider text-center mb-16 md:mx-60 mx-6"><FaTags className='text-5xl text-[#03BFA7]'></FaTags></div>


            <div className="flex justify-center">


                <Tabs className=" " selectedIndex={selectedTab} onSelect={handleTabSelect}>
                    <TabList className="flex justify-center md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-12">
                        <Tab
                            onClick={() => handleTabClick("Marvel")}
                            selectedClassName="custom-active-btn"
                            className='px-4 py-2 custom-btn-outline md:mx-0 mx-auto'
                        >
                            Marvel
                        </Tab>
                        <Tab
                            onClick={() => handleTabClick("Star-wars")}
                            selectedClassName="custom-active-btn"
                            className='px-4 py-2 custom-btn-outline md:mx-0 mx-auto'
                        >
                            Star-wars
                        </Tab>

                        <Tab
                            onClick={() => handleTabClick("Transformers")}
                            selectedClassName="custom-active-btn"
                            className='px-4 py-2 custom-btn-outline md:mx-0 mx-auto'
                        >
                            Transformers
                        </Tab>
                    </TabList>



                    <TabPanel className="mt-12 mx-0">

                        <div className="flex gap-6 mx-6 md:flex-row flex-col">
                            {
                                toys.map(toy => <CategoryToyCard
                                    toy={toy}
                                    key={toy._id}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel className="mt-12 mx-0">

                        <div className="flex gap-6 mx-6 md:flex-row flex-col">
                            {
                                toys.map(toy => <CategoryToyCard
                                    toy={toy}
                                    key={toy._id}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel className="mt-12 mx-0">

                        <div className="flex gap-6 mx-6 md:flex-row flex-col">
                            {
                                toys.map(toy => <CategoryToyCard
                                    toy={toy}
                                    key={toy._id}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>





                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;
