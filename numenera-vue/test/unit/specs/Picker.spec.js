import Vue from 'vue';
import Picker from '@/components/Picker';

describe('Picker.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Picker);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.picker h1').textContent)
      .toEqual('Pickers');
    expect(vm.$el.querySelectorAll('.picker h2')[0].textContent)
      .toEqual('Cypher Picker');
    expect(vm.$el.querySelectorAll('.picker h2')[1].textContent)
      .toEqual('Oddity Picker');
  });
});
