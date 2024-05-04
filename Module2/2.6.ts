{
  // Constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 224,
    name: "Z",
    email: "z@g.c",
    Emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({ id: 222, name: "X", email: "x@g.c", devType: "NLWD" });
  const student2 = addCourseToStudent({
    id: 223,
    name: "Y",
    email: "y@g.c",
    hasWatch: "Apple Watch",
    devType: "NLWD",
  });
}
