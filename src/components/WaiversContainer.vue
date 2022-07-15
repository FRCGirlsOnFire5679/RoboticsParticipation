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
          <MainWaiverParentGuardian v-if="isParentGuardian && !isMainWaiverComplete" @main-waiver-completed="setMainWaiverComplete" /> <!-- will emit an event to the parent when waiver is complete -->
          <MainWaiverOver18Participant v-if="isOver18Participant && !isMainWaiverComplete" /> <!-- will emit an event to the parent when waiver is complete -->
          <Covid19WaiverContainer v-if="isMainWaiverComplete" /> <!--We will want to use a variable to decide show/hide based on mainWaiverCompleted -->
        </section>
    </form>
</template>

<script>
import MainWaiverParentGuardian from './MainWaiverParentGuardian.vue'
import MainWaiverOver18Participant from './MainWaiverOver18Participant.vue';
import Covid19WaiverContainer from './Covid19WaiverContainer.vue'

export default {
  components: {
    Covid19WaiverContainer,
    MainWaiverParentGuardian,
    MainWaiverOver18Participant
},
  name: 'WaiversContainer',
  props: {
    msg: String
  },
  data(){
    return {
      isParentGuardian: false, // initialized to false
      isOver18Participant: false, // initialized to false
      isMainWaiverComplete: false, // initialized to false
    }
  },
  computed: {
    isFormUntouched() {
      return this.isParentGuardian == false &&  this.isOver18Participant == false;
    }
  },
  methods: {
    selectAmParentGuardian() {
      this.isParentGuardian = true;
    },
    selectAmOver18Participant() {
      this.isOver18Participant = true;
    },
    setMainWaiverComplete() {
      this.isMainWaiverComplete = true;
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
