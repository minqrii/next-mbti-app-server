module.exports = {
    apps : [{
        name: "whisper-api-gateway-server",
        script: './src/server.js',
        watch: true,
        env: {
            "NODE_ENV": "development"
        }
    }]
};
