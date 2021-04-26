# msw-memory-test
Repo to test out the MSW memory usage

This repo has a simple example with 16 test files and all of them doing the same thing of firing an api via `node-fetch` and asserting for the response.

MSW server is being configured at `jest.setup.js` which gets executed once for every test file.

Do `yarn install` and execute `node --expose-gc ./node_modules/.bin/jest --silent  --runInBand --detectOpenHandles --logHeapUsage`

You can see in the below image which executes the same test case with just one fetch and an msw handler for this. Heap memory keeps increasing.

![alt JestRunWithLeak](https://github.fkinternal.com/storage/user/695/files/8ec17180-a43b-11eb-9694-a0830826e0a1)
