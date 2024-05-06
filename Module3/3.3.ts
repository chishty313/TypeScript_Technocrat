{
    // Type Guard

    // typeof --> type guard

    type AlphaNumeric = string | number;

    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2
        }
        else {
            return param1.toString() + param2.toString()
        }
    }

    const result1 = add(2, 3)

    console.log(result1);

    const result2 = add("2", 3)

    console.log(result2);
    

    // in guard

    type NormalUser = {name: string}
    type AdminUser = {name: string, role: "admin"}

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
            
        }
        else {
            console.log(`My name is ${user.name}`);
            
        }
    }

    const normalUser: NormalUser = {
        name:"Chishty"
    }

    const adminUser: AdminUser = {
        name: "SHoabur",
        role: "admin"
    }

    getUser(adminUser)
    getUser(normalUser)
}