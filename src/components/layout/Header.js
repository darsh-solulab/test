import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { HeaderWrapper } from '../../styles/layout/HeaderStyles';
import '../../styles/layout/hamburgers.css';

const Header = () => {
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        setIsScrolled((isScrolled = true));
      } else {
        setIsScrolled((isScrolled = false));
      }
    });
  }, []);

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <div className="navContainer">
        <div id="logo">
          <Link to="/" aria-label="to home page">
            <h2 style={{ fontSize: '20px' }}>
              <i>Darsh Shah</i>
            </h2>
          </Link>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
