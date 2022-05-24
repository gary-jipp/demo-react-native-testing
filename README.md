# React Native Testing

## Jest State Testing

- `npm i --save-dev @types/react-test-renderer`
- Create 'Slogan-test.js'
- using built in `findByProps` to find the button
- fire a click event on the button
- state should change & show in Text Element
- use both findByType & findByProps to locate elements
- if we add testID, notice that snapshpot changes -> Need -u


- Try to import `<App/>` and see what happens
- We get a nasty error message.
- `SyntaxError: Invalid or unexpected token`
