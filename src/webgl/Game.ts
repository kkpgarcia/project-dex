import RenderingContext from "../engine/Renderer/RenderingContext";
import { VertexBuffer, IndexBuffer, VertexBufferLayout } from "../engine/Renderer/Buffer";
import VertexArray from "../engine/Renderer/VertexArray";
import Shader from "../engine/Renderer/Shader";

export default class Game
{
    constructor(canvas: HTMLCanvasElement)
    {
        RenderingContext.instance.Init(canvas);
        const gl = RenderingContext.instance.gl;

        const vertices = [
            -0.5, 0.5,  // 0 
            -0.5, -0.5, // 1
            0.5, -0.5,  // 2
            0.5, 0.5    // 3
        ];

        const indices = [
            0, 1, 2, 
            0, 2, 3
        ];

        const vertexBuffer = new VertexBuffer(vertices);
        const vertexArray = new VertexArray();
        const layout = new VertexBufferLayout();
        
        layout.Push(2, gl.FLOAT);
        vertexArray.AddBuffer(vertexBuffer, layout);
        
        const indexBuffer = new IndexBuffer(indices);

        const shader = new Shader();


        //Unbind all
        vertexArray.Unbind();
        shader.Unbind();
        vertexBuffer.Unbind();
        indexBuffer.Unbind();

        //Draw
        gl.clearColor(1, 1, 1, 1);

        gl.enable(gl.DEPTH_TEST);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.viewport(0, 0, canvas.width, canvas.height);
        
        shader.Bind();

        shader.SetUniform4f("u_Color", [1, 0, 0, 1]);
        
        vertexArray.Bind();
        indexBuffer.Bind();

        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    }
}