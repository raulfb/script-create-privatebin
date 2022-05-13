const { PrivatebinClient } = require('@pixelfactory/privatebin')
const urlPrivatebin = 'https://privatebin.net'
const privatebin = new PrivatebinClient(urlPrivatebin)
const crypto = require('crypto')
const { encode } = require('bs58')
const key = crypto.webcrypto.getRandomValues(new Uint8Array(32))

const msg = 'Hola mundo'

// options opts
// expire: '5min' | '10min' | '1hour' | '1day' | '1week' | '1month' | '1year' | 'never';
// burnafterreading: 0 | 1;
// opendiscussion: 0 | 1;
// output: 'text' | 'json' | 'yaml';
// compression: 'none' | 'zlib';
// textformat: 'plaintext' | 'markdown';

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
