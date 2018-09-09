import { shallowMount } from '@vue/test-utils';
import FormButton from '@/components/FormButton';

describe('FormButton.vue', () => {
  let Wrapper;

  beforeEach(() => {
    Wrapper = shallowMount(FormButton, {
      propsData: {
        buttonText: 'Salvage',
      },
    });
  });

  it('should contain a button', () => {
    expect(Wrapper.find('.formButton button').exists()).toBe(true);
  });

  describe('Props', () => {
    it('should have a buttonText', () => {
      expect(Wrapper.props().buttonText).toBe('Salvage');
    });
    it('should have a buttonText', () => {
      expect(Wrapper.text()).toBe('Salvage');
    });
  });

  describe('validation', () => {
    const createCmp = shallowMount(FormButton, {
      propsData: {
        buttonText: 'Salvage',
      },
    });
    const buttonText = createCmp.vm.$options.props.buttonText;

    it('should be a String', () => {
      expect(buttonText.type).toBe(String);
    });

    it('message is required', () => {
      expect(buttonText.required).toBeTruthy();
    });
  });

  describe('Events', () => {
    it('sends a click event to parent', () => {
      const button = Wrapper.find('.button');
      button.trigger('click');
      expect(Wrapper.emitted('buttonClick')).toBeTruthy();
    });
  });
});
