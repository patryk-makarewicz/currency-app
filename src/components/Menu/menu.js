import React from 'react';

import EuroIcon from '@material-ui/icons/Euro';
import styles from './menu.module.scss';
import NavigationBar from './components/navigation-bar';

const Menu = () => (
  <header className={styles.wrapper}>
    <div className={styles.menu}>
      <div className={styles.logo}>
        <EuroIcon style={{ fontSize: 18.5, color: 'white' }} />
        <p className={styles.logo__title}>URRENCY APP</p>
      </div>
      <NavigationBar />
    </div>
  </header>
);

export default Menu;