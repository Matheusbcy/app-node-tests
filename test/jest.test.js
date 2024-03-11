test("Devo conhecer as principais assertivas do jest", () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9); //Maior que
  expect(number).toBeLessThan(11); //Menor que
});

test("Devo saber trabalhar com objetos", () => {
  const obj = { name: "John", email: "john@gmail.com" };
  expect(obj).toHaveProperty("name");
  expect(obj).toHaveProperty("name", "John");
  expect(obj.name).toBe("John");

  const obj2 = { name: "John", email: "john@gmail.com" };
  expect(obj).toEqual(obj2); //Tobe diferencia objetos iguais
  expect(obj).toBe(obj);
});
