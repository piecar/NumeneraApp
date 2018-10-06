import { shallowMount } from '@vue/test-utils';
import OddityPicker from '@/components/OddityPicker';
import FormButton from '@/components/FormButton';
import { Cypher } from '../../../src/data/Cyphers';

describe('CypherPicker.vue', () => {
  let Wrapper;

  beforeEach(() => {
    Wrapper = shallowMount(OddityPicker);
  });

  it('should render correct contents', () => {
    expect(Wrapper.vm.$el.querySelectorAll('.picker h2')[0].textContent)
      .toEqual('Oddity Picker');
    expect(Wrapper.vm.$el.querySelectorAll('.picker h2')[1].textContent)
      .toEqual('Set your roll');
    expect(Wrapper.vm.$el.querySelectorAll('label')[0].textContent)
      .toEqual('d100');
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

  it('should pick a correct oddity', () => {
    Wrapper.setData({ d100: 0, oddity: '' });
    Wrapper.vm.handleButtonClick();
    expect(Wrapper.vm.$data.oddity).toBe('Crystal that shatters easily but then instantly reforms');
  });

  it('should show oddity if showOddity is true', () => {
    Wrapper.setData({d100: 0, oddity: '', showOddity: false  });
    Wrapper.vm.handleButtonClick();
    expect(Wrapper.vm.$el.querySelector('p').textContent)
      .toEqual('Crystal that shatters easily but then instantly reforms');
  });
});
