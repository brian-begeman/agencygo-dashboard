import React from 'react';

import HomeSvg from 'renderer/assets/svg/homeSvg';
import OnlyManagerSvg from 'renderer/assets/svg/onlyManager';
import AnalyticsSvg from 'renderer/assets/svg/analyticsSvg';
import GrowthSvg from 'renderer/assets/svg/growthSvg';
import S4sSvg from 'renderer/assets/svg/s4sSvg';
import CreatorSvg from 'renderer/assets/svg/creatorsSvg';
import EmployeSvg from 'renderer/assets/svg/employeSvg';
import BrandLogoSvg from 'renderer/assets/svg/brandLogoSvg';
import localisation from '../../../localisation.json';
import SidebarItem from './SidebarItem';
import classes from './styles.module.css';

const sideBarMenuConst = [
  {
    name: localisation.home,
    icon: <HomeSvg />,
    menu: [],
    link: '/home',
  },
  {
    name: localisation.manager,
    icon: <OnlyManagerSvg />,
    menu: [],
    link: '/manager-suite',
  },
  {
    name: localisation.analytics,
    icon: <AnalyticsSvg />,
    menu: [
      {
        label: 'Create Reports',
        value: 'createReports',
      },
      {
        label: 'Chatter Reports',
        value: 'chatterReports',
      },
      {
        label: 'Fan Reports',
        value: 'fanReports',
      },
    ],
  },
  {
    name: localisation.growth,
    icon: <GrowthSvg />,
    menu: [
      {
        label: 'Smart Tags',
        value: 'smartTags',
        link: '/growth/smart-tags',
      },
      {
        label: 'Auto Follow',
        value: 'autoFollow',
        link: '/growth/auto-follow',
      },
      {
        label: 'Profile Promotion',
        value: 'profilePromotion',
        link: '/growth/profile-promotion',
      },
      {
        label: 'Trail Links',
        value: 'trialLinks',
        link: '/growth/trial-links',
      },
      {
        label: 'Tracking Links',
        value: 'trackingLinks',
        link: '/growth/tracking-links',
      },
      {
        label: 'Scrips',
        value: 'scripts',
        link: '/growth/scripts',
      },
      {
        label: 'Trial Links',
        value: 'trialLinks',
        link: '/growth/trial-links',
      },
    ],
  },
  {
    name: localisation.s4s,
    icon: <S4sSvg />,
    menu: [
      {
        label: 'Discover Creators',
        value: 'discoverCreators',
        link: '/s4s/discover-creators',
      },
      {
        label: 'Invite Link',
        value: 'inviteLink',
        link: '/s4s/invite-link',
      },
      {
        label: 'Requests',
        value: 'requests',
        link: '/s4s/requests',
      },
      {
        label: 'S4S Schedule',
        value: 's4sSchedule',
      },
      {
        label: 'S4S Settings',
        value: 's4sSettings',
      },
    ],
  },
  {
    name: localisation.creators,
    icon: <CreatorSvg />,
    menu: [],
    link: '/creators',
  },
  {
    name: localisation.employees,
    icon: <EmployeSvg />,
    menu: [
      {
        label: 'Manage Employees',
        value: 'manageEmployees',
        link: '/employees-manage-employees',
      },
      {
        label: 'Manage Shifts',
        value: 'manageShifts',
        link: '/employees-manage-shifts',
      },
    ],
  },
];

function BrandLogo() {
  return (
    <div className={classes.brandLogo}>
      <div className={classes.brandIcon}>
        <BrandLogoSvg />
      </div>
    </div>
  );
}

function SideBar() {
  const [currentNavItemHovered, setCurrentNavItemHovered] =
    React.useState<number>(-1);
  const handlePopoverOpen = (index: number) => {
    setCurrentNavItemHovered(index);
  };

  const handlePopoverClose = () => {
    setCurrentNavItemHovered(-1);
  };

  return (
    <div className={classes.sidebar}>
      <BrandLogo />
      <div className={classes.sidebarNavWrapper}>
        {sideBarMenuConst.map(({ name, icon, menu, link }, index) => {
          return (
            <SidebarItem
              handlePopoverOpen={handlePopoverOpen}
              handlePopoverClose={handlePopoverClose}
              name={name}
              icon={icon}
              menu={menu}
              currentNavItemHovered={currentNavItemHovered}
              index={index}
              link={link}
              key={name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
