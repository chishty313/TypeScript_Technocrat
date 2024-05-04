{
    // Interface

    type User1 = {
        name: string;
        age: number;
    }

    interface User2  {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string }
    interface UserWithRole2 extends User2 { role: string }

    const user1: User1 = {
        name: "Chishty",
        age: 100
    }

    const user3: UserWithRole1 = {
        name: "Chishty",
        age: 100,
        role: "Manager"
    }

    const user2: User2 = {
        name: "Chishty",
        age: 100
    }

    const user4: UserWithRole2 = {
        name: "Chishty",
        age: 100,
        role: "Manager"
    }

    // JS --> Object, Array --> Object, Function --> Object

    type Roll1 = number[];
    interface Roll2 {
        [ index: number ]: number
    }

    const rollNumber1: Roll1 = [1, 2, 3]
    const rollNumber2: Roll2 = [1, 2, 3]

    type Add1 = (num1: number, num2: number) => Number;
    interface Add2 { (num1: number, num2: number) : Number}

    const add1: Add1 = (num1, num2) => num1 + num2;
    const add2: Add2 = (num1, num2) => num1 + num2;
}