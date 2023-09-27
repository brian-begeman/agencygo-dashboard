import { Routes, Route, Navigate } from 'react-router-dom';
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
import ProfilePromotion from './pages/Growth/ProfilePromotion';
import TrackingLinks from './pages/Growth/TrackingLinks';
import ShareForShare from './pages/ShareForShare';
import DiscoverCreators from './pages/ShareForShare/DiscoverCreators';
import InviteLink from './pages/ShareForShare/InviteLink';
import CreatePost from './pages/ShareForShare/InviteLink/CreatePost';
import useAuth from './hooks/useAuth';
import Requests from './pages/ShareForShare/Requests';

const ROUTES = [
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
        path: 'auto-follow-scan-details',
        element: <ScanDetails />,
        pathName: 'Scan Details',
        nestedLink: '/growth/auto-follow-scan-details',
      },
      {
        path: 'scripts',
        element: <Scripts />,
        pathName: 'Scripts',
        nestedLink: '/growth/scripts',
      },
      {
        path: 'profile-promotion',
        element: <ProfilePromotion />,
        pathName: 'Profile Promotion',
        nestedLink: '/growth/profile-promotion',
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
    path: 's4s',
    element: <ShareForShare />,
    pathName: 'Share For Share',
    nestedRoutes: [
      {
        path: 'discover-creators',
        element: <DiscoverCreators />,
        pathName: 'Discover Creators',
        nestedLink: '/s4s/discover-creators',
      },
      {
        path: 'invite-link',
        element: <InviteLink />,
        pathName: 'Invite Link',
        nestedLink: '/s4s/invite-link',
      },
      {
        path: 'invite-link-create-post',
        element: <CreatePost />,
        pathName: 'Create Post',
        nestedLink: '/s4s/invite-link-create-post',
      },
      {
        path: 'requests',
        element: <Requests />,
        pathName: 'Requests',
        nestedLink: '/s4s/requests',
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

function AppRoutes() {
  const { isLogin } = useAuth();
  return (
    <Routes>
      {isLogin ? (
        <>
          <Route path="/" element={<Navigate to="/home" />} />
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
        </>
      ) : (
        <Route path="*" element={<Login />} />
      )}
    </Routes>
  );
}

export default AppRoutes;
