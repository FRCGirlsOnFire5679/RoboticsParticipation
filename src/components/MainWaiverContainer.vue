<template>
    <form>
      <!-- Form Example (submitting currently does nothing with the data) -->
      <h2>Please Complete the Waiver</h2>
      <section class="form-inputs-container">
        <div class="input-container">
            <label for="main-waiver-participant-name">Participant Name (required)</label>
            <input type ="text" v-model.trim="participantName"
                    required 
                    id="main-waiver-participant-name"
                    name="main-waiver-participant-name" />
        </div>
        <div class="input-container">
            <label for="main-waiver-parent-guardian-name">If participant is under 18: parent/guardian name (optional)</label>
            <input type="text" v-model.trim="guardianName"
                    id="main-waiver-parent-guardian-name"
                    name="main-waiver-parent-guardian-name" />
        </div>
        <div class="input-container">
            <label for="main-waiver-participant-date-of-birth">If participant is under 18: participant date of birth (optional)</label>
            <input type="date" v-model.trim="dob"
                    id="main-waiver-participant-date-of-birth"
                    name="main-waiver-participant-date-of-birth" />
        </div>
        <div class="input-container">
            <label for="main-waiver-parent-guardian-email">Participant Email, or If participant is under 18: parent/guardian email (required)</label>
            <input type="text" v-model.trim="participantEmail"
                    id="main-waiver-parent-guardian-email"
                    name="main-waiver-parent-guardian-email" />
        </div>
        <div class="input-container">
            <label for="main-waiver-agree-to-waiver">Agree to waiver  (required)</label>
            <input type="checkbox" v-model="waiverAgreement"
                    id="main-waiver-agree-to-waiver"
                    name="main-waiver-agree-to-waiver" />
        </div>
        <div class="input-container">
            <label for="main-waiver-name-of-person-agreeing">Name of person agreeing  (required)</label>
            <input type="text" v-model.trim="name"
                    id="main-waiver-name-of-person-agreeing"
                    name="main-waiver-name-of-person-agreeing" />
        </div>
        <div class="input-container">
            <label for="main-waiver-date">Date  (can get without input)</label>
            <input type="date" v-model.trim="date"
                    id="main-waiver-date"
                    name="main-waiver-date" />
        </div>
        <div class="input-container">
            <label for="main-waiver-emergency-contact-name">Emergency contact name  (required)</label>
            <input type="text" v-model.trim="emergencyContact"
                    id="main-waiver-emergency-contact-name"
                    name="main-waiver-emergency-contact-name" />
        </div>
        <div class="input-container">
            <label for="main-waiver-emergency-contact-phone">Emergency contact phone  (required)</label>
            <input type="text" v-model.trim="emergencyPhone"
                    id="main-waiver-emergency-contact-phone"
                    name="main-waiver-emergency-contact-phone" />
        </div>
      </section>
    </form>
</template>

<script>
export default {
  name: 'MainWaiverContainer',
  props: {
    msg: String
  },
  data(){
    return {
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
