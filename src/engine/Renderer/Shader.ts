import Debug from "../Debug/Debug";
import RenderingContext from "./RenderingContext";

export default class Shader
{
    private _shader: WebGLProgram;
    private _uniformLocationCache: Map<string, WebGLUniformLocation>;

    constructor(filePath?: string)
    {
        const vertCode = 'attribute vec2 coordinates;' + 'void main(void) {' + ' gl_Position = vec4(coordinates,0.0, 1.0);' + '}';
        const fragCode = 'void main(void) {' + 'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' + '}';
        this._shader = this.CreateProgram(vertCode, fragCode);
    
        this._uniformLocationCache = new Map<string, WebGLUniformLocation>();
    }

    private CreateProgram(vertexSource: string, fragmentSource: string): WebGLProgram
    {
        const gl = RenderingContext.instance.gl;
        const program = gl.createProgram();

        const vertShader = this.CreateShader(vertexSource, gl.VERTEX_SHADER);
        const fragShader = this.CreateShader(fragmentSource, gl.FRAGMENT_SHADER);

        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);

        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);

        return program;
    }

    private CreateShader(source: string, shaderType: number): WebGLShader
    {
        const gl = RenderingContext.instance.gl;
        const shader = gl.createShader(shaderType);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        

        return shader;
    }

    public Bind(): void
    {
        const gl = RenderingContext.instance.gl;
        gl.useProgram(this._shader);
    }

    public Unbind(): void
    {
        const gl = RenderingContext.instance.gl;
        gl.useProgram(null);
    }

    public SetUniform4f(name: string, data: number[]): void
    {
        const gl = RenderingContext.instance.gl;
        gl.uniform4f(this.GetUniformLocation(name), data[0], data[1], data[2], data[3])
    }

    public GetUniformLocation(name: string): WebGLUniformLocation
    {
        const gl = RenderingContext.instance.gl;

        if (this._uniformLocationCache.has(name))
        {
            return this._uniformLocationCache[name];
        }

        const location = gl.getUniformLocation(this._shader, name);
        
        if (!location)
        {
            Debug.Error("Uniform " + name + " doesn't exists");
        }
        
        this._uniformLocationCache.set(name, location);

        return location;
    }
}