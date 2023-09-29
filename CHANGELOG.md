# flyff.js

## 1.0.2

### Patch Changes

- 2374a6d: remove throwing error when using the getByListOfIds method for a single resource

## 1.0.1

### Patch Changes

- 82b5af4: Fixes a logic error in the base class

## 1.0.0

### Major Changes

- 1f45ddc: 1.0 Release

```bash
npm install flyff.js
```

```js
import { FlyffClient } from "flyff.js";

const client = new FlyffClient();
```

```js
await client.job.getAllIds();
```
