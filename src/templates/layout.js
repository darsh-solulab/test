import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { LayoutWrapper } from '../styles/layout/LayoutStyles';
import Header from '../components/layout/Header';
import ThemeToggleBtn from '../components/layout/ThemeToggleBtn';
import MobileNav from '../components/layout/MobileNav';

const Layout = ({ children, path, seo }) => {
  const theme = useContext(ThemeContext);
  let [mobileNavIsOpen, toggleMobileNav] = useState(false);

  const mobileNavAction = () => {
    toggleMobileNav(
      mobileNavIsOpen ? (mobileNavIsOpen = false) : (mobileNavIsOpen = true)
    );
  };

  return (
    <ThemeProvider theme={theme.currentTheme}>
      <LayoutWrapper>
        <div style={{ position: 'absolute', top: '0', zIndex: '1' }}>
          <Header />
          <MobileNav
            mobileNavIsOpen={mobileNavIsOpen}
            action={mobileNavAction}
          />
        </div>

        <main>{children}</main>

        <ThemeToggleBtn />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  seo: PropTypes.object.isRequired,
};

export default Layout;
