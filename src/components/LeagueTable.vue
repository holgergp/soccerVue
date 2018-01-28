<template>
<b-col md="6">
        <b-card bg-variant="primary"
                  text-variant="white"
                  header="Ligatabelle zum Selberstecken"
                  body-bg-variant="white"
                  class="text-center">
      <draggable :list="list">
        <transition-group name="list">
          <div v-for="(position, index) in list" :key="position.id">
            <Position :position=position :rank=index+1 v-on:contentedited="updateLocalstorage"/>
          </div>
        </transition-group>
      </draggable>
    </b-card>
</b-col>
</template>
<script>
import Vue from 'vue';
import draggable from 'vuedraggable';
import { SAMPLE_LEAGUE_TABLE } from '../constants/SampleData';
import Position from './Position';
import Positions from '../model/Positions';

const LEAGUE_TABLE = 'LEAGUE_TABLE';

export default {
  name: 'LeagueTable',
  components: { Position, draggable },
  data() {
    return {
      list: SAMPLE_LEAGUE_TABLE,
    };
  },
  props: {},
  watch: {
    list: (val) => {
      Vue.ls.set(LEAGUE_TABLE, val);
    },
  },
  mounted() {
    const leagueTableList = Vue.ls.get(LEAGUE_TABLE);
    if (leagueTableList) {
      this.list = leagueTableList;
    }
  },
  methods: {
    updateLocalstorage(event) {
      const { position, updatedTeamname } = event;
      this.list = Positions.recalculatePositionsWithRenamedTeam(
        position,
        updatedTeamname,
        this.list,
      );
    },
  },
};
</script>
