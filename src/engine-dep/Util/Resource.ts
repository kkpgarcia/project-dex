 import { Capacitor } from "@capacitor/core";
 import { HttpClient } from "@angular/common/http";
 import { IFileSystem } from "./File System/IFileSystem";
 import { AndroidFileSystem } from "./File System/AndroidFileSystem";
 import { WebFileSystem } from "./File System/WebFileSystem";

 export default class Resource
 {
    private static _instance: Resource;
    public static get instance(): Resource
    {
        if (!this._instance)
        {
            this._instance = new Resource;
        }

        return this._instance;
    }

    private _fileSystem: IFileSystem;
    private _platform: string;
    private _http: HttpClient;

    constructor()
    {
        this.PlatformCheck();
    }

    public Init(): void
    {
        this._fileSystem.Init();
    }

    public GetText(dir: string, fileName: string): string
    {
        let retVal = "";
        this._fileSystem.Read()
            .then(onFullfilled => {
                retVal = onFullfilled;
            })

        return retVal;
    }

    public async GetShader(shaderName: string): Promise<string>
    {
        return new Promise((resolve, reject) =>
        {
            
        })
    }

    private PlatformCheck(): void
    {
        this._platform = Capacitor.getPlatform();

        console.log(this._platform);

        switch(this._platform)
        {
            case "ios":
            case "android":
                this._fileSystem = new AndroidFileSystem();
                break;
            default:
                {
                    console.log("Creating file system for web.");
                    this._fileSystem = new WebFileSystem();
                }
                //TODO: Use fs system instead?
                break;
        }
    }
 }

