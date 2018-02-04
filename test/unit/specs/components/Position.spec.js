import Position from '@/components/Position';
import {shallow} from 'vue-test-utils';

describe('Position component should', () => {
  it('render without crashing', () => {
    const wrapper = shallow(Position, {propsData: {rank: 1, position: {name: 'Test'}},});
    expect(wrapper.exists()).toBe(true);
  });

  it('render a postiional CSS class name', () => {
    const wrapper = shallow(Position, {propsData: {rank: 1, position: {name: 'Test'}},});
    const postionElement = wrapper.find('b-button');
    expect(postionElement.is('.tabellenfuehrerClass')).toBe(true);
  });
});
