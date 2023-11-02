# pstake-ui-components

[![npm (tag)](https://img.shields.io/npm/v/@persistenceone/pstake-ui-components)](https://www.npmjs.com/package/@persistenceone/pstake-ui-components)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/persistenceOne/pstake-ui-components)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

UI Components and utility library for pSTAKE App.

#### npm

```shell
npm i @persistenceone/pstake-ui-components
```

### Available Components1

```ts
import {
    Button, 
    ButtonLink, // to redirct from button
    Dropdown,
    Input, 
    Modal, 
    Switch,
    Tabs,
    Spinner,
} from "@persistenceone/pstake-ui-components";
```

### Available Hooks

```ts
import {
    useLocalStorage, 
    useWindowSize,
    useOnClickOutside,
} from "@persistenceone/pstake-ui-components";
```

### Available helper functions

```ts
import {
    formatNumber,
    stringTruncate,
    truncateToFixedDecimalPlaces,
    numberFormat,
    getTokenImgFromDenom,
    minifiyTxnHash,
    getActiveSideBarItem,
    getChainSpecificAssets,
    getPercentChange
} from "@persistenceone/pstake-ui-components";
```
### TailwindCSS Config

```tsconst tailwindConf = require("@persistenceone/pstake-ui-components");
module.exports = {
    content: [
    ...
    "./node_modules/@persistenceone/pstake-ui-components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
}
```
