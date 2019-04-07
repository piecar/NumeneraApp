import Vue from 'vue';
import Router from 'vue-router';
import Callback from './components/Callback.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import PickerViewer from '@/components/PickerViewer.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/',
    name: 'PickerViewer',
    component: PickerViewer,
  },
  {
    path: '/callback',
    name: 'callback',
    component: Callback,
  },
  ],
});
