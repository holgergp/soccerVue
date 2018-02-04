import LeagueTable from '@/components/LeagueTable';
import Position from '@/components/Position';
import {mount, shallow} from 'vue-test-utils';

describe('LeagueTable component should', () => {
  it('render without crashing', () => {
    const wrapper = shallow(LeagueTable);
    expect(wrapper.exists()).toBe(true);
  });

  it('render clubs mounted', () => {
    const wrapper = mount(LeagueTable);
    const positions = wrapper.findAll(Position);
    expect(positions.length).toEqual(18);
  });
});
