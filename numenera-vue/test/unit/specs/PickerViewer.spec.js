import { shallowMount } from '@vue/test-utils';
import PickerViewer from '@/components/PickerViewer';
import CypherPicker from '@/components/CypherPicker';

describe('PickerViewer.vue', () => {
  let Component;

  beforeEach(() => {
    Component = shallowMount(PickerViewer);
  });

  it('should render correct contents', () => {
    expect(Component.vm.$el.querySelector('.picker h1').textContent)
      .toEqual('Pickers');
    expect(Component.vm.$el.querySelectorAll('.picker h2')[0].textContent)
      .toEqual('Oddity Picker');
  });

  it('should contain a CypherPicker', () => {
    const wrapper = shallowMount(PickerViewer);
    expect(wrapper.contains(CypherPicker)).toBe(true);
  });
});
