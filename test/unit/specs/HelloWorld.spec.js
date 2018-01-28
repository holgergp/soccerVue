import Vue from 'vue';
import LeagueTable from '@/components/LeagueTable';

xdescribe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(LeagueTable);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App');
  });
});
