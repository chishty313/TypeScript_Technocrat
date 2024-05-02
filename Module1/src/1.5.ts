// Reference Type --> Object

const user: {
    readonly company: "khoj"; // literal type
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: "khoj",
    firstName: "Shoabur",
    middleName: "Rahman",
    lastName: "Chishty",
    isMarried: false,
};

user.company = "PH";
