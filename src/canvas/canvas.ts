import { atom } from 'recoil';


export const playingState = atom({
    key: 'canvas.playing',
    default: false,
});

export const frameCountState = atom({
    key: 'canvas.frameCount',
    default: 0,
});
