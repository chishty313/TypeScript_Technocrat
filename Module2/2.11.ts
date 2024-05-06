{
    // Utility types
    // Pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type NameAge = Pick<Person, "name" | "age">

    // Omit => Opposite of Pick
    type ContactInfo = Omit<Person, "name" | "age">

    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly

    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly = {
        name: "CHishtyy",
        age: 200,
        contactNo: "4234"
    }

    // Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>

    const emptyObj : Record<string, unknown> = {}

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc"
    }
}