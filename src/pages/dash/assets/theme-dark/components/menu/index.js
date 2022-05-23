

// Material Dashboard 2 React base styles
import boxShadows from "../../../theme-dark/base/boxShadows";
import typography from "../../../theme-dark/base/typography";
import colors from "../../../theme-dark/base/colors";
import borders from "../../../theme-dark/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "../../../theme-dark/functions/pxToRem";

const { md } = boxShadows;
const { size } = typography;
const { text, background } = colors;
const { borderRadius } = borders;

const menu = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: md,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${background.card} !important`,
      borderRadius: borderRadius.md,
    },
  },
};

export default menu;
