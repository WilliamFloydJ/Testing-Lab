const { returnTwo, greeting, add } = require("./functions");

test("returnTwo() should equal 2", () => {
  expect(returnTwo()).toEqual(2);
});

test("Greeting should return hello and provided name", () => {
  expect(greeting("john")).toEqual("Hello john");
});

test("Add should add the two provided numbers", () => {
  expect(add(1, 2)).toEqual(3);
});
