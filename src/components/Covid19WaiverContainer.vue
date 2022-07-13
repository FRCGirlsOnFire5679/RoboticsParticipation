<template>
    <form>
      <!-- Form Example (submitting currently does nothing with the data) -->
      <h2 v-if="isFormUntouched">COVID-19 waiver:</h2>
      <label for="main-waiver-covid-19-vacination">Fully vaccinated attestation OR Not fully vaccinated</label>
      <section class="form-inputs-container">
        <section v-if="d">
          <div class="action-container">
              
            
          </div>
        </section>
        <section v-if="g">
          <Covid19WaiverVaccinated v-if="vaccinated" />
          <Covid19WaiverNotVaccinated v-if="notVaccinated" />
        </section>
      </section>
    </form>
</template>

<script>
import Covid19WaiverVaccinated from './Covid19WaiverVaccinated.vue'
import Covid19WaiverNotVaccinated from './Covid19WaiverNotVaccinated.vue';

export default {
  components: {
    Covid19WaiverNotVaccinated,
    Covid19WaiverVaccinated,
},
  name: 'Covid19WaiverContainer',
  props: {
    msg: String
  },
  data(){
    return {
      isVaccinated: false, // initialized to false
      isNotVaccinated: false, // initialized to false
    }
  },
  computed: {
    isFormUntouched() {
      return this.isVaccinated == false &&  this.isNotVaccinated == false;
    }
  },
  methods: {
    selectVaccinated() {
      this.isVaccinated = true;
    },
    selectNotVaccinated() {
      this.isNotVaccinated = true;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 2em 0 0;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-inputs-container {
  max-width: 30em;
}
div.input-container {
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.name-input {
  width: 30em;
}
.action-container {
  display: flex;
  justify-content: space-between;
}
</style>
