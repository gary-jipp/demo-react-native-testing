# React Native Testing

## React Testing Library

https://testing-library.com/

## Installing Testing Library
Install packages
```
npm install --save-dev @testing-library/react-native
npm install --save-dev @testing-library/jest-native
```

Add to `package.json` - `jest` section
```
"setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
```

## Add Slogan-tests to use testing-library
- render component without crashing
- what does the `render` return?
  - search query methods (lots of them!)
  - container
  - a `toJSON` function (very useful!)
  - other stuff we don't use as much
  - as usual, self asserting


https://www.npmjs.com/package/@testing-library/react-native

https://callstack.github.io/react-native-testing-library/docs/getting-started/

https://testing-library.com/docs/react-testing-library/cheatsheet/