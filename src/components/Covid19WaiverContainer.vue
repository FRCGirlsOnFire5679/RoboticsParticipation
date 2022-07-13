<template>
    <form>
      <!-- Form Example (submitting currently does nothing with the data) -->
      <h2>COVID-19 Policy</h2>
      <h3>Masks</h3>
      <ul>
        <li>Requirement for masks will be dictated by CDC (United States Centers for Disease Control and Prevention) recommendations, FIRST (For Inspiration and Recognition in Science and Technology) policy, local policy, and museum policy, deferring to whichever requirement is most strict</li>
      <br>
      <li>In cases when masks are required</li>
      <br>
          <li>N95/KN95/KF94 masks are recommended</li>
          <br>
          <li>Masks should be tightly woven and well-fitting — they must fit—and stay—over your nose and mouth, with no gaps on the sides, top or bottom</li>
          <br>
          <li>Masks must not have exhalation valves or vents</li>
          <br>
          <li>Staff and mentors may require you to replace your mask with another at their discretion</li>
          <br>
          <li>Things that do NOT qualify as adequate protection:</li>
          <br>
          <li>Face shields alone (can be worn for added protection above and beyond mask)</li>
          <br>
          <li>Bandanas/scarves</li>
          <br>
          <li>Ski masks/balaclavas</li>
          <br>
          <li>Neck gaiters</li>
          <br>
          <li>Masks with visible holes, including mesh or lace</li>
          <br>
          <li>If wearing a cloth mask, consider double masking</li>
      </ul>
      <section class="form-inputs-container">
        <section>
          <p>policy text</p>
          <div class="waiver__input-container">
            <input type="checkbox" v-model="agreeToCovid19Waiver"
                    id="agree-to-covid19-waiver"
                    name="agree-to-covid19-waiver"/>
            <label for="agree-to-covid19-waiver">I agree to abide by this full policy (or I agree as a parent/guardian on behalf of a child participant)</label>
          </div>
          <div class="waiver__input-container">
            <input type="radio" v-model="vaccinationStatus"   value="vaccinated"
              id="attest-to-fully-vaccinated"
              name="attest-to-fully-vaccinated"/>
            <label for="attest-to-fully-vaccinated">I have been fully vaccinated, and boosted if eligible (or I attest as a parent/guardian that my child participant has been fully vaccinated and boosted)</label>
          </div>
          <div class="waiver__input-container">
            <input type="radio" v-model="vaccinationStatus" value="unvaccinated"
              id="attest-to-testing-requirements"
              name="attest-to-testing-requirements"/>
            <label for="attest-to-testing-requirements">I have not been both fully vaccinated, and boosted if eligible, at this time, and agree to abide by testing requirements (or I attest as a parent/guardian that my child participant has not been both fully vaccinated and boosted at this time, and agree to abide by testing requirements)</label>
          </div>
             
        </section>
      
      </section>
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
      agreeToCovid19Waiver: false,
      vaccinationStatus: ''
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
div.waiver__input-container {
  margin: 1em;
  display: flex;
  align-items: flex-start;
  text-align: left;
}
.action-container {
  display: flex;
  justify-content: space-between;
}
</style>
