# Python/JavaScript Desktop Application Based On EELJS & VUEJS

>  A simple desktop application that uses EEL.JS to enable two-way communication between
VUE.JS (front-end) and python (back-end).

<br/>

This sample leverages the following projects:
>[https://github.com/ChrisKnott/Eel](https://github.com/ChrisKnott/Eel)<br/>
>[Vue 2.0 Simple Routing Example](https://github.com/chrisvfritz/vue-2.0-simple-routing-example/)<br/>
>[https://bokeh.pydata.org/en/latest/docs/gallery/burtin.html](https://bokeh.pydata.org/en/latest/docs/gallery/burtin.html)<br/>
>[https://www.w3schools.com/howto/howto_js_sticky_header.asp](https://www.w3schools.com/howto/howto_js_sticky_header.asp)

<br/>

## Build Setup
    
``` bash
# cd to the root directory
# activate your virtualenv
# run the following
pip install -r requirements.txt

# cd to the web directory and run the following:

# make executable
chmod +x ./deploy.sh
chmod +x ./build.sh

# install dependencies
npm install

# build the application
npm run eel:build

# build for production
npm run eel:deploy
```

<br/>

## A Screenshot Of The "Graph" Page

![](./web/graph_page.png)
