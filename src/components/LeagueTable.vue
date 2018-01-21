<template>
 <b-col md={6}>
      <b-card bg-variant="primary"
                text-variant="white"
                header="Ligatabelle zum Selberstecken"
                class="text-center">
     <div className="panel-body"
          v-for="(position, index) in SAMPLE_LEAGUE_TABLE" :key="position.id">
       <Position :position=position :rank=index+1 />
     </div>
  </b-card>
</b-col>


</template>
<script>
import { SAMPLE_LEAGUE_TABLE } from '../constants/SampleData';
import Position from './Position';

export default {
  name: 'LeagueTable',
  components: { Position },
  data() {
    return {
      SAMPLE_LEAGUE_TABLE,
    };
  },
};
</script>
