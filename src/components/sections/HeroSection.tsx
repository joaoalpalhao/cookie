import React from 'react';
import TypedWrapper from '../typed_wrapper';
import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  main: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    backgroundColor: 'var(--dark-background-color-black)',
    //boxShadow: '0 -0.75em 2em 1em var(--dark-shadow-light)',
    //zIndex: 2,
  },
  text: {
    color: 'var(--dark-text-color-white)',
    lineHeight: '1.5',
    fontSize: '3.9975843648em',
  },
})

const options = {
  strings: ['Passionate about coding.', 'Passionate about photography.', 'Passionate about comedy.'],
  typeSpeed: 40,
  backSpeed: 40,
  startDelay: 1000,
  backDelay: 2000,
  loop: true,
  showCursor: false,
}

const HeroSection: React.FC = () => {
  return (
    <div className={stylex(styles.main)}>
      <TypedWrapper xstyle={styles.text} options={options}/>
    </div>
  );
}

export default HeroSection;
