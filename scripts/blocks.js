class Block {
  constructor (id, title, commandList, targetList) {
    this.id = id
    this.title = title
    this.commandList = commandList
    this.targetList = targetList
    this.classList = ['col-12', 'col-md-6', 'col-lg-4', 'cmd-block']
    this.html = this.createHtml()
  }

  createHtml () {
    const fieldset = document.createElement('fieldset')
    const legend = document.createElement('legend')
    legend.innerHTML = this.title
    fieldset.id = this.id
    this.classList.forEach((cls) => fieldset.classList.add(cls))

    fieldset.appendChild(legend)
    this.commandList.forEach((cmd) => {
      const cmdFields = cmd.fieldList.map((field) => field.html)
      cmdFields.forEach((field) => fieldset.appendChild(field))
    })

    return fieldset
  }

  generate () {
    const reducer = (acc, cur) => `${acc}${cur.generate()}`
    const initialValue = ''
    return this.commandList.reduce(reducer, initialValue)
  }
}

export {
  Block
}
