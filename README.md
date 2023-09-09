# ast-grep/action

A GitHub Action to run [ast-grep](https://ast-grep.github.io/) [linting](https://ast-grep.github.io/guide/scan-project.html)!

![image](https://github.com/ast-grep/action/assets/2883231/52fe5914-5e43-4478-a7b2-fb0399f61dee)

See a more detailed setup guide in [ast-grep's tooling guide](https://ast-grep.github.io/guide/tooling-overview.html#use-ast-grep-in-github-action).

## Inputs

### `version`

**Optional** The version of ast-grep to use in the action. Default is latest.

### `config`

**Optional** The file path to ast-grep's project config relative to root dir. Default is `sgconfig.yml`.

## Example usage

### Basic

```yaml
on: [push]

jobs:
  sg-lint:
    runs-on: ubuntu-latest
    name: Run ast-grep lint
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: ast-grep lint step
        uses: ast-grep/action@v1.3
```

### Advanced

```yaml
on: [push]

jobs:
  sg-lint:
    runs-on: ubuntu-latest
    name: Run ast-grep lint
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: ast-grep lint step
        uses: ast-grep/action@v1.3
        with:
          version: 0.9.2
          config: sgconfig.yml
```
