const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#965efe',
                            '@font-size-base': 16,

                            '@rate-star-color': '#965efe',
                            '@rate-star-size': 12,
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
