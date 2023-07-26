import core from '@actions/core'

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet')
  console.log(`Hello ${nameToGreet}!`)
  const time = new Date().toTimeString()
  core.setOutput('time', time)
} catch (error) {
  if (error instanceof Error) {
    core.setFailed(error.message)
  } else if (typeof error === 'string') {
    core.setFailed(error)
  } else {
    core.setFailed('unknown error')
  }
}
