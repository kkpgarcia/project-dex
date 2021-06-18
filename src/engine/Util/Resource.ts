 import { File } from "@ionic-native/file";
 import { Capacitor } from "@capacitor/core";

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

    private _rootDir: string;

    constructor()
    {
        const platform = Capacitor.getPlatform();

        switch(platform)
        {
            case "ios":
                throw new Error("Unsupported Platfrom");
            case "android":
                break;
            default:
                break;
        }
    }

    public GetText(dir: string, fileName: string): string
    {
        return "";
    }
 }

