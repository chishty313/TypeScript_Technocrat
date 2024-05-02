// Union Types

// type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper";

// const newDeveloper: FrontendDeveloper = "FakibazDeveloper";

type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "A+" | "AB+";
};

type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
};

type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
};

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const user1: User = {
    name: "Chishty",
    gender: "Male",
    bloodGroup: "A+",
};

const fullStackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "JS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
};
