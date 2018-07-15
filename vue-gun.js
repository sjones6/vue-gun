module.exports = {
    install: function(Vue, options) {
        if (options && options.gun) {
            Vue.prototype.$gun = options.gun;
        } else {
            var Gun = require('gun');
            var SEA = require('gun/sea');
            Vue.prototype.$gun = Gun(options);
        }
    }
};
