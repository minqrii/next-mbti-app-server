module.exports = {
    apps : [{
        name: "api",
        script: './src/index.js',
        watch: true,
        env: {
            "NODE_ENV": "development"
        }
    }]
};
