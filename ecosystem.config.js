module.exports = {
    apps : [{
        name: "whisper-api-gateway-server",
        script: './src/index.js',
        watch: true,
        env: {
            "NODE_ENV": "development"
        }
    }]
};
