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
    expect(Wrapper.vm.$el.querySelectorAll('p')[0].textContent)
      .toEqual('d100');
    expect(Wrapper.vm.$el.querySelectorAll('p')[1].textContent)
      .toEqual('d6');
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

  it('should pick a correct cypher', () => {
    Wrapper.setData({ d100: 1, d6: 1, cypher: null });
    Wrapper.vm.handleButtonClick();
    expect(Wrapper.vm.$data.cypher.name).toBe('Adhesion Clamps');
    expect(Wrapper.vm.$data.cypher.levelModifier).toBe(1);
  });

});
