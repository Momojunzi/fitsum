import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [navMargin, setNavMargin] = useState('-41vh');
  const [navIcon, setNavIcon] = useState('menu');

  const styles = StyleSheet.create({
    navBar: {
      position: 'absolute',
      zIndex: '100',
      display: 'grid',
      gridTemplateColumns: '33.3vw 33.3vw 33.3vw',
      color: 'white',
      alignContent: 'center',
      paddingLeft: '0'
    },
    navDiv: {
      '@media (max-width: 767px)': {
        display: 'grid',
        gridTemplateRows: '10vh 10vh 10vh 10vh 5vh',
        width: '100vw',
        height: '45vh',
        marginTop: navMargin,
        marginBottom: '0',
        marginLeft: '0',
        paddingTop: '0',
        opacity: '100',
        transition: 'margin 0.75s'
      },
      '@media (min-width: 768px)': {
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        gridColumnStart: '2',
        textAlign: 'start'
      }
    },
    link: {
      display: 'grid',
      alignContent: 'center',
      color: 'black',
      '@media (max-width: 767px)': {
        borderBottom: 'solid black 1px'
      }
    },
    hamburgerDiv: {
      '@media (max-width: 767px)': {
        display: 'grid',
        color: 'black'
      },
      '@media (min-width: 768px)': {
        display: 'none'
      }
    },
    navIcon: {
      paddingTop: '5px'
    }
  });

  const clickHamburger = () => {
    if (navMargin !== '-2vh') {
      setNavMargin('-2vh');
      setNavIcon('close');
    } else {
      setNavMargin('-41vh');
      setNavIcon('menu');
    }
  };

  return (
    <Navbar className={css(styles.navBar)} >
      <div className={css(styles.navDiv)}>
        <Link to='#features' className={css(styles.link)} >Galleries</Link>
        <Link to='#videos' className={css(styles.link)} >Videos</Link>
        <Link to='#history' className={css(styles.link)} >History</Link>
        <Link to='#bio' className={css(styles.link)} >Biography</Link>
        <div onClick={clickHamburger} className={css(styles.link, styles.hamburgerDiv)}>
          <div className={css(styles.navIcon)}>
            <i className='material-icons'>{navIcon}</i>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
