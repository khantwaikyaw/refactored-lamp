import React from 'react';
import Particles from 'react-particles-js';
import './ComingSoon.scss';

const ComingSoon = () => (
  <div className="ComingSoon-wrapper">
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
