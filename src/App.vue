<template>
  <div className="index">
      <LeagueTable />
  </div>
</template>

<script>
import LeagueTable from './components/LeagueTable.vue';

export default {
  name: 'App',
  components: {
		LeagueTable
	},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
