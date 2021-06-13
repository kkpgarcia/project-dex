export default class ArrayEx
{
    public static RemoveElement<T>(array: Array<T>, element: T): Array<T>
    {
        return array.filter (
            function (value ,index, arr)
            {
                return value !== element;
            }
        );
    }
}