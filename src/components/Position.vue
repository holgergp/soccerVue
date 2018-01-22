<template>
<span>
<b-button v-bind:class="teamCssClass">
        <Team :name=position.name />
  </b-button>
</span>
</template>
<script>

import classNames from 'classnames';
import Team from './Team';

export default {
  name: 'Position',
  components: { Team },
  props: ['position', 'rank'],
  computed: {
    teamCssClass() {
      let rankClass;
      const rank = parseInt(this.rank, 10);
      if (rank === 1) {
        rankClass = 'tabellenfuehrerClass tabelleClass';
      } else if (rank <= 3) {
        rankClass = 'championsLeagueClass tabelleClass';
      } else if (rank <= 6) {
        rankClass = 'europaLeagueClass tabelleClass';
      } else if (rank <= 15) {
        rankClass = 'mittelfeldClass tabelleClass';
      } else if (rank === 16) {
        rankClass = 'relegationClass tabelleClass';
      } else {
        rankClass = 'abstiegClass tabelleClass';
      }
      return classNames('col-md-12', rankClass);
    },
  },
};
</script>
<style>

.tabellenfuehrerClass {
  background-color: #5ab362;
  margin-bottom: 8px;
}
.championsLeagueClass {
  background-color: #0000ff;
  margin-bottom: 8px;
}
.europaLeagueClass {
  background-color: #0f91ff;
  margin-bottom: 8px;
}
.mittelfeldClass {
  background-color: rgb(132, 137, 139);
  margin-bottom: 8px;
}
.relegationClass {
  background-color: rgb(255, 157, 43);
  margin-bottom: 8px;
}
.abstiegClass {
  background-color: rgb(255, 70, 67);
  margin-bottom: 8px;
}
</style>
