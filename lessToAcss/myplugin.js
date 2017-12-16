var postcss = require('postcss');
module.exports = postcss.plugin('myplugin', function myplugin(options) {
    return function(css) {
        css.replaceValues(/\d+px/, {
            fast: 'px'
        }, string => {
            return parseInt(parseFloat(string)) + 'rpx';
        });


    }
});