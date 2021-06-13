import NotificationCenter from "../engine/Events/NotificationCenter";
import EventArgs from "../engine/Events/EventArgs";
import ArrayEx from "../engine/Util/ArrayEx";

export default class Sandbox
{
    constructor()
    {
        this.Start();
    }

    private Start(): void
    {
        const notificationName = "Sandbox.Function";
        const evtArgs = new EventArgs("Message received.");
        NotificationCenter.instance.AddObserver(this.Function, notificationName);
        NotificationCenter.instance.PostNotification(notificationName);
        NotificationCenter.instance.PostNotification(notificationName, evtArgs);
    }

    private Function(sender: Object, args: EventArgs<string>): void
    {
        if (args === null)
        {
            console.log("No argument found");
        }
        else
        {
            console.log(args.data);
        }
    }

}