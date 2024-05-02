// Type Alias
type Student: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
}

type UserName = string;
type IsAdmin = boolean
type Add = (num1: number, num2: number) => number;

const student1: Student = {
    name: "Chishty",
    age: 24,
    gender: "Male",
    contactNo: "8937562348765",
    address: "Dhaka",
}

const userName: UserName = "Bigc"
const isAdmin = true
const add: Add = (num1, num2) => num1 + num2;