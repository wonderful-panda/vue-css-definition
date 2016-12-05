# vue-css-definition

Typescript definition for css properties object

```ts
import { CssProperties } from "vue-css-definition";

@component({ ... })
class Component {
    get style(): CssProperties {
        return {
            display: "flex",
            margin: "1em"
        };
    }
}
```

## License
MIT

Definitions are generated from source of [vscode-css-languageservice](https://github.com/Microsoft/vscode-css-languageservice).
Copyright and license of vscode-css-languageservice:
  Copyright 2016, Microsoft
  MIT License
