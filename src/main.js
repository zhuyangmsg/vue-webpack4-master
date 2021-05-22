import Vue from 'vue'
import App from './App.vue'
import {tt} from './test.ts'
console.log(tt("zzzzz"));
new Vue({
  render: h => h(App),
}).$mount('#app')
