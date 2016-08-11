import Vue from 'vue';
import App from './App';
// import './store.js';


// import 'materialize-css/dist/css/materialize.css';
// import 'materialize-css/dist/js/materialize.js';
// import 'materialize-css/js/init.js';

import description from './filters/description';
import marked from 'marked';

Vue.filter('description', description);
Vue.filter('marked', marked);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
});
