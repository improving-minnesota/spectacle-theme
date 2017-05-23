# spectacle-theme

An OPi-themed [spectacle][spectacle] theme

_NOTE: this is not currently working as intended; PRs welcome!_

## Install

1. `yarn add objectpartners/spectacle-theme` _or_ `npm install objectpartners/spectacle-theme --save`

## Usage

Spectacle takes a Javascript theme object (applied with Radium), so you won't need any specialized loaders apart from what is already configured

```javascript
import { createTheme } from 'spectacle-theme';
import { ContentSlide as OpiSlide, TitleSlide } from 'spectacle-theme/dist/components';

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
```

## Development
Clone the [spectacle-boilerplate] repo and copy it into the `example` directory.

Then follow the build instructions below (from the root level of the project):

1. `yarn build`
1. `cd dist && npm link`
1. `cd ../`
1. `cd example` // boilerplate project from spectacle
1. `npm link spectacle-theme`

[spectacle]: https://github.com/FormidableLabs/spectacle
[spectacle-boilerplate]: https://github.com/FormidableLabs/spectacle-boilerplate
