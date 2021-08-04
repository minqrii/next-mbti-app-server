const dotenv = require('dotenv');
const path = require('path');
const joi = require('joi');

dotenv.config({path: path.join(__dirname, '../../.env')});

const envVarSchema = joi.object()
    .keys({
        NODE_ENV: joi.string().valid('production', 'development', 'test').required(),
        PORT: joi.number().default(13010),
        WHISPER_APP_SERVER_HOST: joi.string().required(),
        WHISPER_APP_SERVER_PORT: joi.number().required(),
        WALLET_APP_SERVER_HOST: joi.string().required(),
        WALLET_APP_SERVER_PORT: joi.number().required(),
        ALARM_APP_SERVER_HOST: joi.string().required(),
        ALARM_APP_SERVER_PORT: joi.number().required(),
        REDIS_HOST: joi.string().required(),
        REDIS_PORT: joi.number().required(),
    })
    .unknown();

const {value: envVars, error} = envVarSchema.prefs({errors: {label: 'key'}}).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    walletAppServerAddr: envVars.WALLET_APP_SERVER_HOST + ':' + envVars.WALLET_APP_SERVER_PORT,
    whisperAppServerAddr: envVars.WHISPER_APP_SERVER_HOST + ':' + envVars.WHISPER_APP_SERVER_PORT,
    alarmAppServerAddr: envVars.ALARM_APP_SERVER_HOST + ':' + envVars.ALARM_APP_SERVER_PORT,
    redis: {
        host: envVars.REDIS_HOST,
        port: envVars.REDIS_PORT,
        // password: envVars.REDIS_PASSWORD,
    }
};
