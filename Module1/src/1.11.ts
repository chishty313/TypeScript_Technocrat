// Ternary Operator || Optional Chaining || Nullish Coalescing operator

const age: number = 13 >= 18 ? console.log("Adult") : console.log("Not adult");

const isAdult = age >= 18 ? "Adult" : "Not Adult";
console.log({ isAdult });

// Nullish Coalescing Operator
// null / undefined ---> decision making
const isAuthenticated = "";

const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log({ result1 }, { result2 });

type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string;
    };
};

const user: User = {
    name: "Chishty",
    address: {
        city: "DHK",
        road: "Awesome Road",
        presentAddress: "DHK town",
    },
};

const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address Exists";
console.log(permanentAddress);
