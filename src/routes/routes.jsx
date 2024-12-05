import Layout from "../component/layout/Layout";
import ForgetPassword from "../pages/homepage/ForgetPassword";
import LoginPage from "../pages/homepage/LoginPage";
import RolePage from "../pages/homepage/RolePage";
import SignupPage from "../pages/homepage/SignupPage";
import Dashboard from "../pages/homepage/dashboard";


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
    },
    {
        path: "/rolePage",
        element: <RolePage/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    }

]