const path = require("path");

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "src/assets/scss")],
    },
    images: {
        domains: [
            "drive.google.com",
            "assets.rumsan.com",
            "rahat-rumsan.s3.amazonaws.com",
            "esatya.s3.amazonaws.com",
        ],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Ignore specific modules to avoid unnecessary warnings
        config.ignoreWarnings = [
            ...(config.ignoreWarnings || []),
            /magic-sdk/,
            /@walletconnect[\\/]web3-provider/,
            /@web3auth[\\/]web3auth/,
            /@walletconnect[\\/]universal-provider/,
        ];

        // Exclude 'react-native' from resolving for @walletconnect/universal-provider
        config.resolve.alias = {
            ...config.resolve.alias,
            reactNative: "react-native-web",
        };

        return config;
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};
