require('yii-steroids/webpack')
    .config({
        port: 8082,
        baseUrl: '',
        staticPath: '',
        outputPath: __dirname + '/dist',
        sourcePath: __dirname + '/src',
        useHash: true,
        devServer: {
            proxy: {
                '**': null,
            },
        },
    })
    .base('./src/index.js');