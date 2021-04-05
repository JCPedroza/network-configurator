import { TextField, PasswordField, SwitchField } from '../inputs.js'
import { Command } from '../commands.js'
import { Block } from '../blocks.js'

const hostname = new Command(
  (name) => `hostname ${name}`,
  [new TextField('hostname', 'bsg-hostname')]
)

const enableSecret = new Command(
  (password) => `enable secret ${password}`,
  [new PasswordField('enable secret', 'bsg-pswenable')]
)

const bannerMotd = new Command(
  (message) => `banner motd #${message}#`,
  [new TextField('banner motd', 'bsg-motd')]
)

const passwordEncrypt = new Command(
  (checked) => checked ? 'service password-encryption' : '',
  [new SwitchField('service password-encryption', 'bsg-pswencrypt', true)]
)

const noIpDomainLookup = new Command(
  (checked) => checked ? 'no ip domain-lookup' : '',
  [new SwitchField('no ip domain-lookup', 'bsg-noiplookup', true)]
)

const loggingSync = new Command(
  (checked) => checked ? 'logging synchronous' : '',
  [new SwitchField('logging synchronous', 'bsg-logsync', true)]
)

const id = 'bsg'
const title = 'Basic Global'

const commandList = [
  hostname,
  enableSecret,
  bannerMotd,
  passwordEncrypt,
  noIpDomainLookup,
  loggingSync
]

const targets = ['switch', 'router', 'mls']

const block = new Block(id, title, commandList, targets)

export default block
