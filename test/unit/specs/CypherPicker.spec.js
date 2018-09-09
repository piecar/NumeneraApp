import { shallowMount } from '@vue/test-utils';
import CypherPicker from '@/components/CypherPicker';
import FormButton from '@/components/FormButton';

describe('CypherPicker.vue', () => {
  let Wrapper;

  beforeEach(() => {
    Wrapper = shallowMount(CypherPicker);
  });

  it('should render correct contents', () => {
    expect(Wrapper.vm.$el.querySelectorAll('.picker h2')[0].textContent)
      .toEqual('Cypher Picker');
    expect(Wrapper.vm.$el.querySelectorAll('.picker h2')[1].textContent)
      .toEqual('Set your rolls');
  });

  it('should contain a FormButton', () => {
    expect(Wrapper.contains(FormButton)).toBe(true);
  });

  it('calls handleButtonClick when @buttonClick occurs', () => {
    const stub = jest.fn();
    Wrapper.setMethods({ handleButtonClick: stub });
    Wrapper.find(FormButton).vm.$emit('buttonClick');

    expect(stub).toBeCalled();
  });
});
