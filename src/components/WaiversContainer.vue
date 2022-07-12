<template>
    <form>
      <!-- Form Example (submitting currently does nothing with the data) -->
      <h2 v-if="isFormUntouched">Please select who is completing these waivers to start:</h2>
      <section class="form-inputs-container">
        <section v-if="isFormUntouched">
          <div class="action-container">
            <button @click.prevent="selectAmParentGuardian">I am the Parent / Guardian of a Participant</button>
            <button @click.prevent="selectAmOver19Participant">I am a Participant who is over 18 years old</button>
          </div>
        </section>
        <section v-if="!isFormUntouched">
          <MainWaiverContainer />
          <Covid19WaiverContainer />
        </section>
      </section>
    </form>
</template>

<script>
import MainWaiverContainer from './MainWaiverContainer.vue'
import Covid19WaiverContainer from './Covid19WaiverContainer.vue'

export default {
  components: {
    MainWaiverContainer,
    Covid19WaiverContainer
  },
  name: 'WaiversContainer',
  props: {
    msg: String
  },
  data(){
    return {
      isParentGuardian: false, // initialized to false
      isOver18Participant: false, // initialized to false
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
    selectAmOver19Participant() {
      this.isOver18Participant = true;
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
