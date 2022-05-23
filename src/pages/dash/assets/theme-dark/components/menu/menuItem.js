

// Material Dashboard 2 React base styles
import colors from "../../../theme-dark/base/colors";
import borders from "../../../theme-dark/base/borders";
import typography from "../../../theme-dark/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "../../../theme-dark/functions/pxToRem";
import rgba from "../../../theme-dark/functions/rgba";

const { dark, white } = colors;
const { borderRadius } = borders;
const { size } = typography;

const menuItem = {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: rgba(white.main, 0.8),
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: dark.main,
        color: white.main,
      },
    },
  },
};

export default menuItem;
