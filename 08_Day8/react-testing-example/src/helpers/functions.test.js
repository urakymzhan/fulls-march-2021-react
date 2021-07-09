import functions from "./functions";

// toBe()
test("Adds 2 + 2 to equal 4", () => {
  // assertion
  expect(functions.add(2, 2)).toBe(4);
});

// toBeNull
test("Should return null", () => {
  expect(functions.isNull()).toBeNull();
});

// toEqual() - Objects
test("Should return user Jordan Michael", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Jordan",
    lastName: "Michael",
  });
});

// async/await
test("Fetched user should be Leanne Graham", async () => {
  expect.assertions(1);
  const user = await functions.fetchUser();
  expect(user.name).toEqual("Leanne Graham");
});
