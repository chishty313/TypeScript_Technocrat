// Spread Operator
// Rest Operator
// Destructuring

// Learn spread operator

const bros1: string[] = ["Mir", "Firoz", "Mizan"];
const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];

bros1.push(...bros2);

const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
};

const mentors2 = {
    prisma: "Firoz",
    next: "Tanmay",
    cloud: "Nahid",
};

const mentorsList = {
    ...mentors1,
    ...mentors2,
};


const greetFriends = (...restFriends: string[]) => {
    restFriends.forEach((friend: string) => console.log(`Hi ${friend}`);
    )
}

greetFriends("Abul", "Kabul", "Babul", "Ubul", "Labul")