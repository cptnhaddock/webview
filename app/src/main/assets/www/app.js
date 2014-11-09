requirejs.config({
    baseUrl: 'lib',
    paths: {
        main: '../main',
        jquery: '../vendor/jquery-2.1.1.min',
        hammer: '../vendor/hammer.min'
    }
});

requirejs(['main']);