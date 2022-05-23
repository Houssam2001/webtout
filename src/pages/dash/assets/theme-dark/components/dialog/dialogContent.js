

// Material Dashboard 2 React base styles
import typography from "../../../theme-dark/base/typography";
import borders from "../../../theme-dark/base/borders";
import colors from "../../../theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "../../../theme-dark/functions/pxToRem";
import rgba from "../../../theme-dark/functions/rgba";

const { size } = typography;
const { white } = colors;
const { borderWidth, borderColor } = borders;

const dialogContent = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: rgba(white.main, 0.8),
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${rgba(borderColor, 0.6)}`,
      borderBottom: `${borderWidth[1]} solid ${rgba(borderColor, 0.6)}`,
    },
  },
};

export default dialogContent;
