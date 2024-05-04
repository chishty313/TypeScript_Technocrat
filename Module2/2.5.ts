{
    // Function with Generics

    const createArray = (param: string) : string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T) : T[] => {
        return [param]
    }

    const res1 = createArray("Bangladesh")
    const resGeneric1 = createArrayWithGeneric<string>("Bangladesh")
    const resGeneric2 = createArrayWithGeneric<boolean>(true)

    type User = {
        id: number;
        name: string;
    }

    const resGeneric3 = createArrayWithGeneric<User>({
        id: 222,
        name: "Chishty"
    })

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T, Q] => {
        return [param1, param2]
    }

    const res10 = createArrayWithTuple<string, number>("Bangladesh", 123)
    const res11 = createArrayWithTuple<string, { name: string; }>("Bangladesh",  {name: "CHishty"})

    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: "X", email: "x@g.c", devType: "NLWD"})
    const student2 = addCourseToStudent({name: "Y", email: "y@g.c", hasWatch: "Apple Watch", devType: "NLWD"})
}