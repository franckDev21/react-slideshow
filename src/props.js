import React from 'react';

const defaultProps = {
  duration: 5000,
  transitionDuration: 1000,
  defaultIndex: 0,
  infinite: true,
  autoplay: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
  scale: 1,
  easing: 'linear',
  canSwipe: true,
  dir: 'ltr'
};

export const getProps = componentProps => {
  let children = React.Children.map(componentProps.children, each => each);
  if (!Array.isArray(children)) {
    children = [children];
  }
  return {
    ...defaultProps,
    ...componentProps,
    children
  };
};

export const propTypes = {
  duration: 'number',
  transitionDuration: 'number',
  defaultIndex: 'number',
  infinite: 'boolean',
  indicators: ['boolean', 'function'],
  autoplay: 'boolean',
  arrows: 'boolean',
  onChange: 'function',
  pauseOnHover: 'boolean',
  prevArrow: ['object', 'function'],
  nextArrow: ['object', 'function'],
  scale: 'number',
  easing: 'string',
  canSwipe: 'boolean',
  dir: 'string'
};

export const validatePropTypes = props => {
  for (const key in props) {
    const propValueType = typeof props[key];
    if (propTypes[key]) {
      if (
        Array.isArray(propTypes[key]) &&
        !propTypes[key].includes(propValueType)
      ) {
        console.warn(
          `${key} must be of one of type ${propTypes[key].join(', ')}`
        );
      } else if (
        !Array.isArray(propTypes[key]) &&
        propValueType !== propTypes[key]
      ) {
        console.warn(`${key} must be of type ${propTypes[key]}`);
      }
    }
  }
};
