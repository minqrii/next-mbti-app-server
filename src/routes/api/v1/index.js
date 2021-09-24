const express = require('express');
const messageRoute = require('./message.route');
const connectionRoute = require('./connection.route');
const userRoute = require('./user.route');
const pushNotificationRoute = require('./pushNotification.route');
const notificationRoute = require('./notification.route');
const transactionRoute = require('./transaction.route');
const tokenRoute = require('./token.route');
const networkRoute = require('./network.route');
const priceRoute = require('./price.route');
const candlestickRoute = require('./candlestick.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/messages',
        route: messageRoute
    },
    {
        path: '/users',
        route: userRoute
    },
    {
        path: '/push-notification',
        route: pushNotificationRoute
    },
    {
        path: '/transactions',
        route: transactionRoute
    },
    {
        path: '/tokens',
        route: tokenRoute
    },
    {
        path : '/notifications',
        route : notificationRoute
    },
    {
        path : '/connection',
        route : connectionRoute
    },
    {
        path : '/networks',
        route : networkRoute
    },
    {
        path : '/price',
        route : priceRoute
    },
    {
        path : '/candlestick',
        route : candlestickRoute
    }
    //::todo transaction route가 각 서버에서 쏜것이 맞는지 verify 하는 process 있으면 좋겠다.
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
});

module.exports = router;
