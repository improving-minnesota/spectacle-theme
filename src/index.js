import screen from './screen';
import print from 'spectacle/lib/themes/default/print';

export const createTheme = (...args) => ({
  screen: screen(...args),
  print: print()
});
