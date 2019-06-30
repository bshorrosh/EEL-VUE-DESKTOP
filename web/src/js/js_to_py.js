'use strict';

/*!* js to py
* Force to start a new line when minifying
*/
function get_graph_via_python() {
    return eel.get_graph_via_python()().then(function (html) {
        return html
    });
}

function get_random_via_python() {
    return eel.get_random_via_python()().then(function (r) {
        return 'Random number was generated in Python (Javascript Called Python): ' + r
    });
}

let JsCallToPy = {
    get_random_via_python: get_random_via_python,
    get_graph_via_python: get_graph_via_python
};

export default JsCallToPy;
