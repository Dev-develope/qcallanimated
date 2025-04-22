module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|avi)$/i,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/media/',
            outputPath: 'static/media/',
            name: '[name].[hash].[ext]',
          },
        },
      });
      return config;
    },
  };
  