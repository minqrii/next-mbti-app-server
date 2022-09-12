const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const httpStatus = require('http-status');

const config = require('./config/config');
const morgan = require('./config/morgan');

// const apiRoutes = require('./routes/api/v1');

const ApiError = require('./utils/ApiError');

const {errorConverter, errorHandler} = require('./utils/error');

const app = express();

app.get('/health', function (req,res){
    res.send('success');
})

if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(xss());

// app.use('/api/v1', apiRoutes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not Found'))
});

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
