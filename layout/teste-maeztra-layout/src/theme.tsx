// theme.ts

export interface ITheme {
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        white: string;
        black: string;
        gray: string;
        graySecondary: string;
    };
    font: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
  }
  
  export const theme: ITheme = {
    colors: {
      primary: '#FAA500',
      secondary: '#6C757D',
      tertiary: '#353535',
      white: '#FFF',
      black: '#000',
      gray: '#C4C4C4',
      graySecondary:'#EFEFEF'
    },
    font: {
      primary: 'Titillium Web',
      secondary: 'Montserrat',
      tertiary: 'Open Sans'
    },
  };
  