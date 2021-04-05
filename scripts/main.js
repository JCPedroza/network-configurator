import basicGlobal from './command-blocks/basic-global.js'
import ssh from './command-blocks/ssh.js'

const blockBox = document.getElementById('command-block-container')
const txaOutput = document.getElementById('txa-output')

const btnGenerate = document.getElementById('btn-generate')
const btnCopy = document.getElementById('btn-copy')
const btnClear = document.getElementById('btn-clear')
const btnEdit = document.getElementById('btn-edit')

const activeBlocks = [basicGlobal, ssh]

btnGenerate.onclick = () => {
  const reducer = (acc, cur) => `${acc}${cur.generate()}\n`
  const initialValue = ''
  txaOutput.value = activeBlocks.reduce(reducer, initialValue)
}

btnCopy.onclick = () => {
  navigator.clipboard
    .writeText(txaOutput.value)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

btnClear.onclick = () => {
  txaOutput.value = ''
}

btnEdit.onclick = () => {
  if (txaOutput.readOnly === true) {
    txaOutput.readOnly = false
  } else {
    txaOutput.readOnly = true
  }
}

activeBlocks.forEach((block) => blockBox.appendChild(block.html))
