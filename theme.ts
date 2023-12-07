import { Theme } from "@emotion/react";


export const elevations: { [x: number]: string } = {
  0: "0px 0px 0px 0px rgba(0,0,0)",
  1: "0px 0px 10px -3px rgba(0,0,0,0.2)",
  2: "0px 0px 15px -3px rgba(0,0,0,0.3)",
  3: "0px 0px 15px -3px rgba(0,0,0,0.3);",
  4: "0px 0px 20px -3px rgba(0,0,0,0.3)",
  5: "0px 0px 25px -3px rgba(0,0,0,0.3)",
  6: "0px 0px 30px -2px rgba(0,0,0,0.3)",
  7: "0px 0px 40px 1px rgba(0,0,0,0.3)",
  8: "0px 0px 50px 2px rgba(0,0,0,0.3)",
  9: "0px 0px 60px 3px rgba(0,0,0,0.3)",
  10: "0px 0px 70px 5px rgba(0,0,0,0.3)",
};



// declare module "@emotion/react" {
//   export interface Theme {
//     colors: {
//       primary: typeof primary;
//       primaryA: typeof primaryA;
//       primaryDark: typeof primaryDark;
//       primaryDarkA: typeof primaryDarkA;
//       blackA: typeof blackA;
//       whiteA: typeof whiteA;
//       green : typeof green;
//       // add any other color properties you need here
//     };
//     gutter: number;
//     elevations: { [x: number]: string };
//   }
// }

// const theme: Theme = {
//   colors: {
//     primary,
//     primaryA,
//     primaryDark,
//     primaryDarkA,
//     blackA,
//     whiteA,
//     green,
//   },
//   gutter: 12,
//   elevations,
// };

// export default theme;

const size = {
  small:'12px',
  medium:'14px',
  large:'16px',
  Xlarge:'20px',
  XXlarge:'26px',
  xxxlarge:'36px',
}

const weight = {
  "small":200,
  "medium":400,
  "large":600,
  "Xlarge":700,
  "XXlarge":800,
  "xxxlarge":900,
}

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary:string,
      secondary:string,
      whiteA:string,
      blackA:string,
      redA:string,
      blueA:string,
      yellowA:string,
      grayA:string,
      orangeA:string,
    };
    typography: typeof size,
    weight:{[x:string]:number};
    gutter: number;
    elevations: { [x: number]: string };
  }
}

const theme: Theme = {
  colors: {
    primary:'#F7F7F7',
    secondary:'#1EB442',
    whiteA:'#fff',
    blackA:'#000',
    redA:'#FF1919',
    blueA:'#216DFF',
    yellowA:'#FFC300',
    grayA:'#4A4A4A',
    orangeA:'#F97B22'
  },
  weight,
  gutter: 12,
  elevations,
  typography: size
};

export default theme;