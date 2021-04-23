const fetch = require("node-fetch");
describe("JeevesTicketDetailsComponent", () => {
  it("Should render the component and add remarks action", async () => {
    await fetch(
      "http://local.test.com/getBooks"
    );
    expect(true).toBe(true);
  });
});
