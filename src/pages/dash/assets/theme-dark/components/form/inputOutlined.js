

// Material Dashboard 2 React Base Styles
import colors from "../../../theme-dark/base/colors";
import borders from "../../../theme-dark/base/borders";
import typography from "../../../theme-dark/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "../../../theme-dark/functions/pxToRem";
import rgba from "../../../theme-dark/functions/rgba";

const { inputBorderColor, info, grey, transparent, white } = colors;
const { borderRadius } = borders;
const { size } = typography;

const inputOutlined = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: rgba(inputBorderColor, 0.6),
      },

      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: info.main,
        },
      },
    },

    notchedOutline: {
      borderColor: rgba(inputBorderColor, 0.6),
    },

    input: {
      color: white.main,
      padding: pxToRem(12),
      backgroundColor: transparent.main,

      "&::-webkit-input-placeholder": {
        color: grey[100],
      },
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(10),
    },

    multiline: {
      color: grey[700],
      padding: 0,
    },
  },
};

export default inputOutlined;
