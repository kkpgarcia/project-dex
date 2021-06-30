import { IFileSystem } from "./IFileSystem";

export class WebFileSystem implements IFileSystem
{
    public Init(): void
    {
        //No need to initialize this as of the moment
    }

    public async Read(): Promise<string> 
    {
        let dir = "./basic.shader";
        let retVal = "";

        return fetch(dir)
            .then(response => 
                {
                    console.log("readong response:")
                    console.log(response.status);
                    console.log(response.text());
                    response.text();
                    console.log(response);
                    return response.text();
                })
        
        
        
    }

    public Write(): void 
    {
        throw new Error("Method not implemented.");
    }
}