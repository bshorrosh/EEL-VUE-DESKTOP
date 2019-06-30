'use strict';

eel.expose(get_random_via_js);

/*!* py to js
* Force to start a new line when minifying
*/
function get_random_via_js() {
    return Math.random();
}

function get_random_js_via_py() {
    try {
        return eel.get_random_js_via_py()().then(function (r) {
            return 'Random number was generated in JavaScript (Python Called JavaScript): ' + r
        });
    } catch (e) {
        return null;
    }
}

let PyCallToJs = {get_random_js_via_py: get_random_js_via_py};
export default PyCallToJs;
