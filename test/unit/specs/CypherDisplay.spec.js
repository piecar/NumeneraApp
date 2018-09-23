import { shallowMount } from '@vue/test-utils';
import CypherDisplay from '@/components/CypherDisplay';
import { Cypher } from '../../../src/data/Cyphers';

describe('CypherDisplay.vue', () => {
  let Wrapper;

  beforeEach(() => {
    Wrapper = shallowMount(CypherDisplay, {
      propsData: {
        cypher: new Cypher('something', true, 1, ['fine'], 'okay'),
      },
    });
  });

  it('should render Type: Anoetic if aneoetic is true', () => {
    expect(Wrapper.contains('#anoeticType')).toBe(true);
  });

  it('should not render Type: Occultic if aneoetic is true', () => {
    expect(Wrapper.contains('#occulticType')).toBe(false);
  });

  it('should not render Type: Anoetic if aneoetic is false', () => {
    Wrapper = shallowMount(CypherDisplay, {
      propsData: {
        cypher: new Cypher('something', false, 1, ['fine'], 'okay'),
      },
    });
    expect(Wrapper.contains('#anoeticType')).toBe(false);
  });

  it('should render Type: Occultic if aneoetic is false', () => {
    Wrapper = shallowMount(CypherDisplay, {
      propsData: {
        cypher: new Cypher('something', false, 1, ['fine'], 'okay'),
      },
    });
    expect(Wrapper.contains('#occulticType')).toBe(true);
  });
});
