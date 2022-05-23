

// Material Dashboard 2 React base styles
import colors from "../../../theme-dark/base/colors";
import boxShadows from "../../../theme-dark/base/boxShadows";
import borders from "../../../theme-dark/base/borders";

const { background } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: background.card,
      boxShadow: md,
      borderRadius: borderRadius.xl,
    },
  },
};

export default tableContainer;
