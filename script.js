const { PrivatebinClient } = require('@pixelfactory/privatebin')
const urlPrivatebin = 'https://privatebin.net'
const privatebin = new PrivatebinClient(urlPrivatebin)
const crypto = require('crypto')
const { encode } = require('bs58')
const key = crypto.webcrypto.getRandomValues(new Uint8Array(32))

const msg = 'Hola mundo'

const opts = {
    textformat: 'plaintext',
    expire: '1week',
    burnafterreading: 1,
    opendiscussion: 0,
    output: 'text',
    compression: 'none'
}

async function createURL (msg, key, opts) {
    const paste = await privatebin.sendText(msg, key, opts)
    console.log(urlPrivatebin + paste.url + '#' + encode(key))
}
createURL(msg, key, opts)
