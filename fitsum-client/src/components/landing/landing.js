import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Landing = () => {
  const styles = StyleSheet.create({
    landing: {
      fontFamily: '"Chivo", sans-serif',
      width: '100vw',
      height: '100vh',
      display: 'grid',
      gridTemplateRows: '5vh 95vh',
      backgroundImage: 'url("https://res.cloudinary.com/momojunzi/image/upload/v1567824010/FitsumImages/I_1505_by_Ftsum_Gebray21-03-1984_2.jpg")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    landingContent: {
      gridRowStart: '2',
      display: 'grid',
      gridTemplateRows: '33.3% 33.3% 33.3%'
    },
    landingTitleDiv: {
      fontWeight: 'bold',
      fontSize: '3.5em',
      gridRowStart: '1',
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'start',
      paddingLeft: '5vw',
      '@media (max-width: 767px)': {
        fontSize: '1.65em',
        justifyContent: 'center',
        alignContent: 'start',
        paddingTop: '15%',
        paddingLeft: '0'
      }
    }
  });

  return (
    <div className={css(styles.landing)}>
      <div className={css(styles.landingContent)}>
        <div className={css(styles.landingTitleDiv)}>
          ERITREA REVEALED
        </div>
      </div>
    </div>
  );
};

export default Landing;
