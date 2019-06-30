import eel

import server.server_data as server

eel.init('web')

@eel.expose
def get_random_via_python():
    return server.get_random_via_python()


@eel.expose
def get_graph_via_python():
    return server.get_graph_via_python()


@eel.expose
def get_random_js_via_py():
    return server.get_random_js_via_py()


eel.start('index.html', block=False, size=(1200, 1000), options={'port': 3000, 'host': 'localhost'})

while True:
    eel.sleep(1.0)
