const dotenv = require('dotenv');
const path = require('path');
const joi = require('joi');

dotenv.config({path: path.join(__dirname, '../../.env')});

const envVarSchema = joi.object()
    .keys({
        NODE_ENV: joi.string().valid('production', 'development', 'test').required(),
        PORT: joi.number().default(4000),
        // APP_SERVER_HOST: joi.string().required().ip({
        //     version: [
        //         'ipv4',
        //         'ipv6',
        //     ]
        // }),
        APP_SERVER_HOST: joi.string().required(),
        APP_SERVER_PORT: joi.number().required(),
        REDIS_HOST: joi.string().required(),
        REDIS_PORT: joi.number().required(),
        REDIS_PASSWORD: joi.string().required(),
        REDIS_CONNECTED_USER_DATABASE: joi.number().required()
    })
    .unknown();

const {value: envVars, error} = envVarSchema.prefs({errors: {label: 'key'}}).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    appServerAddr: envVars.APP_SERVER_HOST + ':' + envVars.APP_SERVER_PORT,
    redis: {
        host: envVars.REDIS_HOST,
        port: envVars.REDIS_PORT,
        password: envVars.REDIS_PASSWORD,
        database:{
            connectedUser : envVars.REDIS_CONNECTED_USER_DATABASE
        }
    }
};
