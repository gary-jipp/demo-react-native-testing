module.exports = {
  plugins: [
    [
      'module-resolver', {
        root: ['./src/'],
        alias: {},
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
