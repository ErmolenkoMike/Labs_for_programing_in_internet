const LogLevel = {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3,
};



let currentLogLevel = LogLevel.INFO;

function setLogLevel(level) {
    currentLogLevel = level;
}

function log(level, message) {
    if (level >= currentLogLevel) {
        console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
    }
}

export { LogLevel, setLogLevel, log };


export default class Logger {
    static LogLevel = {
        DEBUG: 0,
        INFO: 1,
        WARNING: 2,
        ERROR: 3,
    };

    constructor() {
        this.currentLogLevel = Logger.LogLevel.INFO;
    }

    setLogLevel(level) {
        this.currentLogLevel = level;
    }

    log(level, message) {
        if (level >= this.currentLogLevel) {
            console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
        }
    }
}


import CryptoJS from 'crypto-js';

const message = 'Secret message';
const key = 'My secret key';

// Encrypt message
const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
console.log(`Encrypted message: ${encryptedMessage}`);

// Decrypt message
const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
console.log(`Decrypted message: ${decryptedMessage}`);


// Модуль логування
const LOG_LEVELS = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3
};

let logLevel = LOG_LEVELS.INFO;

function setLogLevel(level) {
    logLevel = level;
}

function log(level, message) {
    if (logLevel <= level) {
        console.log(`${new Date().toISOString()} [${level}] ${message}`);
    }
}

// Модуль шифрування
const CaesarCipher = {
    encrypt: function(str, shift) {
        let encrypted = "";
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            let shiftedCode = charCode + shift;
            if (charCode >= 65 && charCode <= 90) {
                shiftedCode = ((shiftedCode - 65) % 26) + 65;
            } else if (charCode >= 97 && charCode <= 122) {
                shiftedCode = ((shiftedCode - 97) % 26) + 97;
            }
            encrypted += String.fromCharCode(shiftedCode);
        }
        log(LOG_LEVELS.INFO, `Encrypted message: ${encrypted}`);
        return encrypted;
    },
    decrypt: function(str, shift) {
        let decrypted = "";
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            let shiftedCode = charCode - shift;
            if (charCode >= 65 && charCode <= 90) {
                shiftedCode = ((shiftedCode - 90) % 26) + 90;
            } else if (charCode >= 97 && charCode <= 122) {
                shiftedCode = ((shiftedCode - 122) % 26) + 122;
            }
            decrypted += String.fromCharCode(shiftedCode);
        }
        log(LOG_LEVELS.INFO, `Decrypted message: ${decrypted}`);
        return decrypted;
    }
};

module.exports = { CaesarCipher, setLogLevel };


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIntArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(randomInt(min, max));
    }
    return arr;
}

function randomText(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text = "";
    for (let i = 0; i < length; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
}

export { randomInt, randomIntArray, randomText };


import { randomInt, randomIntArray, randomText } from "./random.js";
