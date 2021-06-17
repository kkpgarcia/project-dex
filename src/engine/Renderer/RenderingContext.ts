export default class RenderingContext
{
    private static _instance: RenderingContext;
    public static get instance(): RenderingContext
    {
        if (!this._instance)
        {
            this._instance = new RenderingContext();
        }

        return this._instance;
    }

    private _gl: WebGLRenderingContext;
    public get gl(): WebGLRenderingContext
    {
        return this._gl;
    }

    private _isInitalized = false;
    public get isInitalizd(): boolean
    {
        return this._isInitalized;
    }

    public Init(canvas: HTMLCanvasElement): void
    {
        this._gl = canvas.getContext("experimental-webgl") as WebGLRenderingContext;
        this._isInitalized = true;
    }
}