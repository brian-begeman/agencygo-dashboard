import Dashboard from 'renderer/components/Dashboard';

import PageTopbar from 'renderer/components/PageTopbar';

import AccountSvg from 'renderer/assets/svg/AccountSvg';
import PreferencesSvg from 'renderer/assets/svg/PreferencesSvg';
import BillingSvg from 'renderer/assets/svg/BillingSvg';
import WalletSvg from 'renderer/assets/svg/WalletSvg';
import RoleSvg from 'renderer/assets/svg/RoleSvg';
import SalesSvg from 'renderer/assets/svg/SalesSvg';
import AboutSvg from 'renderer/assets/svg/AboutSvg';
import PartnersSvg from 'renderer/assets/svg/PartnersSvg';
import { useState } from 'react';
import NavTabs from 'renderer/components/NavTabs';
import YourAccount from 'renderer/components/Settings/YourAccount';
import styles from './styles.module.css';
import localisation from '../../components/localisation.json';
import Preferences from 'renderer/components/Settings/Preferences';

const navList = [
  {
    label: 'Your account',
    icon: <AccountSvg />,
    value: 'yourAccount',
  },
  {
    label: 'Preferences',
    icon: <PreferencesSvg />,
    value: 'preferences',
  },
  {
    label: 'Billing',
    icon: <BillingSvg />,
    value: 'billing',
  },
  {
    label: 'Wallet',
    icon: <WalletSvg />,
    value: 'wallet',
  },
  {
    label: 'Role Settings',
    icon: <RoleSvg />,
    value: 'roleSetting',
  },
  {
    label: 'Sales Settings',
    icon: <SalesSvg />,
    value: 'salesSettings',
  },
  {
    label: 'About AgencyGo',
    icon: <AboutSvg />,
    value: 'about',
  },
  {
    label: 'Partners',
    icon: <PartnersSvg />,
    value: 'partners',
  },
];
export default function Settings() {
  const [selectedNav, setSelectedNav] = useState('yourAccount');
  const handleOnChange = (value: string) => {
    setSelectedNav(value);
  };

  const renderScreen = (selected: string) => {
    switch (selected) {
      case 'yourAccount':
        return <YourAccount />;
      case 'preferences':
        return <Preferences />;
      default:
        return <h1>Not found</h1>;
    }
  };
  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <PageTopbar.HeaderText>{localisation.settings}</PageTopbar.HeaderText>
        </PageTopbar>
        <div className={styles.innerWrapper}>
          <aside className={styles.aside}>
            <div className={styles.navListWrap}>
              {navList.map((navItem, index) => {
                return (
                  <NavTabs
                    isActive={navItem.value === selectedNav}
                    key={index}
                    navItem={navItem}
                    handleOnChange={handleOnChange}
                  />
                );
              })}
            </div>
          </aside>
          <div className={styles.rightSideWrapper}>
            {renderScreen(selectedNav)}
          </div>
        </div>
      </section>
    </Dashboard>
  );
}
