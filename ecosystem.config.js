module.exports = {
    apps : [{
        name: "next-mbti",
        script: './src/index.js',
        watch: true,
        env: {
            "NODE_ENV": "development"
        }
    }]
};
