import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToyCard from '../CategoryToyCard/CategoryToyCard';
import { FaTag, FaTags, FaUserTag } from 'react-icons/fa';

const ShopByCategory = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [activeTab, setActiveTab] = useState("Unicorn")
    const [toys, setToys] = useState([])

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])





    return (


        <div className=''>
            <div className='mb-6 text-center '>
                <h3 className='text-xl text-[#03BFA7] font-semibold'> Shop By Category</h3 >
                <h1 className='text-5xl font-bold'>Trending Toy Categoryes</h1>
            </div>

            <div className="divider text-center mb-16 md:mx-60 mx-6"><FaTags className='text-5xl text-[#03BFA7]'></FaTags></div>


            <div className="flex justify-center">


                <Tabs className=" " selectedIndex={selectedTab} onSelect={handleTabSelect}>
                    <TabList className="flex justify-center space-x-12">
                        <Tab
                            onClick={() => handleTabClick("Unicorn")}
                            selectedClassName="custom-active-btn"
                            className='px-4 py-2 custom-btn-outline'
                        >
                            Unicorn
                        </Tab>
                        <Tab
                            onClick={() => handleTabClick("Teddy-bear")}
                            selectedClassName="custom-active-btn"
                            className='px-4 py-2 custom-btn-outline'
                        >
                            Teddy Bear
                        </Tab>

                        <Tab
                            onClick={() => handleTabClick("Dinosaur")}
                            selectedClassName="custom-active-btn"
                            className='px-4 py-2 custom-btn-outline'
                        >
                            Dinosaur
                        </Tab>
                    </TabList>



                    <TabPanel className="mt-12">

                        <div className="flex gap-12">
                            {
                                toys.map(toy => <CategoryToyCard
                                    toy={toy}
                                    key={toy._id}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>

                        <div className="flex gap-12">
                            {
                                toys.map(toy => <CategoryToyCard
                                    toy={toy}
                                    key={toy._id}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>

                        <div className="flex gap-12">
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
