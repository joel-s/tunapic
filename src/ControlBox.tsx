import Box from "@mui/material/Box"
import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import StopCircleIcon from '@mui/icons-material/StopCircle';
import {useSetRecoilState} from "recoil";
import {playingState} from "./canvas/canvas.ts";

export default function ControlBox() {
  const setPlayingState = useSetRecoilState(playingState);
  
  return (
    <Box>
      <Divider />
      <IconButton onClick={() => setPlayingState(true)}>
        <PlayCircleIcon fontSize="large"/>
      </IconButton>
      <IconButton onClick={() => setPlayingState(false)}>
        <PauseCircleIcon fontSize="large"/>
      </IconButton>
      <IconButton onClick={() => setPlayingState(false)}>
        <StopCircleIcon fontSize="large" />
      </IconButton>
      <Divider />
    </Box>
  );    
}