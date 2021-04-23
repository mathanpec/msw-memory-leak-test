const { rest } = require("msw");
const { setupServer } = require("msw/node");
module.exports = async () => {
  // ...
  // Set reference to mongod in order to close the server during teardown.
  global.mockServer = setupServer(
    // Describe the requests to mock.
    rest.get("http://local.test.com/getBooks", (req, res, ctx) => {
      return res(
        ctx.json({
          title: "Lord of the Rings",
          author: "J. R. R. Tolkien",
        })
      );
    })
  );
  global.mockServer.listen();
};
