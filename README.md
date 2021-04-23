# msw-memory-test
Repo to test out the MSW memory usage

## To see the leak

Checkout to branch `with-memory-lean` and execute `node --expose-gc ./node_modules/.bin/jest --silent  --runInBand --detectOpenHandles --logHeapUsage`

You can see in the below image which executes the same test case with just one fetch and an msw handler for this. Heap memory keeps increasing.

![alt JestRunWithLeak](https://github.fkinternal.com/storage/user/695/files/8ec17180-a43b-11eb-9694-a0830826e0a1)

## To see the one without leak

Checkout to branch `master` and execute `node --expose-gc ./node_modules/.bin/jest --silent  --runInBand --detectOpenHandles --logHeapUsage`

You can see in the below image which executes the same test case with just one fetch and an msw handler for this. But now the msw server instance creation is moved to global setup file and only one instance is created. You can see heap usage is pretty much constant.

![image](https://github.fkinternal.com/storage/user/695/files/d0eab300-a43b-11eb-9234-fe4976026f83)