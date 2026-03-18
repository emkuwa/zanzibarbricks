#!/usr/bin/env node
/**
 * Watch project files and auto-commit + push to GitHub.
 * Run: npm run auto-push
 * Stops with Ctrl+C.
 */

import { watch } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const root = join(__dirname, '..')

const DEBOUNCE_MS = 15000
const IGNORE = new Set(['node_modules', '.git', 'dist', '.DS_Store'])

let timeout = null

function run(cmd, silent = false) {
  try {
    execSync(cmd, { cwd: root, stdio: silent ? 'pipe' : 'inherit', encoding: 'utf-8' })
    return true
  } catch (_) {
    return false
  }
}

function doCommitAndPush() {
  let out = ''
  try {
    out = execSync('git status --porcelain', { cwd: root, encoding: 'utf-8' })
  } catch (_) {}
  if (!out || !out.trim()) return
  const msg = `Auto: ${new Date().toISOString().slice(0, 19).replace('T', ' ')}`
  run('git add .')
  if (run(`git commit -m "${msg}"`, true)) {
    run('git push')
  }
}

function schedulePush() {
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    timeout = null
    doCommitAndPush()
  }, DEBOUNCE_MS)
}

function shouldIgnore(filename) {
  if (!filename) return true
  const parts = filename.split(/[/\\]/)
  return parts.some(p => IGNORE.has(p) || p.startsWith('.'))
}

console.log('Watching for changes (auto-commit + push after', DEBOUNCE_MS / 1000, 's idle). Ctrl+C to stop.')

watch(root, { recursive: true }, (event, filename) => {
  if (shouldIgnore(filename)) return
  schedulePush()
})
