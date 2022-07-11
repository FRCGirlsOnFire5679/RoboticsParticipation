<template>
  <div class="robotics-welcome">
    <h1>{{ msg }}</h1>
      <section  class="pseudo-navigation">
        <input type="button" @click="showSignWaiver" value="Complete Waiver"/>
        <input type="button" @click="showSignIn" value="Sign In"/>
        <input type="button" @click="showSignOut" value="Sign Out"/>
      </section>
      <form v-if="shouldShowSignWaiver">
        <!-- Form Example (submitting currently does nothing with the data) -->
        <h2>Please Complete the Waiver</h2>
        (main waiver placeholder)
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
         <h2>Please Complete the Covid-19 Waiver</h2>
        (main waiver placeholder)
        <section class="form-inputs-container">
           <div class="input-container">
              <label for="main-waiver-covid-19-vacination">Fully vaccinated attestation OR Not fully vaccinated</label>
              <br><br>
              <input type="radio" value="vaccinated" id="vaccinated"/>
              <label for="vaccinated" >Vaccinated</label>
              <br><br>
              <input type="radio" value="notVaccinated" id="notVaccinated"/>
              <label for="notVaccinated" >Not Vaccinated</label>
                     </div>
                     <br><br>
                      <div class="input-container">
              <label for="main-waiver-agree-to-testing-requirements">Agree to abide by testing requirements instead (required) </label>
              <input type="checkbox" v-model="testing"
                     id="main-waiver-agree-to-testing-requirements"
                     name="main-waiver-agree-to-testing-requirements" />
          </div>
          <br><br>
                     <div class="input-container">
              <label for="main-waiver-agree-to-abide-by-policy">Agree to abide by policy, or agree on behalf of under-18 child participant (required)</label>
              <input type="checkbox" v-model="vpolicy"
                     id="main-waiver-agree-to-abide-by-policy"
                     name="main-waiver-agree-to-abide-by-policy" />
          </div>
          <br><br>
          <div class="input-container">
              <label for="main-waiver-participant-name">Participant Name (required)</label>
              <input type="text" v-model.trim="participantNamet"
                     required
                     id="main-waiver-participant-name"
                     name="main-waiver-participant-name" />
          </div>
          <br><br>
          <div class="input-container">
              <label for="main-waiver-parent-and-guardian-name">Parent/Guardian name (required)</label>
              <input type="text" v-model.trim="guardianNamet"
                     required
                     id="main-waiver-parent-and-guardian-name"
                     name="main-waiver-parent-and-guardian-name" />
          </div>
          <br><br>
          <div class="input-container">
              <label for="main-waiver-date">Date  (can get without input)</label>
              <input type="text" v-model.trim="datet"
                     id="main-waiver-date"
                     name="main-waiver-date" />
          </div>

              Participant Email, or If participant is under 18: parent/guardian email (required) <br />
              Agree to waiver (required) <br />
              Name of person agreeing (required) <br />
              Date (can get without input) <br />
              Emergency contact name (required) <br />
              Emergency contact phone (required) <br />
        </section>

        (COVID-19 waiver placeholder)
              (radio) Fully vaccinated attestation OR Not fully vaccinated, but agree to abide by testing requirements instead (required)
              (checkbox) Agree to abide by policy, or agree on behalf of under-18 child participant (required)
              Participant name (required)
              Parent/Guardian name (required)
              Date (can get without input)
      </form>
      <form v-if="shouldShowSignIn">
        <!-- Form Example (submitting currently does nothing with the data) -->
        <h2>Please Sign in / Sign up</h2>
        <section class="form-inputs-container">
          <div class="input-container">
            <label for="full-name">Full Name (required; use the name you used for sign up):
            </label>
            <input type="text"
                    required
                    class="name-input"
                    id="full-name"
                    name="full-name" />
          </div>
          <div class="input-container">
            <label for="team-name">  
              Team Name (optional; e.g. "5679" or "Girls on Fire 5679"):
            </label>
            <input type="text"
                  class="name-input"
                  id="team-name"
                  name="team-name" />
          </div>
          <div class="action-container">
            <input type="button"
                   value="Go To Sign Out"
                   @click="showSignOut" />
            <input type="submit"
                   value="Submit" />
          </div>
        </section>
      </form>
      <form v-if="shouldShowSignOut">
        <!-- Form Example (submitting currently does nothing with the data) -->
        <h2>Please Sign out</h2>
        <section class="form-inputs-container">
          <div class="input-container">
            <label for="full-name">Full Name (required; use the name you used for sign in):
            </label>
            <input type="text"
                    required
                    class="name-input"
                    id="full-name"
                    name="full-name" />
          </div>
          <div class="action-container">
            <input type="button"
                   value="Go To Sign In"
                   @click="showSignIn" />
            <input type="submit"
                   value="Submit" />
          </div>
        </section>
      </form>  
  </div>
</template>

<script>
export default {
  name: 'RoboticsParticipation',
  props: {
    msg: String
  },
  data(){
    return {
      participantName: '',
      guardianName: '',
      dob:'',
      participantEmail:'',
      waiverAgreement:'',
      name:'',
      date:'',
      emergencyContact:'',
      emergencyPhone:'',
      vaccinated:'',
      notVaccinated:'',
      testing:'',
      policy:'',
      participantNamet: '',
      guardianNamet: '',
      datet:'',
      // initialized to false
      shouldShowSignIn: false,
      // initialized to false
      shouldShowSignOut: false,
      // initialized to false
      shouldShowSignWaiver: false
          }
  },
  methods: {
    showSignOut() {
      this.shouldShowSignIn = false;
      this.shouldShowSignOut = true;
      this.shouldShowSignWaiver = false;
    },
    showSignIn() {
      this.shouldShowSignIn = true;
      this.shouldShowSignOut = false;
      this.shouldShowSignWaiver = false;
    },
    showSignWaiver() {
      this.shouldShowSignIn = false;
      this.shouldShowSignOut = false;
      this.shouldShowSignWaiver = true;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pseudo-navigation {
  display: flex;
  justify-content: space-around;
}
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
