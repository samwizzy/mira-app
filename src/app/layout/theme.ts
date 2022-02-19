import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#4b66bf",
      main: "#1e40af",
      dark: "#152c7a",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fb923c",
      main: "#f97316",
      dark: "#ea580c",
      contrastText: "#fff",
    },
  },
});

export default theme;
