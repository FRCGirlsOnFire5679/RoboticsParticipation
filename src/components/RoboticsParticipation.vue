<template>
  <div class="robotics-welcome">
    <h1>{{ msg }}</h1>
      <section  class="pseudo-navigation">
        <input type="button" @click="showSignWaiver" value="Complete Waiver"/>
        <input type="button" @click="showSignIn" value="Sign In"/>
        <input type="button" @click="showSignOut" value="Sign Out"/>
      </section>
      <WaiversContainer v-if="shouldShowSignWaiver" />
      <SignIn v-if="shouldShowSignIn" />
      <SignOut v-if="shouldShowSignOut" />
  </div>
</template>

<script>
import SignIn from './SignIn.vue'
import SignOut from './SignOut.vue'
import WaiversContainer from './WaiversContainer.vue'
export default {
  components: {
    SignIn,
    SignOut,
    WaiversContainer
  },
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
      // initialized to true - i.e. show by default
      shouldShowSignIn: true,
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
</style>
