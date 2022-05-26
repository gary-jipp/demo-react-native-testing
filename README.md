# React Native Testing

## Application Testing

- try to render the entire App
- React Navigation generates some errors, need to fix (see below)
- Since App uses fetch, we need to mock
- But we already know its better to mock the intereface instead
- 


## Configure environment
- Edit package.json

```
"jest": {
    "preset": "react-native",
    "transformIgnorePatterns": [
      "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)"
    ],
    "setupFiles": ["./node_modules/react-native-gesture-handler/jestSetup.js"],
    "transformIgnorePatterns": [
      "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)"
    ],
  }
```

- Also need to include mock for animations
- Create jestSetup.js and mock `NativeAnimatedHelper`
- or include in test file.

```
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
```

https://callstack.github.io/react-native-testing-library/docs/react-navigation/

https://www.npmjs.com/package/@testing-library/react-native

https://testing-library.com/docs/react-testing-library/cheatsheet/

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

https://reactnative.dev/docs/accessibility
