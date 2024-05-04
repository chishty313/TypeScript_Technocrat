{
  // Generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // Manually

  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "bike";
  const person2: Owner2 = "car";
  const person3: Owner2 = "ship";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Y",
    age: 12,
    address: "DHK",
  };

  const car = {
    model: "Toyota 100",
    year: 2012,
  };

  const result1 = getPropertyValue(car, "gdsf")
}
