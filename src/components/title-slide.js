import React, { Component } from 'react';
import Slide from 'spectacle/lib/components/slide';

import { OPI_BLACK, OPI_RED, OPI_WHITE } from '../util/colors';

import { TITLE_SLIDE_CLASS } from '../util/class-names';

export class TitleSlide extends Component {
  componentDidMount() {
    document.body.classList.add(TITLE_SLIDE_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(TITLE_SLIDE_CLASS);
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
              2: OPI_WHITE
            };
            if (size) {
              return React.cloneElement(child, {
                style: {
                  color: sizes[size] || sizes.OPI_BLACK_LIGHT
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
