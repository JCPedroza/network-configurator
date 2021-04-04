import { TextField, PasswordField, SwitchField } from './inputs.js'

const createBlockInput = (type, label, id) => {
  if (type === 'text') {
    return new TextField(label, id)
  } else if (type === 'password') {
    return new PasswordField(label, id)
  } else if (type === 'switch') {
    return new SwitchField(label, id, true)
  }
}

class Block {
  constructor (id, title, inputSpecs) {
    this.id = id
    this.title = title
    this.inputSpecs = inputSpecs
    this.classList = ['col-12', 'col-md-6', 'col-lg-4', 'code-block']
    this.html = this.createHtml()
  }

  createHtml () {
    const fieldset = document.createElement('fieldset')
    const legend = document.createElement('legend')
    legend.innerHTML = this.title
    fieldset.id = this.id
    this.classList.forEach((cls) => fieldset.classList.add(cls))

    fieldset.appendChild(legend)
    this.inputSpecs.forEach((spec) => {
      const input = createBlockInput(spec.type, spec.label, spec.id).html
      fieldset.appendChild(input)
    })

    return fieldset
  }
}

export {
  Block
}
