# flyff.js

## 1.1.5

### Patch Changes

- 2efc91f: Add missing `combo` union type to `SkillObject` interface

## 1.1.4

### Patch Changes

- 8735095: More adjustments to the `Ability` type

## 1.1.3

### Patch Changes

- 5f7f42a: Refactor the `Ability` type to properly match the API response

## 1.1.2

### Patch Changes

- b1bb9fa: Add missing `ability` and `location` types to `ItemObject` interface

## 1.1.1

### Patch Changes

- 784b9f7: Export the actual types and not the classes

## 1.1.0

### Minor Changes

- 4dacdc9: Export types to allow consumers to use in applications

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
