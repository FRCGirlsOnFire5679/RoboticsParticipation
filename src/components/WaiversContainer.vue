<template>
    <form>
      <!-- Form Example (submitting currently does nothing with the data) -->
      <h2 v-if="isFormUntouched">Please select who is completing these waivers to start:</h2>
        <section v-if="isFormUntouched">
          <div class="action-container">
            <button @click.prevent="selectAmParentGuardian">I am the Parent / Guardian of a Participant</button>
            <button @click.prevent="selectAmOver18Participant">I am a Participant who is 18 years old or older</button>
            
          </div>
        </section>
        <section v-if="!isFormUntouched">
          <MainWaiverParentGuardian v-if="isParentGuardian && step == 1" @next="handleNextEvent" />
          <MainWaiverOver18Participant v-if="isOver18Participant" />
          <MainWaiverAgreement v-if="agreeAndSubmit"/>
          <Covid19WaiverContainer v-if="step == 2"/>
        </section>
    </form>
    
</template>

<script>
import MainWaiverParentGuardian from './MainWaiverParentGuardian.vue'
import MainWaiverOver18Participant from './MainWaiverOver18Participant.vue';
import Covid19WaiverContainer from './Covid19WaiverContainer.vue'
import MainWaiverAgreement from './MainWaiverAgreement.vue'
export default {
  components: {
    Covid19WaiverContainer,
    MainWaiverParentGuardian,
    MainWaiverOver18Participant,
    MainWaiverAgreement
},
  name: 'WaiversContainer',
  props: {
    msg: String
  },
  data(){
    return {
      isParentGuardian: false, // initialized to false
      isOver18Participant: false, // initialized to false
      agreeAndSubmit: false, 
      step: 1
    }
  },
  computed: {
    isFormUntouched() {
      return this.isParentGuardian == false &&  this.isOver18Participant == false && this.agreeAndSubmit == false;
    }
  },
  methods: {
    selectAmParentGuardian() {
      this.isParentGuardian = true;
    },
    selectAmOver18Participant() {
      this.isOver18Participant = true;
    },
      selectAgreeAndSubmit() {
      this.agreeAndSubmit = false;
      },
    handleNextEvent() {
      this.step = 2;
    }
    },

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
