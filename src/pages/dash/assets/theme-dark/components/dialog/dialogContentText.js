

// Material Dashboard 2 React base styles
import typography from "../../../theme-dark/base/typography";
import colors from "../../../theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import rgba from "../../../theme-dark/functions/rgba";

const { size } = typography;
const { white } = colors;

const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: rgba(white.main, 0.8),
    },
  },
};

export default dialogContentText;
