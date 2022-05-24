# React Native Testing

## Jest State Testing

- `npm i --save-dev @types/react-test-renderer`
- Create 'Slogan-test.js'
- using built in `findByProps` to find the button
- fire a click event on the button
- state should change & show in Text Element
- use both findByType & findByProps to locate elements
- if we add testID, snapshpot changes -> Need `-u`
- This seems like a lot of work!  Must be an easier way.
- testing-library
