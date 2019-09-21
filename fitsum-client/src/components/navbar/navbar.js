import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [navMargin, setNavMargin] = useState('-61vh');
  const [navIcon, setNavIcon] = useState('menu');
  const [hbBackground, setHbBackground] = useState('rgba(255,255,255,0.0)');

  const styles = StyleSheet.create({
    navBar: {
      '@media (min-width: 768px) and (max-width: 991px)': {
        gridTemplateColumns: '10vw 80vw 10vw'
      },
      '@media (min-width: 992px) and (max-width: 1200px)': {
        gridTemplateColumns: '15vw 70vw 15vw'
      },
      position: 'absolute',
      zIndex: '100',
      display: 'grid',
      gridTemplateColumns: '25vw 50vw 25vw',
      color: 'white',
      alignContent: 'center',
      paddingLeft: '0'
    },
    navDiv: {
      '@media (max-width: 767px)': {
        display: 'grid',
        gridTemplateRows: '10vh 10vh 10vh 10vh 10vh 10vh 5vh',
        width: '100vw',
        height: '65vh',
        marginTop: navMargin,
        marginBottom: '0',
        marginLeft: '0',
        paddingTop: '0',
        backgroundColor: hbBackground,
        transition: 'margin 0.75s, background-color 0.75s'
      },
      '@media (min-width: 768px)': {
        display: 'grid',
        gridTemplateColumns: '16.66% 16.66% 16.66% 16.66% 16.66% 16.66%',
        gridColumnStart: '2',
        textAlign: 'start'
      }
    },
    link: {
      fontFamily: '"Comfortaa", cursive',
      fontWeight: 'bold',
      fontSize: '1.25em',
      display: 'grid',
      alignContent: 'center',
      textAlign: 'center',
      color: 'black',
      '@media (max-width: 767px)': {
        borderBottom: 'solid black 1px'
      }
    },
    hamburgerDiv: {
      '@media (max-width: 767px)': {
        display: 'grid',
        color: 'black',
        backgroundColor: hbBackground,
        transition: 'background-color 0.75s'
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
      setHbBackground('rgba(255,255,255,0.9)');
    } else {
      setNavMargin('-61vh');
      setNavIcon('menu');
      setHbBackground('rgba(255,255,255,0.0)');
    }
  };

  return (
    <Navbar className={css(styles.navBar)} >
      <div className={css(styles.navDiv)}>
        <Link to='/gallery' className={css(styles.link)} >Gallery</Link>
        <Link to='/videos' className={css(styles.link)} >Videos</Link>
        <Link to='/history' className={css(styles.link)} >History</Link>
        <Link to='/bio' className={css(styles.link)} >Biography</Link>
        <Link to='/tourism' className={css(styles.link)} >Tourism</Link>
        <Link to='/articles' className={css(styles.link)} >Articles</Link>
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
