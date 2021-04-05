class Label {
  constructor (text, forId, classList) {
    this.text = text
    this.forId = forId
    this.classList = classList
    this.html = this.createHtml()
  }

  createHtml () {
    const element = document.createElement('label')
    this.classList.forEach((cls) => element.classList.add(cls))
    element.innerText = this.text
    element.htmlFor = this.forId
    return element
  }
}

class TextInput {
  constructor (type, id) {
    this.id = id
    this.classList = ['form-control']
    this.type = type
    this.placeholder = ''
    this.html = this.createHtml()
  }

  createHtml () {
    const element = document.createElement('input')
    this.classList.forEach((cls) => element.classList.add(cls))
    element.id = this.id
    element.type = this.type
    element.placeholder = this.placeholder
    return element
  }

  getValue () {
    return this.html.value
  }
}

class SwitchInput {
  constructor (id, checked) {
    this.id = id
    this.classList = ['form-check-input']
    this.type = 'checkbox'
    this.checked = checked
    this.html = this.createHtml()
  }

  createHtml () {
    const element = document.createElement('input')
    this.classList.forEach((cls) => element.classList.add(cls))
    element.id = this.id
    element.type = this.type
    element.checked = this.checked
    return element
  }

  getValue () {
    return this.html.checked
  }
}

class TextField {
  constructor (labelText, id) {
    this.input = new TextInput('text', id)
    this.label = new Label(labelText, id, ['form-label'])
    this.classList = ['mb-3', 'form-field', 'form-floating']
    this.html = this.createHtml()
  }

  createHtml () {
    const element = document.createElement('div')
    this.classList.forEach((cls) => element.classList.add(cls))
    element.appendChild(this.input.html)
    element.appendChild(this.label.html)
    return element
  }

  getValue () {
    return this.input.getValue()
  }
}

class PasswordField {
  constructor (labelText, id) {
    this.input = new TextInput('password', id)
    this.label = new Label(labelText, id, ['form-label'])
    this.classList = ['mb-3', 'form-field', 'form-floating']
    this.html = this.createHtml()
  }

  createHtml () {
    const element = document.createElement('div')
    this.classList.forEach((cls) => element.classList.add(cls))
    element.appendChild(this.input.html)
    element.appendChild(this.label.html)
    return element
  }

  getValue () {
    return this.input.getValue()
  }
}

class SwitchField {
  constructor (labelText, id, checked) {
    this.input = new SwitchInput(id, checked)
    this.label = new Label(labelText, id, ['form-check-label'])
    this.classList = ['mb-3', 'form-field', 'form-check', 'form-switch']
    this.html = this.createHtml()
  }

  createHtml () {
    const element = document.createElement('div')
    this.classList.forEach((cls) => element.classList.add(cls))
    element.appendChild(this.input.html)
    element.appendChild(this.label.html)
    return element
  }

  getValue () {
    return this.input.getValue()
  }
}

export {
  TextField,
  PasswordField,
  SwitchField
}
