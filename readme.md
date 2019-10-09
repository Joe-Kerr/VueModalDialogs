# Modal dialogs plugin for Vue

The Vue version of JavaScript's alert(), confirm() and propmt() dialogs.


## Features
- Alert dialog displaying a message and an "Ok"-button
- Confirm dialog displaying a message and an "Ok"- and a "Cancel"-button.
- Prompt dialog displaying a text area and an "Ok"- and a "Cancel"-button.
- Dialogs return respective value of the user action (true, false, text).
- When await'ed behave like **native** counter parts (i.e. blocking).


## Demo

[See it in action.](https://joe-kerr.github.io/VueModalDialogs/)


## Requirements

- Vue
- Vuex
- dev environment such as Vue Cli ("soft" requirement / recommended)


## Install

**1)**
```
npm install @joe_kerr/vue-modal-dialogs
```

**2a) dev environment**

```javascript
import {installer, component} from "@joe_kerr/vue-modal-dialogs"; 
```

or

```javascript
import * as modalDialogs_or_whatever from "@joe_kerr/vue-modal-dialogs"; 
```

**2b) Pure node or browser**

```javascript
const modalDialogs = require("path_to_node_modules/@joe_kerr/vue-modal-dialogs/dist/modalDialogs.common.js");
```

or

```
<html> <script src="path_to_node_modules/@joe_kerr/vue-modal-dialogs/dist/modalDialogs.umd.min.js"></script>
```

and 

<link rel="stylesheet" href="path_to_node_modules/@joe_kerr/vue-modal-dialogs/dist/modalDialogs.css">



**3)**

```javascript
Vue.use(modalDialogs.installer, configuration); 
```

***4)**

```html
<section id="main">
	<modal-dialog-container />
</section>
```

```javascript
import {component} from "@joe_kerr/vue-modal-dialogs";
//or
const {component} = require("path_to_node_modules/@joe_kerr/vue-context-menu/dist/modalDialogs.common.js");
//or
const component = contextMenu.component;

export default {
	name: "main",
	components: {"modal-dialog-container": component}
};
```

## Use

### Configuration

Provide configuration properties on the second parameter of the Vue.use(plugin, **configProperties**) call.

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

### 1.0.4
- Fixed: gitignore not in the file list of the build script
- Changed: made live demo a bit prettier

### 1.0.3
- Added: live demo with github pages

### 1.0.2
- Fixed: ohh, I see now: https://github.com/webpack/webpack/issues/7646

### 1.0.1
- Changed: module import facilitated.

### 1.0.0
- Public release.


## Copyright

MIT (c) Joe Kerr 2019

