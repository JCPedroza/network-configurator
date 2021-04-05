class Command {
  constructor (template, fieldList) {
    this.template = template
    this.fieldList = fieldList
  }

  generate () {
    const argList = this.fieldList.map((field) => field.getValue())
    const cmdStr = this.template(...argList)
    if (cmdStr) {
      return `${cmdStr}\n`
    } else {
      return ''
    }
  }
}

export {
  Command
}
