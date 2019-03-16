import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import PickerViewer from '@/components/PickerViewer.vue';

Vue.use(Router);

export default new Router({
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
  ],
});
