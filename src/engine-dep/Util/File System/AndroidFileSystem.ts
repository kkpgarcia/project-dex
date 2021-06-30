import { IFileSystem } from "./IFileSystem";

//TODO
export class AndroidFileSystem implements IFileSystem
{
    public Init(): void
    {
        throw new Error("Method not implemented.");
    }

    public Read(): Promise<string>  
    {
        throw new Error("Method not implemented.");
    }

    public Write(): void 
    {
        throw new Error("Method not implemented.");
    }
}