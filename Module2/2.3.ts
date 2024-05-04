{
    // Generic Type

    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] = [1, 3 , 4]
    const rollNumbers : GenericArray<number> = [1, 3 , 4]

    // const mentors : string[] = ["X", "Y", "Z"]
    const mentors : GenericArray<string> = ["X", "Y", "Z"]

    // const boolArray : boolean[] = [true, false, true]
    const boolArray : GenericArray<boolean> = [true, false, true]

    const user: GenericArray<{name: string; age: number}> = [
        {name: "Shoabur", age: 11},
        {name: "Rahman", age: 11}
    ]

    // Generic Tuple

    type GenericTuple<X, Y> = [X, Y]

    const manush: GenericTuple<string, string> = ["X", "Y"]

    const userWithID: GenericTuple<number, {name: string, email: string}> = [1234, {name: "Shoabur", email: "c@g.co"}]
}