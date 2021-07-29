const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  console.log(breakpointsNames);
  return breakpointsNames
    .map(
      breakpointName => `
    @media screen and (min-width: ${breakpoints[breakpointName]}px){
      ${cssByBreakpoints[breakpointName]}
    }
  `
    )
    .join('');
}

console.log(
  breakpointsMedia({
    xs: `background-color: blue;`,
    sm: `background-color: red;`,
  })
);
