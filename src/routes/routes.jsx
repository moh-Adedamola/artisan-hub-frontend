import Layout from "../component/layout/Layout";
import ForgetPassword from "../pages/homepage/ForgetPassword";
import LoginPage from "../pages/homepage/LoginPage";
import SignupPage from "../pages/homepage/SignupPage";


export const ROUTE=[
    {
        path: "/",
        element: <Layout/>,
    },
    {
        path: "/signUp",
        element: <SignupPage></SignupPage>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/forgetPassword",
        element: <ForgetPassword/>
    }

]