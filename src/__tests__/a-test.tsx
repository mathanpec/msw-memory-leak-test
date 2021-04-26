const fetch = require("node-fetch");
describe("JeevesTicketDetailsComponent", () => {
  it("Should render the component and add remarks action", async () => {
    const resp = await fetch(
      "http://local.test.com/getBooks"
    );
    const actualData = await resp.json();
    expect(actualData).toEqual({
      title: "Lord of the Rings",
      author: "J. R. R. Tolkien",
    })
  });
});
