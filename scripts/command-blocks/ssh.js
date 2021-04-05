import { TextField, PasswordField } from '../inputs.js'
import { Command } from '../commands.js'
import { Block } from '../blocks.js'

const domainName = new Command(
  (name) => `ip domain-name ${name}`,
  [new TextField('ip domain-name', 'ssh-domainname')]
)

const userAndSecret = new Command(
  (username, secret) => `username ${username} secret ${secret}`,
  [
    new TextField('username * secret -', 'ssh-username'),
    new PasswordField('username - secret *', 'ssh-password')
  ]
)

const cryptoGenerate = new Command(
  (bytes) => `crypto key generate rsa\n${bytes}`,
  [new TextField('crypto key generate rsa', 'ssh-crypto')]
)

const lineVty = new Command(
  (from, to) => {
    const line = `line vty ${from} ${to}`
    const rest = '\nlogin local\ntransport input ssh'
    return `${line}${rest}\nexit`
  },
  [
    new TextField('line vty * -', 'ssh-fromport'),
    new TextField('line vty - *', 'ssh-toport')
  ]
)

const id = 'ssh'
const title = 'SSH'

const commandList = [
  domainName,
  userAndSecret,
  cryptoGenerate,
  lineVty
]

const targets = ['switch', 'router', 'mls']

const block = new Block(id, title, commandList, targets)

export default block
