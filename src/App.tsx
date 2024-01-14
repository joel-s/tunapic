import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import Canvas from "./canvas/Canvas.tsx";


const panelWidth = 300;

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
            width: panelWidth,
            minHeight: "100vh",
            backgroundColor: "#222",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Divider />
            <IconButton>
              <StopCircleIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <PlayCircleIcon fontSize="large" />
            </IconButton>
            <Divider />
          </Box>
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