import { Routes, Route, Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import Login from './pages/Auth/Login';
import OnlyfansAccount from './pages/OnlyfansAccount';
import DashboardPage from './pages/DasboardPage';
import ManagerSuite from './pages/ManagerSuite';
import EmployeeShifts from './pages/EmployeeShifts';
import ManageCreators from './pages/ManageCreators';
import Notification from './pages/Notification';
import HomePage from './pages/HomePageContent';
import ManageEmployees from './pages/ManageEmployees';
import SmartTags from './pages/Growth/SmartTags';
import AutoFollow from './pages/Growth/AutoFollow';
import ScanDetails from './pages/Growth/AutoFollow/ScanDetails';
import Settings from './pages/Settings';
import Growth from './pages/Growth';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import Scripts from './pages/Growth/Scripts';
import TrackingLinks from './pages/Growth/TrackingLinks';

const ROUTES = [
  {
    path: '/login',
    element: <Login />,
    pathName: 'Login',
  },
  {
    path: '/home',
    element: <HomePage />,
    pathName: 'Home Page',
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    pathName: 'Dashboard Page',
  },
  {
    path: '/of-account',
    element: <OnlyfansAccount />,
    pathName: 'Onlyfans Account Page',
  },
  {
    path: '/manager-suite',
    element: <ManagerSuite />,
    pathName: 'Manager Suite',
  },
  {
    path: '/employees-manage-shifts',
    element: <EmployeeShifts />,
    pathName: 'Employee shifts ui',
  },
  {
    path: '/creators',
    element: <ManageCreators />,
    pathName: 'Manage Creators',
  },
  {
    path: '/notification',
    element: <Notification />,
    pathName: 'Notification',
  },
  {
    path: '/employees-manage-employees',
    element: <ManageEmployees />,
    pathName: 'Manage Employees',
  },
  {
    path: 'growth',
    element: <Growth />,
    pathName: 'Growth',
    nestedRoutes: [
      {
        path: 'smart-tags',
        element: <SmartTags />,
        pathName: 'Smart Tags',
        nestedLink: '/growth/smart-tags',
      },
      {
        path: 'auto-follow',
        element: <AutoFollow />,
        pathName: 'Auto Follow',
        nestedLink: '/growth/auto-follow',
      },
      {
        path: 'scan-details',
        element: <ScanDetails />,
        pathName: 'Scan Details',
        nestedLink: '/growth/scan-details',
      },
      {
        path: 'scripts',
        element: <Scripts />,
        pathName: 'Scripts',
        nestedLink: '/growth/scripts',
      },
      {
        path: 'tracking-links',
        element: <TrackingLinks />,
        pathName: 'Tracking Links',
        nestedLink: '/growth/tracking-links',
      },
    ],
  },
  {
    path: '/settings',
    element: <Settings />,
    pathName: 'Settings',
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

function Main() {
  return (
    <main className="App">
      <section className="main">
        {ROUTES.map(
          ({ path, pathName, nestedRoutes }) =>
            path !== '/' && (
              <Box sx={{ border: nestedRoutes ? '1px solid #AAAAAA' : '' }}>
                {nestedRoutes ? (
                  <Box>
                    <Typography component="small">{pathName}</Typography>
                    <Stack component="ul">
                      {nestedRoutes.map((nestedRoute) => (
                        <li key={nestedRoute.path}>
                          <Link to={nestedRoute.nestedLink}>
                            {nestedRoute.pathName}
                          </Link>
                        </li>
                      ))}
                    </Stack>
                  </Box>
                ) : (
                  <Link key={path} to={path}>
                    {pathName}
                  </Link>
                )}
              </Box>
            )
        )}
      </section>
    </main>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {ROUTES.map(({ path, element, nestedRoutes }) =>
        nestedRoutes ? (
          <Route key={path} path={path} element={element}>
            {nestedRoutes.map((nestedRoute) => (
              <Route
                key={nestedRoute.path}
                path={nestedRoute.path}
                element={nestedRoute.element}
              />
            ))}
          </Route>
        ) : (
          <Route key={path} path={path} element={element} />
        )
      )}
    </Routes>
  );
}

AppRoutes.Main = Main;

export default AppRoutes;
