module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: 'src',
        rootPathSuffix: 'src'
      }
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv'
      }
    ]
  ]
}
