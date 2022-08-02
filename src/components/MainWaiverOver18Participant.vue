<template>
    <form ref="form" @submit="handleSubmitEvent">
      <!-- Form Example (submitting currently does nothing with the data) -->
      <h2>Waiver and Release of Liability</h2>
      <section class="form-inputs-container">
        <div class="input-container">
            <label for="main-waiver-participant-name">Participant Name (required)</label>
            <input type ="text" v-model.trim="participantName"
                    required 
                    id="main-waiver-participant-name"
                    name="main-waiver-participant-name" />
        </div>
        <div class="input-container">
            <label for="main-waiver-participant-email">Participant email (required)</label>
            <input type="text" v-model.trim="signerEmail"
                    required
                    id="main-waiver-participant-email"
                    name="main-waiver-participant-email" />
        </div>
        <div class="input-container">
            <label for="main-waiver-emergency-contact-name">Emergency contact name (required)</label>
            <input type="text" v-model.trim="emergencyContactName"
                    required
                    id="main-waiver-emergency-contact-name"
                    name="main-waiver-emergency-contact-name" />
        </div>
        <div class="input-container">
            <label for="main-waiver-emergency-contact-phone">Emergency contact phone (required)</label>
            <input type="text" v-model.trim="emergencyPhone"
                    required
                    id="main-waiver-emergency-contact-phone"
                    name="main-waiver-emergency-contact-phone" />
        </div>       
        <MainWaiverAgreement :isWaiverAgreedTo="isWaiverAgreedTo" :disableBtn="disableBtn"></MainWaiverAgreement>
      </section>
    </form>
</template>

<script>
import MainWaiverAgreement from './MainWaiverAgreement.vue'
import callSheetAPI from '../utils/api.js'

export default {
  components: {
    MainWaiverAgreement
  },
  name: 'MainWaiverContainer',
  props: {
    msg: String
  },
  emits: ['next'],
  data(){
    return {
     participantName: '',
      signerEmail: '',
      dob: '',
      isWaiverAgreedTo: false,
      emergencyContactName: '',
      emergencyPhone: '',
      disableBtn: false,    
  }
},
 methods: {
    handleSubmitEvent(e) {
      this.disableBtn = true;
      e.preventDefault();
      console.log('participantName::', this.participantName);
      console.log('signerEmail::', this.signerEmail);
      console.log('dob::', this.dob);
      console.log('isWaiverAgreedTo::', this.isWaiverAgreedTo);
      console.log('emergencyContact::', this.emergencyContactName);
      console.log('emergencyPhone::', this.emergencyPhone);

      let data = {
        participantName: this.participantName,
        signerEmail: this.signerEmail,
        dob: this.dob,
        isWaiverAgreedTo: this.isWaiverAgreedTo,
        emergencyContactName: this.emergencyContactName,
        emergencyPhone: this.emergencyPhone,
      };
      console.log(data);
      callSheetAPI(data);

      this.$emit('next');
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
  max-width: 50em;
}
div.input-container {
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
div.checkbox-container {
  display: flex;
  text-align: left;
  align-items: flex-start;
}
</style>
