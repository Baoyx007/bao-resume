import Vue from 'vue';
import App from './App';
import './store.js';


// import 'materialize-css/dist/css/materialize.css';
// import 'materialize-css/dist/js/materialize.js';
// import 'materialize-css/js/init.js';

import description from './filters/description';

Vue.filter('description', description);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
});
