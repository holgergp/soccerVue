import Team from '@/components/Team';
import {shallow} from 'vue-test-utils';

describe('Team component should', () => {
  it('render without crashing', () => {
    const wrapper = shallow(Team);
    expect(wrapper.exists()).toBe(true);
  });

  it('render a team name', () => {
    const wrapper = shallow(Team ,{propsData :{name: 'GW Arnsberg'}});
    const contentDiv = wrapper.find('div');
    expect(contentDiv.text()).toEqual('GW Arnsberg');
  });
});
