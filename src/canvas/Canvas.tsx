import { useRef, useEffect } from 'react'

function getRGBA(x: number, y: number, width: number, height: number, q: number) : number[] {
    const deg = Math.PI / 180;
    const tRadius = width/3;  // radius of circle that triangle is inscribed in
    const pointCenter = [(width-1)/2, (height-1)/2];
    const pointA = [pointCenter[0], pointCenter[1]-tRadius];
    const pointB = [
        pointCenter[0] + tRadius*Math.sin(60*deg),
        pointCenter[1] + tRadius*Math.cos(60*deg)
    ];
    const pointC = [
        pointCenter[0] - tRadius*Math.sin(60*deg),
        pointCenter[1] + tRadius*Math.cos(60*deg)
    ];
    const distA = Math.sqrt((x-pointA[0]) ** 2 + (y-pointA[1]) ** 2);
    const distB = Math.sqrt((x-pointB[0]) ** 2 + (y-pointB[1]) ** 2);
    const distC = Math.sqrt((x-pointC[0]) ** 2 + (y-pointC[1]) ** 2)
    
    // return [distA*1.5 & 255, distB*1.5 & 255, distC*1.5 & 255, 255];
    return [
        (distA+distB*q+distC*q)*1.5 & 255,
        (distA*q+distB+distC*q)*1.5 & 255,
        (distA*q+distB*q+distC)*1.5 & 255,
        255
    ];
}

//function getRGBAStatic(x: number, y: number, width: number, height: number) : number[] {
//    return getRGBA(x, y, width, height, 0);
//}

const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, frameCount: number) => {
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    for (let y = 0; y < canvas.height; y += 1) {
        for (let x = 0; x < canvas.width; x += 1) {
            const i = (y * canvas.width + x) * 4;
            [data[i], data[i+1], data[i+2], data[i+3]] = getRGBA(x, y, canvas.width, canvas.height, .5 + .5 * Math.cos(frameCount*0.01));
//            data[i] = 255 - data[i]; // red
//            data[i + 1] = 255 - data[i + 1]; // green
//            data[i + 2] = 255 - data[i + 2]; // blue
        }
    }
    ctx.putImageData(imageData, 0, 0);
}

const Canvas = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement | null;
        if (canvas != null) {
            const context = canvas.getContext('2d');
            if (context != null) {
                let frameCount = 0;
                let animationFrameId = 0;

                //Our draw came here
                const render = () => {
                    frameCount++;
                    draw(canvas, context, frameCount);
                    animationFrameId = window.requestAnimationFrame(render);
                }
                render()

                return () => {
                    window.cancelAnimationFrame(animationFrameId);
                }
            }
        }
    }, []);

    return <canvas ref={canvasRef} height={1024} width={1024} style={{height: 512, width: 512}}/>;
}

export default Canvas;