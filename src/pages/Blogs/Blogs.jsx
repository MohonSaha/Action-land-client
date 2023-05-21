import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-20 py-20 px-6 md:px-24 bg-base-200 min-h-screen'>
            <div className='py-8 bg-white px-10 rounded-2xl'>
                <h2 className='text-3xl font-semibold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-lg'>An access token and refresh token are commonly used in authentication and authorization systems to grant and manage user access to protected resources. The use of access and refresh tokens helps to enhance security and minimize the exposure of sensitive credentials. By regularly rotating access tokens and using refresh tokens, the risk of unauthorized access or token misuse can be reduced.</p>
                <p><strong>1. Access token</strong>  is a credential that is issued to a user after they have successfully authenticated with an identity provider or authorization server. It represents the user's authorization to access certain resources or perform specific actions within an application or API.</p>
                <p>
                    <strong>2. Refresh token</strong> is a credential that is also issued to a user during the authentication process, along with the access token. Unlike access tokens, refresh tokens have a longer lifespan and are used to obtain new access tokens without requiring the user to re-authenticate. When an access token expires, the client application can send the refresh token to the authorization server to obtain a new access token.
                </p>
            </div>


            <div className='py-8 bg-white px-3 md:px-10 rounded-2xl mt-6'>
                <h2 className='text-3xl font-semibold'>2. Compare SQL and NoSQL databases?</h2>
                <div className='mt-6'>
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="py-3 px-4 bg-gray-200">Feature</th>
                                    <th className="py-3 px-4 bg-gray-200">SQL databases</th>
                                    <th className="py-3 px-4 bg-gray-200">NoSQL databases</th>
                                </tr>
                            </thead>


                            <tbody>
                                <tr className="bg-white text-center">
                                    <td className="py-3 px-4 font-semibold">Structure</td>
                                    <td className="py-3 px-4">SQL databases are based on a structured, tabular data model, where data is organized into tables with predefined schemas.</td>
                                    <td className="py-3 px-4">NoSQL databases are designed to store and manage unstructured or semi-structured data, such as JSON, key-value pairs, documents, or graphs.</td>
                                </tr>


                                
                                <tr className="bg-white text-center">
                                    <td className="py-3 px-4 font-semibold">Schema</td>
                                    <td className="py-3 px-4">SQL databases enforce a rigid schema, which means the structure and types of data must be defined before inserting data.</td>
                                    <td className="py-3 px-4">NoSQL databases are schema-less or have a flexible schema.</td>
                                </tr>

                                <tr className="bg-white text-center">
                                    <td className="py-3 px-4 font-semibold">Scalability</td>
                                    <td className="py-3 px-4">SQL databases generally scale vertically, meaning they are designed to run on a single server and handle increased workload by upgrading the hardware.</td>
                                    <td className="py-3 px-4">NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers, making it easier to handle high-volume workloads and provide high availability.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className='py-8 bg-white px-10 rounded-2xl mt-6'>
                <h2 className='text-3xl font-semibold'>3. What is express js? What is Nest JS? </h2>
                <p className='text-lg'>Express.js is a lightweight and flexible web application framework for Node.js, while NestJS is a more opinionated and structured framework built on top of Express.js, offering additional features and architectural patterns.</p>

                <p className='text-lg'><strong>Express js: </strong>
                    Express.js is a popular web application framework for Node.js. It provides a simple and flexible approach to building web applications and APIs. Express.js allows developers to handle routes, middleware, and HTTP requests easily. It provides a set of methods and utilities for managing various aspects of web development, such as handling HTTP requests and responses, routing, middleware, and template rendering.</p>

                <p className='text-lg'><strong>NestJS: </strong>
                    NestJS is a progressive, TypeScript-based framework for building efficient and scalable server-side applications. It is built on top of Express.js and leverages TypeScript's features to provide a highly structured and modular approach to application development. NestJS follows the architectural pattern known as "Model-View-Controller" (MVC), and it emphasizes the use of decorators and dependency injection to create reusable and testable code.</p>
            </div>


            <div className='py-8 bg-white px-10 rounded-2xl mt-6'>
                <h2 className='text-3xl font-semibold'>4. What is MongoDB aggregate and how does it work?</h2>
                <p className='text-lg'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. MongoDB's Aggregation enables you to perform advanced data processing and analysis, helping you gain insights, generate reports, and manipulate data within the database itself.</p>

                <p className='text-lg'><strong>Work Process: </strong>
                    MongoDB's Aggregation works by processing data within the database server using a pipeline of stages. The pipeline consists of a sequence of stages, where each stage applies a specific operation to the data and passes the transformed data to the next stage. When you execute an aggregation query in MongoDB, the server receives the query and executes it using the Aggregation Framework.</p>

                <strong className='text-lg'>Overview of how it works</strong>
                <div className='ml-8 text-lg'>
                    <ol className='list-decimal'>
                        <li>Data Source</li>
                        <li>Stages</li>
                        <li>Data Flow</li>
                        <li>Transformation</li>
                        <li>Pipeline Optimization</li>
                        <li>Output</li>
                    </ol>
                </div>
            </div>


        </div >
    );
};

export default Blogs;