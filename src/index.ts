import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function main() {
  const version = core.getInput('version')
  if (version) {
    await exec.exec('npm', ['install', `@ast-grep/cli@${version}`, '--global'])
  } else {
    await exec.exec('npm', ['install', '@ast-grep/cli', '--global'])
  }

  const config = core.getInput('config')
  const paths = core.getInput('paths')
  const args = ['scan']

  if (config) {
    args.push('-c', config)
  }

  args.push('--format', 'github')

  if (paths) {
    // GitHub actions doesn't support a YAML list, so use a string
    // https://stackoverflow.com/questions/75420197/how-to-use-array-input-for-a-custom-github-actions
    // and allow for escaped whitespace
    args.push(...paths.split(/(?<!\\)\s+/))
  }

  await exec.exec('ast-grep', args)
}

main().catch(error => {
  if (error instanceof Error) {
    core.setFailed(error.message)
  } else if (typeof error === 'string') {
    core.setFailed(error)
  } else {
    core.setFailed('unknown error')
  }
})
