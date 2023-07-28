# ast-grep/action

A GitHub Action to run [ast-grep](https://ast-grep.github.io/) [linting](https://ast-grep.github.io/guide/scan-project.html)!

![image](https://github.com/ast-grep/action/assets/2883231/52fe5914-5e43-4478-a7b2-fb0399f61dee)


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
