import React, { Component } from 'react';
import Slide from 'spectacle/lib/components/slide';

import { OPI_BLACK, OPI_RED } from './colors';

import logo from './images/OPi-logo.svg';
import pattern from './images/pattern.svg';

const TiledBackground = ({ top }) => {
  const style = Object.assign(
    {
      backgroundImage: `url(${pattern})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px',
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0,
      height: '100vh',
      width: '100%'
    },
    typeof top !== 'undefined' ? { top } : {}
  );
  return <div style={style} />;
};

const Logo = ({ includeBackground = true }) => {
  const headerHeight = 60;
  const imageHeight = 41;
  return (
    <div
      style={{
        zIndex: 2,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        width: '100%',
        height: headerHeight,
        ...(includeBackground
          ? {
              backgroundColor: OPI_BLACK
            }
          : {})
      }}
    >
      <img
        src={logo}
        style={{
          height: imageHeight,
          float: 'right',
          paddingRight: 5,
          paddingTop: Math.ceil((headerHeight - imageHeight) / 2)
        }}
      />
    </div>
  );
};

export class ContentSlide extends Slide {
  render() {
    return super.render();
  }
}

export class TitleSlide extends Component {
  componentWillMount() {
    document.body.classList.add('opi-title-slide');
  }
  componentWillUnmount() {
    document.body.classList.remove('opi-title-slide');
  }
  render() {
    return (
      <Slide>
        <div
          style={{
            height: '65%',
            transform: `skewY(-8deg)`,
            transformOrigin: 0,
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '100%'
          }}
        />
        <div
          style={{
            transform: `skewY(-8deg)`,
            transformOrigin: 0
          }}
        >
          {React.Children.map(this.props.children, child => {
            const { size } = child.props;
            const sizes = {
              1: OPI_RED,
              2: '#FFFFFF'
            };
            if (size) {
              return React.cloneElement(child, {
                style: {
                  color: sizes[size] || OPI_BLACK
                }
              });
            }
            return child;
          })}
        </div>
      </Slide>
    );
  }
}
