import { useRef, useEffect } from 'react'

function getRGBA(x: number, y: number, width: number, height: number) : number[] {
    const [xc, yc] = [x - (width-1)/2, y - (height-1)/2];
    const d = Math.sqrt(xc*xc + yc*yc);
    const v = (x ^ y) ^ d;
    // Image 1
    // return color.RGBA{byte(v), byte(x^y), byte(d), 255}
    // Image 2
    return [255-(v^x) & 255, 255-(v^y) & 255, d & 255, 255];
}

const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    for (let y = 0; y < canvas.height; y += 1) {
        for (let x = 0; x < canvas.width; x += 1) {
            const i = (y * canvas.width + x) * 4;
            [data[i], data[i+1], data[i+2], data[i+3]] = getRGBA(x, y, canvas.width, canvas.height);
//            data[i] = 255 - data[i]; // red
//            data[i + 1] = 255 - data[i + 1]; // green
//            data[i + 2] = 255 - data[i + 2]; // blue
        }
    }
    ctx.putImageData(imageData, 0, 0);
}

const StaticCanvas = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement | null;
        if (canvas != null) {
            const context = canvas.getContext('2d');
            if (context != null) {
                draw(canvas, context);
            }
        }
    }, []);

    return <canvas ref={canvasRef} height={1024} width={1024} style={{height: 512, width: 512}}/>;
}

export default StaticCanvas;