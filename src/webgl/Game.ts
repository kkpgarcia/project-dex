export default class Game
{
    public canvas: any;
    public gl: any;

    constructor()
    {
        this.canvas = document.getElementById("container");
        this.gl = this.canvas.getContext("experimental-webgl");


        //Draw
        const vertices = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5];
        const vertex_buffer = this.gl.createBuffer();

        //Pass data to buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertex_buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

        //Unbind the buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);

        //Create a vertex shader
        const vertCode = 'attribute vec2 coordinates;' + 'void main(void) {' + ' gl_Position = vec4(coordinates,0.0, 1.0);' + '}';
        const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(vertShader, vertCode);
        this.gl.compileShader(vertShader);

        //create a fragment shader
        const fragCode = 'void main(void) {' + 'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' + '}';
        const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.source(fragShader, fragCode);
        this.gl.compileShader(fragShader);

        //Create a shader program
        const shaderProgram = this.gl.createProgram();

        //Attach Shaders
        this.gl.attachShader(shaderProgram, vertShader);
        this.gl.attachShader(shaderProgram, fragShader);

        //Link program
        this.gl.linkProgram(shaderProgram);

        //use program
        this.gl.useProgram(shaderProgram);

        //Bind buffer to object
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertex_buffer);

        //Get attribute location
        const coord = this.gl.getAttribLocation(shaderProgram, "coordinates");
        this.gl.vertexAttribPointer(coord, 2, this.gl.FLOAT, false, 0, 0);
        this.gl.enableVertexAttribArray(coord);

        //Draw
        this.gl.clearColor(1, 1, 1, 1);

        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        this.gl.viewPort(0, 0, this.canvas.width, this.canvas.height);
        this.gl.drawArrays(this.gl.TRIANGLES,0,3);
    }
}