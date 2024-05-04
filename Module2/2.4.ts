{
    // Interface - Generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper : Developer<EmilabWatch> = {
        name: "SHoabur",
        computer: {
            brand: "ASUS",
            model: "A-2442",
            releaseYear: 2012,
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            display: "OLED"
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper : Developer<AppleWatch, YamahaBike> = {
        name: "Chishty",
        computer: {
            brand: "HP",
            model: "A-247642",
            releaseYear: 2022,
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: "Yamaha",
            engineCapacity: "100CC"
        }
    }
}