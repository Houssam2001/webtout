

// Material Dashboard 2 React base styles
import typography from "../../../theme-dark/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "../../../theme-dark/functions/pxToRem";

const { size } = typography;

const dialogTitle = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};

export default dialogTitle;
