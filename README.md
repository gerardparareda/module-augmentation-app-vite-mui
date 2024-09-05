# Module augmentation with: TypeScript + Vite + Material UI (MUI v5)

An example of module augmentation working as a library of components with mui v5. 

Use this example with:

- https://github.com/gerardparareda/module-augmentation-library-vite-mui

## How to use

1. Download the project
2. Install `npm install`
3. Install the components library `npm i ../components-library`
4. Build and preview the project `npx vite build && npx vite preview` or run it `npx vite dev`.

## How does it work

For the module augmentation to work, you need to "import" (not in the module `import {Whatever} from ... ` sense, but include) the typings somewhere.

What I found I liked the most, was creating a `globals.d.ts` file (is can be named in any way, since it looks like ViteJS loads all `.d.ts` files.). Inside this file, load the typings containing the module augmentation:

```js
import type {} from 'components-library/dist/types/augmentations.d.ts';
```
^ This could change if it is a published npm package.

You will now have your library new module augmented typings everywhere in this application.

You can also import these typings in your application entry point, `index.ts` or `main.ts`.