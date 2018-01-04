module.exports = {
    options: {
        sourceMap: true
    },
    plugins: [
        require('precss'),
        require('postcss-cssnext'),
        require('postcss-import'),
        require('cssnano')({
            preset: 'default',
        }),
    ]
}