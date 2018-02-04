<template>
<span>
<b-button v-bind:class="teamCssClass">
        <Team :name=position.name v-on:teamnameUpdated="bubbleUp"/>
  </b-button>
</span>
</template>
<script>
import classNames from 'classnames';
import Team from './Team';
import eventConstants from '../constants/events';

const classForRank = [
  { from: 1, to: 1, className: 'tabellenfuehrerClass' },
  { from: 2, to: 3, className: 'championsLeagueClass' },
  { from: 4, to: 6, className: 'europaLeagueClass' },
  { from: 7, to: 15, className: 'mittelfeldClass' },
  { from: 16, to: 16, className: 'relegationClass' },
  { from: 17, to: 18, className: 'abstiegClass' },
];

const between = (value, lower, upper) => value <= upper && value >= lower;

export default {
  name: 'Position',
  components: { Team },
  props: {
    position: { type: Object, required: true },
    rank: { type: Number, required: true },
  },
  computed: {
    teamCssClass() {
      const rankClass = classForRank.find(cfr => between(this.rank, cfr.from, cfr.to));
      return classNames('col-md-12', 'list-item', 'tabelleClass', rankClass.className);
    },
  },
  methods: {
    bubbleUp(event) {
      this.$emit(eventConstants.teamnameUpdated,
        { updatedTeamname: event.updatedTeamname,
          position: this.position,
        },
      );
    },
  },
};


</script>
<style>
.tabellenfuehrerClass {
  background-color: #5ab362;
  margin-bottom: 8px;
  overflow: auto;
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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
