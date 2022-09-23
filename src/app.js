const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const httpStatus = require('http-status');

const config = require('./config/config');
const morgan = require('./config/morgan');

const { sequelize } = require("./models/index");
const apiRoutes = require('./routes/api');

const ApiError = require('./utils/ApiError');

const {errorConverter, errorHandler} = require('./utils/error');

const app = express();

app.get('/', function (req,res){
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

app.use('/', apiRoutes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not Found'))
});

const cors = require('cors')
let corsOption = {
    origin: '*',
    credentials: true
}
app.use(cors(corsOption))

app.use(errorConverter);
app.use(errorHandler);

const ConnectDB = async () => {
    try {
      await sequelize
        .authenticate()
        .then(() => console.log("데이터베이스 연결 성공!"));
      await sequelize.sync({alter:true}).then(() => console.log("동기화 완료!"));
    } catch (error) {
      console.error("DB 연결 및 동기화 실패", error);
    }
  };
  // DB와 연결 및 동기화
  ConnectDB();

module.exports = app;
