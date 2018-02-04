import Team from '@/components/Team';
import { shallow } from 'vue-test-utils';

describe('Team component should', () => {
  it('render a team name', () => {
    const wrapper = shallow(Team, { propsData: { name: 'GW Arnsberg' } });
    const contentDiv = wrapper.find('div');
    expect(contentDiv.text()).toEqual('GW Arnsberg');
  });
});
