import React, { Component } from 'react';
import Slide from 'spectacle/lib/components/slide';

import { CONTENT_SLIDE_CLASS } from '../util/class-names';

export class ContentSlide extends Slide {
  componentDidMount() {
    document.body.classList.add(CONTENT_SLIDE_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(CONTENT_SLIDE_CLASS);
  }

  render() {
    return super.render();
  }
}
