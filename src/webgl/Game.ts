import RenderingContext from "../engine/Renderer/RenderingContext";
import { VertexBuffer, IndexBuffer, VertexBufferLayout } from "../engine/Renderer/Buffer";
import VertexArray from "../engine/Renderer/VertexArray";
export default class Game
{
    constructor(canvas: HTMLCanvasElement)
    {
        RenderingContext.instance.Init(canvas);
        const gl = RenderingContext.instance.gl;

        //Draw
        const vertices = [
            -0.5, 0.5,  // 0 
            -0.5, -0.5, // 1
            0.5, -0.5,  // 2
            0.5, 0.5    // 3
        ];

        const vertexBuffer = new VertexBuffer(vertices);
        const vertexArray = new VertexArray();
        const layout = new VertexBufferLayout();
        layout.Push(2, gl.FLOAT);
        vertexArray.AddBuffer(vertexBuffer, layout);

        //Create a vertex shader
        const vertCode = 'attribute vec2 coordinates;' + 'void main(void) {' + ' gl_Position = vec4(coordinates,0.0, 1.0);' + '}';
        const vertShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertShader, vertCode);
        gl.compileShader(vertShader);

        //create a fragment shader
        const fragCode = 'void main(void) {' + 'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' + '}';
        const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragShader, fragCode);
        gl.compileShader(fragShader);

        //Create a shader program
        const shaderProgram = gl.createProgram();

        //Attach Shaders
        gl.attachShader(shaderProgram, vertShader);
        gl.attachShader(shaderProgram, fragShader);

        //Link program
        gl.linkProgram(shaderProgram);

        //use program
        gl.useProgram(shaderProgram);

        const indices = [
            0, 1, 2, 
            0, 2, 3
        ];

        const indexBuffer = new IndexBuffer(indices);

        //Draw
        gl.clearColor(1, 1, 1, 1);

        gl.enable(gl.DEPTH_TEST);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.viewport(0, 0, canvas.width, canvas.height);

        vertexArray.Bind();
        indexBuffer.Bind();

        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    }
}