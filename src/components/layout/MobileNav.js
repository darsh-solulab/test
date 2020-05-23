import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import MobileNavWrapper from '../../styles/layout/MobileNavStyles';
import Hamburger from './Hamburger';

const MobileNav = ({ mobileNavIsOpen, action }) => {
  return <MobileNavWrapper isOpen={mobileNavIsOpen}></MobileNavWrapper>;
};

MobileNav.propTypes = {
  mobileNavIsOpen: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default MobileNav;
