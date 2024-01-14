import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Canvas from "./canvas/Canvas.tsx";
import ControlBox from "./ControlBox.tsx";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function PermanentDrawerLeft() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex', width: "100vw" }}>
        <CssBaseline />
        <Box
          sx={{
          width: 300,
            minHeight: "100vh",
            backgroundColor: "#222",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ControlBox />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Canvas />
        </Box>
      </Box>
    </ThemeProvider>
  );
}