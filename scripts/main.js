import { Block } from './blocks.js'

const blockContainer = document.getElementById('command-block-container')

const textSpec = {
  type: 'text',
  label: 'text input',
  id: 'one'
}

const pswSpec = {
  type: 'password',
  label: 'password input',
  id: 'two'
}

const swtSpec = {
  type: 'switch',
  label: 'switch input',
  id: 'three'
}

const inputSpecs = [textSpec, pswSpec, swtSpec]

const block = new Block('four', 'Block', inputSpecs)

blockContainer.appendChild(block.html)
