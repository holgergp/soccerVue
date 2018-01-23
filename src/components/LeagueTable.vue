<template>
 <b-col md="6">
      <b-card bg-variant="primary"
                text-variant="white"
                header="Ligatabelle zum Selberstecken"
                body-bg-variant="white"
                class="text-center">
    <draggable :list="list" class="dragArea">
      <div v-for="(position, index) in list" :key="position.id">
        <Position :position=position :rank=index+1 />
      </div>
    </draggable>
  </b-card>
</b-col>


</template>
<script>
import draggable from 'vuedraggable';
import Position from './Position';
import { SAMPLE_LEAGUE_TABLE } from '../constants/SampleData';

export default {
  name: 'LeagueTable',
  components: { Position, draggable },
  data() {
    return {
      list: SAMPLE_LEAGUE_TABLE,
    };
  },
};
</script>
