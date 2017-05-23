import React, { Component } from 'react';
import Slide from 'spectacle/lib/components/slide';

import { CONTENT_SLIDE_CLASS } from '../util/class-names';

let prevMount = false;

export class ContentSlide extends Slide {
  componentWillMount() {
    prevMount = true;
    document.body.classList.add(CONTENT_SLIDE_CLASS);
  }

  componentWillUnmount() {
    if (!prevMount) {
      document.body.classList.remove(CONTENT_SLIDE_CLASS);
    }
    prevMount = false;
  }

  render() {
    return super.render();
  }
}
