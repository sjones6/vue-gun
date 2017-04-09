# Vue-Gun

A plugin to make Gun integration with Vue easier.

## Installation

`npm install vue-gun` or `yarn add vue-gun`.

Add the plugin:

```javascript
import VueGun from 'vue-gun';
Vue.use(VueGun, {
    gun // your gun instance
});
```

OR:

```javascript
var VueGun = require('vue-gun');
Vue.use(VueGun, {
    gun: gun // your gun instance
});
```

## Initialize Gun

You can either pass in a `gun` instance fully initialized, or allow pass VueGun to initialize it for you:

```javascript
import VueGun from 'vue-gun';
Vue.use(VueGun, {
    gun: gun // must be passed in at `gun` key
});
```

Allow VueGun to handle initialization:

```javascript
import VueGun from 'vue-gun';
Vue.use(VueGun, {
    peers: ['someurl.com:9000/gun']
});
```


## Usage

You can access the GUN instance with `this.$gun` inside of your Vue instance and components.

For instance inside your component, you might have this:

```javascript
mounted: function() {
        this.$gun.get('some path').map().on((pathResult, key) => {

            // add results straight to the Vue component state
            // and get updates when nodes are updated by GUN
            this.vueState[key] = pathResult;
        });
    },
```