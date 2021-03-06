import React from 'react';
import Particles from 'react-particles-js';
import styles from './ComingSoon.module.scss';

const ComingSoon = () => (
  <div className={styles.wrapper}>
    <h1>Coming Soon...</h1>
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  </div>
);

export default ComingSoon;
