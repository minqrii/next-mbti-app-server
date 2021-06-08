const express = require('express');
const messageRoute = require('./message.route');
const spamUserRoute = require('./spamUser.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/messages',
        route: messageRoute,
    },
    {
        path: '/spam-users',
        route: spamUserRoute,
    },
    {
        path: '/push',
        route: spamUserRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
});

module.exports = router;
