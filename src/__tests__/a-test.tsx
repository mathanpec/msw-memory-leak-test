const fetch = require("node-fetch");
describe("JeevesTicketDetailsComponent", () => {
  it("Should render the component and add remarks action", async () => {
    const resp = await fetch(
      "http://local.test.com/getBooks"
    );
    console.log('Response --' + JSON.stringify(resp));
    // expect(resp).toEqual({
    //   title: "Lord of the Rings",
    //   author: "J. R. R. Tolkien",
    // })
  });
});
