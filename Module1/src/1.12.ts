// nullable types / unknown type

const searchName = (value: string | null) => {
    if (value) {
        console.log("Searching");
    } else {
        console.log("Nothing to search");
    }
};

searchName(null);

// unknown

const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
        const [result, unit] = value.split(" ");
        const convertedSpeed = (result * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
        console.log("Wrong input");
    }
};

getSpeedInMeterPerSecond(null);

// never

const throwError = (msg: string): never => {
    throw new Error(msg);
};

throwError("Mushkil se error ho gaya");
