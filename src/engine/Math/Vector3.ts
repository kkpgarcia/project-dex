import MathImpl from "./MathImpl";
import VectorBase from "./VectorBase";

export default class Vector3 extends VectorBase
{
    public get x(): number
    {
        return this._val[0];
    }

    public get y(): number
    {
        return this._val[1];
    }

    public get z(): number
    {
        return this._val[2];
    }

    constructor(x: number = 0, y: number = 0, z: number = 0)
    {
        super();
        this._val = [x, y, z];
    }

    public Add(vec: Vector3): Vector3
    {
        const result = MathImpl.Add(this._val, vec.AsArray());
        return new Vector3(result[0], result[1]);
    }

    public Subtract(vec: Vector3): Vector3
    {
        const result = MathImpl.Subtract(this._val, vec.AsArray());
        return new Vector3(result[0], result[1]);
    }

    public Divide(vec: Vector3): Vector3 {
        const result = MathImpl.Divide(this._val, vec.AsArray());
        return new Vector3(result[0], result[1]);
    }

    public Scale(scale: number): Vector3 {
        const result = MathImpl.Scale(this._val, scale);
        return new Vector3(result[0], result[1]);
    }

    public static Min(vec_a: Vector3, vec_b: Vector3): Vector3 {
        const result = MathImpl.Min(vec_a.AsArray(), vec_b.AsArray());
        return new Vector3(result[0], result[1]);
    }

    public static Max(vec_a: Vector3, vec_b: Vector3): Vector3 {
        const result = MathImpl.Max(vec_a.AsArray(), vec_b.AsArray());
        return new Vector3(result[0], result[1]);
    }

    public static Clamp(vec: Vector3, min: number, max: number): Vector3 {
        const result = MathImpl.Clamp(vec.AsArray(), min, max);
        return new Vector3(result[0], result[1]);
    }

    public Lerp(from: Vector3, to: Vector3, time: number): Vector3 {
        const result = MathImpl.Lerp(from.AsArray(), to.AsArray(), time);
        return new Vector3(result[0], result[1]);
    }

    public Lerp_i(from: Vector3, to: Vector3, time: number): Vector3 {
        this._val = MathImpl.Lerp(from.AsArray(), to.AsArray(), time);
        return this;
    }
}