

// Material Dashboard 2 React Base Styles
import colors from "../../../theme-dark/base/colors";
import typography from "../../../theme-dark/base/typography";
import borders from "../../../theme-dark/base/borders";

// Material Dashboard 2 React Helper Functions
import rgba from "../../../theme-dark/functions/rgba";

const { info, inputBorderColor, dark, grey, white } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${rgba(inputBorderColor, 0.6)}`,
      },

      "&:before": {
        borderColor: rgba(inputBorderColor, 0.6),
      },

      "&:after": {
        borderColor: info.main,
      },

      input: {
        color: white.main,

        "&::-webkit-input-placeholder": {
          color: grey[100],
        },
      },
    },
  },
};

export default input;
