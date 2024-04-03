import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '61485971304', process.env.OWNER_NAME || '㊗𝙈𝙄𝙆𝙀𝙔', true],
  ['260767611710', '㊗𝙎𝙝𝙞𝙣𝙞𝙘𝙝𝙞𝙧𝙤', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || '㊗𝙈𝙄𝙆𝙀𝙔'
global.botname = process.env.BOT_NAME || '㊗𝙎𝙝𝙞𝙣𝙞𝙘𝙝𝙞𝙧𝙤'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || '㊗𝙎𝙝𝙞𝙣𝙞𝙘𝙝𝙞𝙧𝙤'
global.stkowner = process.env.OWNER_NAME || '㊗𝙈𝙄𝙆𝙀𝙔'

//Watermark
global.maker = process.env.MAKER || 'Made with 𝙎𝙝𝙞𝙣𝙞𝙘𝙝𝙞𝙧𝙤 by O𝙈𝙄𝙆𝙀𝙔'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
