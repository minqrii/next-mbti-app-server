const express = require('express');
const mbtiRoute = require('./mbti.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
    {
        path : '/',
        route: mbtiRoute,
    },
];

const devRoutes = [];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
});

if(config.env === 'development') {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route)
    })
}

module.exports = router;
