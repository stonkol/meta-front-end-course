const { default: TestRunner } = require("jest-runner");
// tell where is located
const addFive = require(`./addFive`);

// the text will output in the command line after it runs.
test("returns the number plus 5", () => {
  expect(addFive(1)).toBe(6);
});
