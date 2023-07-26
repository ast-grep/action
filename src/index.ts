import core from '@actions/core'
import exec from '@actions/exec'

async function main() {
  const version = core.getInput('version')
  if (version) {
    await exec.exec('npm', ['install', `@ast-grep/cli@${version}`, '--global'])
  } else {
    await exec.exec('npm', ['install', '@ast-grep/cli', '--global'])
  }
  const config = core.getInput('config')
  const args = config ? ['scan', '-c', config] : ['scan']
  const code = await exec.exec('ast-grep', args)
  core.setOutput('exitCode', code)
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
