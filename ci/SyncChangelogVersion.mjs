import { readFileSync, appendFileSync, existsSync } from 'fs'
import { execSync } from 'child_process'

if (!existsSync('CHANGELOG.md')) {
  console.error('Error: CHANGELOG.md not found')
  process.exit(1)
}
const changelog = readFileSync('CHANGELOG.md', 'utf8')

const match = changelog.match(/^## (\d+\.\d+\.\d+(?:-[\w.]+)?)/m)
if (!match) {
  console.error('Error: No released version heading found in CHANGELOG.md')
  process.exit(1)
}
const changelogVersion = match[1]
console.log(`CHANGELOG version: ${changelogVersion}`)

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
const pkgName = pkg.name

let npmVersion = null
try {
  npmVersion = execSync(
    `npm view ${pkgName}@${changelogVersion} version`,
    { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }
  ).trim()
} catch { /* version not on npm */ }

if (npmVersion === changelogVersion) {
  console.log(`Version ${changelogVersion} already published on npm. Skipping.`)
  setOutput('should_publish', 'false')
  process.exit(0)
}

console.log(`Syncing package.json to version ${changelogVersion}`)
execSync(`npm version ${changelogVersion} --no-git-tag-version`, { stdio: 'inherit' })
setOutput('should_publish', 'true')

function setOutput(key, value) {
  const f = process.env.GITHUB_OUTPUT
  if (f) appendFileSync(f, `${key}=${value}\n`)
  else console.log(`${key}=${value}`)
}
