import React from 'react';
import './HeaderS.sass'
import Logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch,faPerson, faGear, faBell, faFileUpload, faGlobe } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="left-content">
          <div className="logo"><img src={Logo} alt="err" /></div>
          <div className="menu-btn"><FontAwesomeIcon icon={faBars }/></div>
        </div>
        <div className="right-content">
          <div className="hIcon search-bar"><FontAwesomeIcon icon={faSearch }/></div>
          <div className="hIcon lang"><FontAwesomeIcon icon={faGlobe }/></div>
          <div className="hIcon full-screen"><FontAwesomeIcon icon={faFileUpload }/></div>
          <div className="hIcon notification"><FontAwesomeIcon icon={faBell }/></div>
          <div className="hIcon profile"><FontAwesomeIcon icon={faPerson }/></div>
          <div className="hIcon setting"><FontAwesomeIcon icon={faGear }/></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
