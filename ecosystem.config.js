module.exports = {
    apps : [{
        name: "EQBR-Api-Gateway",
        script: './src/index.js',
        watch: true,
        env: {
            "NODE_ENV": "development"
        }
    }]
};
