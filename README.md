# flyff.js

flyff.js is an API wrapper written in TypeScript for the [FlyFF Universe API](https://api.flyff.com/)

# Features

- Type safe
- ESM/CJS compatible
- Covers all of the current FlyFF Universe API endpoints

# Getting started

## Install the library with your preferred package manager

```bash
npm install flyff.js
```

```bash
yarn add flyff.js
```

```bash
bun install flyff.js
```

```bash
pnpm install flyff.js
```

## Instantiate a new client

```js
import { FlyffClient } from "flyff.js";

const client = new FlyffClient();
```

## Make API calls

```js
await client.job.getAllIds();

// [ 764 ,2246, 3545, 5330, ... ]
```

## Documentation

coming soon

## License

[MIT](https://choosealicense.com/licenses/mit/)
