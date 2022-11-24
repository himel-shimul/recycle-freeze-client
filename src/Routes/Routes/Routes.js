import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Shared/Login/Login';

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
        ]
    }
])

export default router;