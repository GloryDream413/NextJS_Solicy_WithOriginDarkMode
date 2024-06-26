import { PaletteOptions } from '@mui/material'
import { grey } from '@mui/material/colors'

interface CustomPaletteOptions extends PaletteOptions {
  custom_background?: {
    topBanner: string;
    estimate: string;
    ourserviceItem : string;
    ourserviceItemHover : string;
    techstack : string;
    joincommunity : string;
  };
}

const paletteDark: CustomPaletteOptions = {
  mode: 'dark',
  background: {
    default: "#0000ff",
    paper: '#031C4D',
  },
  custom_background : {
    topBanner : '#143064',
    estimate : '#142F63',
    ourserviceItem : '#142F63',
    ourserviceItemHover : '#2E4E88',
    techstack : '#142F63',
    joincommunity : '#2E4E88',
  },
  text: {
    primary: grey[100],
    secondary: '#ffffff',
    disabled: grey[300],
  },
}

export default paletteDark
