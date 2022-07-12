<template>
    <form>
      <h2>Please Complete the Covid-19 Waiver</h2>
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
            <input type="checkbox"
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
</template>

<script>
export default {
  name: 'Covid19WaiverContainer',
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
