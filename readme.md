# Modal dialogs plugin for Vue

The Vue version of JavaScript's alert(), confirm() and propmt() dialogs.


## Features
- Alert dialog displaying a message and an "Ok"-button
- Confirm dialog displaying a message and an "Ok"- and a "Cancel"-button.
- Prompt dialog displaying a text area and an "Ok"- and a "Cancel"-button.
- Dialogs return respective value of the user action (true, false, text).
- When await'ed behave like **native** counter parts (i.e. blocking).


## Requirements

- Vue
- Vuex


## Install

**1)**
```
npm install @joe_kerr/vue-modal-dialogs
```

**2)**

```
import modalDialogs from "./where_you_put_it/src/index.js"; //Requires a dev environment.
```

or

```
const modalDialogs = require("./where_you_put_it/dist/modalDialogs.common.min.js");
```

or

```
<html> <script src=""./where_you_put_it/dist/modalDialogs.umd.min.js""></script>
```

**3)**

```
Vue.use(modalDialogs, configuration); //import default
//or!!
Vue.use(modalDialogs.installer, configuration); //named import
```


## Use

### Configuration

Provide configuration properties on the second parameter of the Vue.use(plugin, config) call.

#### vuex (mandatory)

A reference to your Vuex store instance.


#### namespace

The namespace of the store module, i.e. what you put in the dispatch call: store.dispatch("**namspace**/open"). Default: "modalDialog"


### Open dialogs

The available dialogs correspond to the native JavaScript counter parts:
- alert
- confirm
- propmt
```
store.dispatch("modalDialog/open", {dialog: "alert|confirm|prompt[, parameters: "message"|{text, placeholder}]})
```

The dialogs alert and confirm take a string on the parameters propery while the prompt dialog takes an object with optional text (dialog body) and placeholder (dialog textarea) properties.

Returns a promise with the resulting user action (see below) or throws if another dialog is tried to be opened while a previous one is still being awaited.


### Respond to dialogs
```
const response = await store.dispatch("modalDialog/open", {id, parameters});
```
The "response" promise resolves after a button on the dialog was pressed. It will contain
- true for the alert dialog,
- true or false for the confirm dialog,
- the text content of the prompt dialog if ok'ed or null if cancled.


### Style dialogs

The plugin comes with the following classes you can just override.

- .modal-dialog_modal
- .modal-dialog_container
- .modal-dialog_header
- .modal-dialog_body
- .modal-dialog_footer
- .modal-dialog_alert
- .modal-dialog_confirm
- .modal-dialog_prompt
- .modal-dialog_textarea

Default styles are provided that center the dialogs mid screen. If you want to change these as well, do it like so: 

```css
div.modal-dialog_modal {/*overrides*/}
```


## Notes

- Be wary of coupling by having store calls all around the place. 
- Dialogs come with minimal styling.


## Versions

### 1.0.0 
- Public release.


## Copyright

MIT (c) Joe Kerr 2019

