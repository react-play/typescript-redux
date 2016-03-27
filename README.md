

## Setup jspm

```
jspm install react
jspm install react-dom
jspm install redux
jspm install react-redux
jspm install es6-shim
```


### Setup TypeScript

```
typings install react --save --ambient
typings install react-com --save --ambient
typings install redux --save --ambient
typings install react-redux --save --ambient
typings install es6-shim --save --ambient
```

### Try

- [x] Example 1
- [x] Example 2
- [x] Example 3
- [x] Example 4
- [x] Example 5
- [x] Example 6
- [ ] Example 7
- [ ] Example 8


### jspm-server hot-reload (no working)

```
Change detected: src/ts/App.tsx
Change detected: src/js/App.js
✅  SystemJS loaded. Initialising ChangeHandler
💥  Change to http://127.0.0.1:8080/src/ts/App.tsx.js cannot be handled gracefully:
👉  Change occurred to a file outside SystemJS loading
💥  Change to http://127.0.0.1:8080/src/js/App.js cannot be handled gracefully:
👉  Change occurred to a file outside SystemJS loading
```