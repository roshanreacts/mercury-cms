import { Theme } from "@emotion/react";

// const primary = {
//   0: "hsl(208, 100%, 47.3%)",
//   1: "hsl(206, 100%, 99.2%)",
//   2: "hsl(210, 100%, 98.0%)",
//   3: "hsl(209, 100%, 96.5%)",
//   4: "hsl(210, 98.8%, 94.0%)",
//   5: "hsl(209, 95.0%, 90.1%)",
//   6: "hsl(209, 81.2%, 84.5%)",
//   7: "hsl(208, 77.5%, 76.9%)",
//   8: "hsl(206, 81.9%, 65.3%)",
//   9: "hsl(206, 100%, 50.0%)",
//   10: "hsl(208, 100%, 47.3%)",
//   11: "hsl(211, 100%, 43.2%)",
//   12: "hsl(211, 100%, 15.0%)",
// };

// const primaryA = {
//   0: "hsla(208, 100%, 47.2%, 0.980)",
//   1: "hsla(210, 100%, 51.0%, 0.016)",
//   2: "hsla(210, 100%, 51.0%, 0.040)",
//   3: "hsla(210, 100%, 50.3%, 0.071)",
//   4: "hsla(210, 100%, 50.1%, 0.118)",
//   5: "hsla(208, 99.1%, 47.1%, 0.189)",
//   6: "hsla(209, 99.5%, 45.3%, 0.283)",
//   7: "hsla(208, 99.9%, 43.8%, 0.412)",
//   8: "hsla(206, 99.8%, 45.1%, 0.632)",
//   9: "hsla(206, 100%, 50.0%, 0.980)",
//   10: "hsla(208, 100%, 47.2%, 0.980)",
//   11: "hsla(212, 100%, 43.0%, 0.980)",
//   12: "hsla(213, 100%, 14.4%, 0.980)",
// };

// const primaryDark = {
//   0: "hsl(211, 85.1%, 27.4%)",
//   1: "hsl(212, 35.0%, 9.2%)",
//   2: "hsl(216, 50.0%, 11.8%)",
//   3: "hsl(214, 59.4%, 15.3%)",
//   4: "hsl(214, 65.8%, 17.9%)",
//   5: "hsl(213, 71.2%, 20.2%)",
//   6: "hsl(212, 77.4%, 23.1%)",
//   7: "hsl(211, 85.1%, 27.4%)",
//   8: "hsl(211, 89.7%, 34.1%)",
//   9: "hsl(206, 100%, 50.0%)",
//   10: "hsl(209, 100%, 60.6%)",
//   11: "hsl(210, 100%, 66.1%)",
//   12: "hsl(206, 98.0%, 95.8%)",
// };

// const primaryDarkA = {
//   0: "hsla(211, 100%, 50.7%, 0.435)",
//   1: "hsla(0, 0%, 0%, 0)",
//   2: "hsla(221, 97.8%, 52.4%, 0.059)",
//   3: "hsla(215, 99.3%, 54.2%, 0.135)",
//   4: "hsla(215, 99.3%, 53.8%, 0.198)",
//   5: "hsla(213, 99.4%, 52.8%, 0.252)",
//   6: "hsla(212, 99.9%, 51.7%, 0.323)",
//   7: "hsla(211, 100%, 50.7%, 0.435)",
//   8: "hsla(211, 99.8%, 50.9%, 0.597)",
//   9: "hsla(205, 100%, 50.0%, 0.980)",
//   10: "hsla(208, 100%, 60.7%, 0.980)",
//   11: "hsla(209, 100%, 66.3%, 0.980)",
//   12: "hsla(196, 100%, 96.8%, 0.980)",
// };

// const blackA = {
//   0: "hsla(0, 0%, 0%, 0.910)",
//   1: "hsla(0, 0%, 0%, 0.012)",
//   2: "hsla(0, 0%, 0%, 0.027)",
//   3: "hsla(0, 0%, 0%, 0.047)",
//   4: "hsla(0, 0%, 0%, 0.071)",
//   5: "hsla(0, 0%, 0%, 0.090)",
//   6: "hsla(0, 0%, 0%, 0.114)",
//   7: "hsla(0, 0%, 0%, 0.141)",
//   8: "hsla(0, 0%, 0%, 0.220)",
//   9: "hsla(0, 0%, 0%, 0.439)",
//   10: "hsla(0, 0%, 0%, 0.478)",
//   11: "hsla(0, 0%, 0%, 0.565)",
//   12: "hsla(0, 0%, 0%, 0.910)",
// };

// const whiteA = {
//   0: "hsla(0, 0%, 100%, 0.923)",
//   1: "hsla(0, 0%, 100%, 0)",
//   2: "hsla(0, 0%, 100%, 0.013)",
//   3: "hsla(0, 0%, 100%, 0.034)",
//   4: "hsla(0, 0%, 100%, 0.056)",
//   5: "hsla(0, 0%, 100%, 0.086)",
//   6: "hsla(0, 0%, 100%, 0.124)",
//   7: "hsla(0, 0%, 100%, 0.176)",
//   8: "hsla(0, 0%, 100%, 0.249)",
//   9: "hsla(0, 0%, 100%, 0.386)",
//   10: "hsla(0, 0%, 100%, 0.446)",
//   11: "hsla(0, 0%, 100%, 0.592)",
//   12: "hsla(0, 0%, 100%, 0.923)",
// };

// const colors ={
//   primary:'#',
//   secondary:'#',
//   whiteA:'#fff',
//   blackA:'#000',
//   redA:'#',
//   blueA:'#',
// }

// const green = {
//     0: "hsla(120, 85%, 46%, 0)",
//     1: "hsla(120, 85%, 46%, 0.08333333333333333)",
//     2: "hsla(120, 85%, 46%, 0.16666666666666666)",
//     3: "hsla(120, 85%, 46%, 0.25)",
//     4: "hsla(120, 85%, 46%, 0.3333333333333333)",
//     5: "hsla(120, 85%, 46%, 0.4166666666666667)",
//     6: "hsla(120, 85%, 46%, 0.5)",
//     7: "hsla(120, 85%, 46%, 0.5833333333333334)",
//     8: "hsla(120, 85%, 46%, 0.6666666666666666)",
//     9: "hsla(120, 85%, 46%, 0.75)",
//     10: "hsla(120, 85%, 46%, 0.8333333333333334)",
//     11: "hsla(120, 85%, 46%, 0.9166666666666666)",
//     12: "hsla(120, 85%, 46%, 1)"
// }

// const gray = {
//   0: "hsla(0, 0%, 97%, 0)",
//   1: "hsla(0, 0%, 97%, 0.08333333333333333)",
//   2: "hsla(0, 0%, 97%, 0.16666666666666666)",
//   3: "hsla(0, 0%, 97%, 0.25)",
//   4: "hsla(0, 0%, 97%, 0.3333333333333333)",
//   5: "hsla(0, 0%, 97%, 0.4166666666666667)",
//   6: "hsla(0, 0%, 97%, 0.5)",
//   7: "hsla(0, 0%, 97%, 0.5833333333333334)",
//   8: "hsla(0, 0%, 97%, 0.6666666666666666)",
//   9: "hsla(0, 0%, 97%, 0.75)",
//   10: "hsla(0, 0%, 97%, 0.8333333333333334)",
//   11: "hsla(0, 0%, 97%, 0.9166666666666666)",
//   12: "hsla(0, 0%, 97%, 1)"
// }


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