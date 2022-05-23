

// Material Dashboard 2 React helper functions
import pxToRem from "../.././theme-dark/functions/pxToRem";

// Material Dashboard 2 React base styles
import colors from "../.././theme-dark/base/colors";
import boxShadows from "../.././theme-dark/base/boxShadows";
import borders from "../.././theme-dark/base/borders";

const { transparent } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: md,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
};

export default popover;
