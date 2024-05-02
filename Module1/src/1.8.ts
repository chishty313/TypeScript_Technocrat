// Object Destructuring

const user = {
    id: 345,
    name: {
        firstName: "Shoabur",
        middleName: "Rahman",
        lastName: "Chishty",
    },
    contactNo: "0111001001",
    address: "Bangladesh",
};

const {
    contactNo,
    name: { middleName },
} = user;

// Array Destructuring

const myFriends = ["Chandler", "Joey", "Ross", "Rachel", "Monica", "Phoebe"];

const [, , bestFriend, ...restMyFriends] = myFriends;
