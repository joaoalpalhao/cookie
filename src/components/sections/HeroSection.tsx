import React from 'react';
import TypedWrapper from '../typed_wrapper';
import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  section: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    backgroundColor: 'var(--dark-background-color-black)',
  },
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    marginLeft: '4em',
    marginRight: '4em',
  },
  typedOuter: {
    width: '36em',
    maxWidth: '36em',
    height: '2.5em',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  typed: {
    color: 'var(--dark-text-color-white)',
    fontSize: '2em',
  },
})

const options = {
  strings: ['Passionate about coding.', 'Passionate about photography.', 'Passionate about gaming.'],
  typeSpeed: 40,
  backSpeed: 40,
  startDelay: 1000,
  backDelay: 2000,
  loop: true,
  cursorChar: '&nbsp',
  autoInsertCss: false,
}

const HeroSection: React.FC = () => {
  return (
    <div className={stylex(styles.section)}>
      <div className={stylex(styles.main)}>
        <div className={stylex(styles.content)}>
          <div className={stylex(styles.typedOuter)}>
            <TypedWrapper xstyle={styles.typed} options={options}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
