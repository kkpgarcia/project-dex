export interface IFileSystem
{
    Init(): void;
    Read(): Promise<string> ;
    Write(): void;
}