

// Material Dashboard 2 React base styles
import colors from "../../../theme-dark/base/colors";
import borders from "../../../theme-dark/base/borders";
import boxShadows from "../../../theme-dark/base/boxShadows";

// Material Dashboard 2 React helper functions
import pxToRem from "../../../theme-dark/functions/pxToRem";
import linearGradient from "../../../theme-dark/functions/linearGradient";

const { transparent, gradients } = colors;
const { borderRadius } = borders;
const { colored } = boxShadows;

const stepper = {
  styleOverrides: {
    root: {
      background: linearGradient(gradients.info.main, gradients.info.state),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.info,

      "&.MuiPaper-root": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default stepper;
