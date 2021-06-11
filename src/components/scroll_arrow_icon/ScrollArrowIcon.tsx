import React from 'react';
import stylex from "@ladifire-opensource/stylex";
import { CssStyle } from '@ladifire-opensource/stylex/global';

const styles = stylex.create({
  scrollArrowWrapper: {
    position: 'relative',
    width: '50px',
    height: '40px',
  },
  scrollArrow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '20px',
    height: '2px',
    marginTop: '-1px',
    marginRight: 0,
    marginBottom: 0,
    marginLeft: '-10px',
  },
  span: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    ':before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '50%',
      height: '100%',
      transform: 'skewY(22deg)',
      transformOrigin: '50% 100%',
      backgroundColor: '#212121',
    },
    ':after': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '50%',
      width: '50%',
      height: '100%',
      transform: 'skewY(-22deg)',
      transformOrigin: '50% 100%',
      backgroundColor: '#212121',
    },
  },
  animationDelay: {
    animationDelay: '1.5s',
  },
  scrollArrowIconAnimation: {
    animationDuration: '3s',
    animationDirection: 'normal',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(0.52, 0.01, 0.16, 1)',
    animationName: stylex.keyframes({
      '0%': {
        transform: 'translateY(0)',
        opacity: '1',
      },
      '30%': {
        transform: 'translateY(0)',
        opacity: '1',
      },
      '50%': {
        transform: 'translateY(8px)',
        opacity: '0',
      },
      '85%': {
        transform: 'translateY(-7px)',
        opacity: '0',
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: '1',
      },
    })
  },
})

const ScrollArrowIcon: React.FC<Props> = ({ xstyle }) => {
  const _xstyle: any = xstyle;
  return (
    <div className={stylex(styles.scrollArrowWrapper, _xstyle)}>
      <div className={stylex(styles.scrollArrow)}>
        <span className={stylex(styles.scrollArrowIconAnimation, styles.span)}></span>
        <span className={stylex(styles.scrollArrowIconAnimation, styles.span, styles.animationDelay)}></span>
      </div>
    </div>
  );
}

export type Props = {
  xstyle?: CssStyle,
}

export default ScrollArrowIcon;
