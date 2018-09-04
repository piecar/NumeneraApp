import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Picker from '@/components/Picker';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
      {
        path: '/picker',
        name: 'Picker',
        component: Picker,
      },
  ],
});
