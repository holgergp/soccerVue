import {shallow} from 'vue-test-utils';
import App from '@/App';


describe('App component should', () => {
  it('render without crashing', () => {
    const wrapper = shallow(App);
    expect(wrapper.find('LeagueTable')).toBeDefined();
  });

});

