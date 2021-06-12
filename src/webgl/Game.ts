export default class Game
{
    private _canvas: HTMLCanvasElement;
    private _gl: WebGLRenderingContext;

    constructor(canvas: HTMLCanvasElement)
    {
        this._canvas = canvas;
        this._gl = this._canvas.getContext("experimental-webgl") as WebGLRenderingContext;


        //Draw
        const vertices = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5];
        const vertex_buffer = this._gl.createBuffer();

        //Pass data to buffer
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, vertex_buffer);
        this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(vertices), this._gl.STATIC_DRAW);

        //Unbind the buffer
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null);

        //Create a vertex shader
        const vertCode = 'attribute vec2 coordinates;' + 'void main(void) {' + ' gl_Position = vec4(coordinates,0.0, 1.0);' + '}';
        const vertShader = this._gl.createShader(this._gl.VERTEX_SHADER);
        this._gl.shaderSource(vertShader, vertCode);
        this._gl.compileShader(vertShader);

        //create a fragment shader
        const fragCode = 'void main(void) {' + 'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' + '}';
        const fragShader = this._gl.createShader(this._gl.FRAGMENT_SHADER);
        this._gl.shaderSource(fragShader, fragCode);
        this._gl.compileShader(fragShader);

        //Create a shader program
        const shaderProgram = this._gl.createProgram();

        //Attach Shaders
        this._gl.attachShader(shaderProgram, vertShader);
        this._gl.attachShader(shaderProgram, fragShader);

        //Link program
        this._gl.linkProgram(shaderProgram);

        //use program
        this._gl.useProgram(shaderProgram);

        //Bind buffer to object
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, vertex_buffer);

        //Get attribute location
        const coord = this._gl.getAttribLocation(shaderProgram, "coordinates");
        this._gl.vertexAttribPointer(coord, 2, this._gl.FLOAT, false, 0, 0);
        this._gl.enableVertexAttribArray(coord);

        //Draw
        this._gl.clearColor(1, 1, 1, 1);

        this._gl.enable(this._gl.DEPTH_TEST);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);

        this._gl.viewport(0, 0, this._canvas.width, this._canvas.height);
        this._gl.drawArrays(this._gl.TRIANGLES,0,3);
    }
}