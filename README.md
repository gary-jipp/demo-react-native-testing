# React Native Testing

## Application Testing

- try to render the entire App
- React Navigation generates some errors, need to fix
- need to stub out static files to avoid render errors on static files.
```
npm install --save-dev jest-transform-stub
```
- Edit package.json to map static files to the module
```
"jest": {
    "preset": "react-native",
    "moduleNameMapper": {
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    }
  }
```

- Also need to include mock for animations

https://callstack.github.io/react-native-testing-library/docs/getting-started

https://www.npmjs.com/package/@testing-library/react-native

https://testing-library.com/docs/react-testing-library/cheatsheet/

Accessibility Roles:
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

https://reactnative.dev/docs/accessibility
