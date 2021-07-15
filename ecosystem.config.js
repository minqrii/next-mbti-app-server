module.exports = {
    apps : [{
        name: "whisper",
        script: './src/index.js',
        watch: true,
        env: {
            "NODE_ENV": "development"
        }
    }]
};
