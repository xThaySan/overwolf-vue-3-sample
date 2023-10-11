# overwolf

This project is based on @elviswolcott/overwolf-vue-starter. It is an adaptation for Vue 3 (in Composition API).

## Project setup
```
yarn install
yarn build
```
Then in the development options of **Overwolf**, click on **Load unpacked extension** and select the `dist/` folder

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project architecture

The build creates the following architecture:

```
/dist/
|-- css/
|-- icons/
|-- js/
|-- windows/
|-- manifest.json
```

The `icons/` folder and the `manifest.json` file are copied from the contents of the `overwolf/` folder.
