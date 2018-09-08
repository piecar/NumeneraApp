import { mount, shallowMount } from '@vue/test-utils';
import CypherPicker from '@/components/CypherPicker';
import FormButton from '@/components/FormButton';

describe('CypherPicker.vue', () => {
  let Component;

  beforeEach(() => {
    Component = shallowMount(CypherPicker);
  });

  it('should render correct contents', () => {
    expect(Component.vm.$el.querySelector('.picker h2').textContent)
      .toEqual('Set your rolls');
  });

  it('should contain a FormButton', () => {
    const wrapper = mount(CypherPicker);
    expect(wrapper.contains(FormButton)).toBe(true);
  });
});
