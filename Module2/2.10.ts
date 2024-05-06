{
    // Mapped types

    const arrOfNumbers: number[] = [1, 2, 3]

    const arrOfStrings: string[] = arrOfNumbers.map(number => number.toString())

    console.log(arrOfStrings);

    type AreaNumber = {
        height: number;
        width: number;
    }
    // type AreaString = {
    //     height: string;
    //     width: string;
    // }
    // keyof AreaNumber => "height" | "width"

    type AreaString = {
        [ key in keyof AreaNumber ] : string
    }
}