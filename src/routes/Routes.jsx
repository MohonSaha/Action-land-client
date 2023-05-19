import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/UserAuth/Login/Login";
import SignUp from "../pages/UserAuth/Signup/Signup";
import AllToys from "../pages/AllToys/AllToys";
import SingleToyDetails from "../pages/SingleToyDetails/SingleToyDetails";
import AddAToy from "../pages/AddAToy/AddAToy";
import Error from "../pages/Error/Error";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
            },
            {
                path: '/addToy',
                element: <AddAToy></AddAToy>
            },
            {
                path: '/toyDetails/:id',
                element: <SingleToyDetails></SingleToyDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
]);


export default router;