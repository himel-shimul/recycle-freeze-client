import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Home from '../../pages/Home/Home/Home';
import Products from '../../pages/Products/Products';
import Login from '../../pages/Shared/Login/Login';
import SignUp from '../../pages/Shared/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
        ]
    }
])

export default router;