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
            <input type="text" v-model.trim="participantEmail"
                    required
                    id="main-waiver-participant-email"
                    name="main-waiver-participant-email" />
        </div>
        <div class="input-container">
            <label for="main-waiver-emergency-contact-name">Emergency contact name (required)</label>
            <input type="text" v-model.trim="emergencyContact"
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
        <MainWaiverAgreement :disableBtn="disableBtn"></MainWaiverAgreement>
        <div class="checkbox-container">
            <input type="checkbox" v-model="isWaiverAgreedTo"
                    required
                    id="main-waiver-agree-to-waiver"
                    name="main-waiver-agree-to-waiver" />
            <label for="main-waiver-agree-to-waiver">Participant has read this document and understands that this Waiver and Release of Liability includes a waiver of the right to make injury claims that is intended to be legally binding. By checking this box, Participant agrees to this Waiver and Release of Liability.(required)</label>
            
        </div>
        
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
      participantEmail: '',
      dob: '',
      signerEmail: '',
      isWaiverAgreedTo: false,
      emergencyContact: '',
      emergencyPhone: '',
      disableBtn: false,    
  }
},
 methods: {
    handleSubmitEvent(e) {
      this.disableBtn = true;
      e.preventDefault();
      console.log('participantName::', this.participantName);
      console.log('participantEmail::', this.participantEmail);
      console.log('dob::', this.dob);
      console.log('signerEmail::', this.signerEmail);
      console.log('isWaiverAgreedTo::', this.isWaiverAgreedTo);
      console.log('emergencyContact::', this.emergencyContact);
      console.log('emergencyPhone::', this.emergencyPhone);

      let data = {
        particpantName: this.participantName,
        participantEmail: this.participantEmail,
        dob: this.dob,
        signerEmail: this.signerEmail,
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
