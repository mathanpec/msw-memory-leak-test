# msw-memory-test
Repo to test out the MSW memory usage

This repo has a simple example with 16 test files and all of them doing the same thing of firing an api via `node-fetch` and asserting for the response from MSW handler.

MSW server is being configured at `jest.setup.js` which gets executed once for every test file.

Do `yarn install` and execute `node --expose-gc ./node_modules/.bin/jest --silent  --runInBand --detectOpenHandles --logHeapUsage`

You can see the below reference image,

![alt JestRunWithLeak](https://user-images.githubusercontent.com/6211920/116098408-ae20fe80-a6c8-11eb-8a4a-3a6d237c9e2d.png)
