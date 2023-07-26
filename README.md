# ast-grep/action

A GitHub Action to run [ast-grep](https://ast-grep.github.io/) [linting](https://ast-grep.github.io/guide/scan-project.html)!

## Inputs

### `version`

**Optional** The version of ast-grep to use in the action. Default is latest.

### `config`

**Optional** The file path to ast-grep's project config relative to root dir. Default is `sgconfig.yml`.


## Outputs

### `exitCode`

The exit code of `sg scan`. 0 if no errors found.

## Example usage

```yaml
uses: ast-grep/action
with:
  config: sgconfig.yml
```
