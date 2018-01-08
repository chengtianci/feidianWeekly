module.exports = {
    options: {
        sourceMap: true
    },
    plugins: [
        require('precss'),
        require('postcss-cssnext')
    ]
}