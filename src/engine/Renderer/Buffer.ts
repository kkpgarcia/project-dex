import RenderingContext from "./RenderingContext";

export class VertexBuffer
{
    private _buffer: WebGLBuffer;

    constructor(data: number[])
    {
        const gl = RenderingContext.instance.gl;
        this._buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this._buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    }

    public Bind(): void
    {
        const gl = RenderingContext.instance.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this._buffer);
    }

    public Unbind(): void
    {
        const gl = RenderingContext.instance.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
}

export class IndexBuffer
{
    private _buffer: WebGLBuffer;

    constructor(data: number[])
    {
        const gl = RenderingContext.instance.gl;
        this._buffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._buffer)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data), gl.STATIC_DRAW);
    }

    public Bind(): void
    {
        const gl = RenderingContext.instance.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._buffer);
    }

    public Unbind(): void
    {
        const gl = RenderingContext.instance.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }
}