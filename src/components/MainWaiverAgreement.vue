<template>
<section class="waiver-text">
<!-- <p>The Participant identified above (“Participant”) desires to participate (as a team member, coach, mentor, judge, or in some other manner) in one or more Kaleideum programs (the “Programs”). As a condition of allowing Participant to participate in a Program, Kaleideum requires that the Participant (by his or her Parent/Guardian if under 18 years of age) agree to the terms of this Waiver and Release of Liability.</p>
<p>
    <ol>
        <li>Participant (and the Parent/Guardian of a Participant under 18 years of age) understands that participation in the Program will expose Participant to risks of injury including, without limitation, infection from communicable diseases such as COVID-19, bodily injury, or property damage from: building, lifting, and using electrical/mechanical robots and robot components; using tools; other participants; and other associated activities. Participant (and the Parent/Guardian of a Participant under 18 years of age) understands that Kaleideum does not select, employ, supervise or otherwise exercise authority or control over the coaches, mentors, and other participants in the Program and that the coaches, mentors, and other participants of the Programs may not be professionally trained in all aspects of the Program and that such training is not a requirement to participate in a Program. Participant, if 18 years of age or older, acknowledges and agrees that he/she is primarily responsible for his/her safety. The Parent/Guardian of a Participant under 18 years of age acknowledges and agrees that the Parent/Guardian is primarily responsible for the Participant’s safety and that the Parent/Guardian will monitor, as appropriate considering the age of the Participant and other factors, the Participant’s participation in the Program. Please see and initial attached COVID-19 health policy.
        </li>
        <br>
        <li>In consideration for Kaleideum allowing the Participant to participate in a Program, Participant (and the Parent/Guardian of a Participant under 18 years of age for and on behalf of the Participant and the Parent/Guardian) assumes all risk of such participation and hereby releases Kaleideum and (except as expressly provided below) all Kaleideum directors, officers, employees, volunteers, and agents from any and all claims for any injury of any kind to the Participant (and the Parent/Guardian) or other damages that may occur as a result of the Participant’s participation in the Program, including without limitation any injuries or other damages that may be caused by the negligence of Kaleideum or negligence of any Kaleideum director, officer, employee, volunteer, or agent (including without limitation negligently failing to adequately investigate or screen coaches, mentors, volunteers, etc.), and agrees not to file any lawsuit or otherwise make any claim against Kaleideum or any Kaleideum director, officer, employee, volunteer, or agent for any such injury or other damages. The Participant (and the Parent/Guardian of a Participant under 18 years of age) does not hereby release any claims against any individual person who intentiThe Participant identified above (“Participant”) desires to participate (as a team member, coach, mentor, judge, or in some other manner) in one or more Kaleideum programs (the “Programs”). As a condition of allowing Participant to participate in a Program, Kaleideum requires that the Participant (by his or her Parent/Guardian if under 18 years of age) agree to the terms of this Waiver and Release of Liability.
        </li> 
        <br> 
        <li>Participant (and the Parent/Guardian of a Participant under 18 years of age) understands that photographs, videotapes, and other recordings will be made of participants in the Programs, including the Participant. Participant (and the Parent/Guardian of a Participant under 18 years of age) consents to those photographs, videotapes, and other recordings and the use thereof (i) as part of a record of the Program and (ii) to promote Kaleideum and the Programs.
        </li>
    </ol>
</p> -->

<!-- <button :disable="disableBtn" @click="evaluateMainWaiver">
  {{disableBtn ? 'Please Wait...'  : 'Agree and Submit' }}
</button> -->

<button :disabled="disableBtn" type="submit">
  {{ disableBtn ? 'Please Wait...'  : 'Agree and Submit' }}
</button>


<!-- add errors that we show conditionally, depending on how evaluateMainWaiver() results -->
</section>
</template>

<script>


export default {
  emits: ['mainWaiverCompleted'],
  name: 'MainWaiverAgreement',
  props: {
    disableBtn: {
      type: Boolean,
      required: true,
    }
  },
  data(){
    return {
      

          }
  },
  methods: {
    evaluateMainWaiver() {
    //  this.mainWaiverCompleted = true;
    //  if(this.mainWaiverAgreement){
    //   this.emit('mainWaiverCompleted');
    //  }
    //  else{
    //  this.error = true;
    // }
    //   {
      this.$refs.form.submit();
    // }
      // disable button so it can't be pressed a bunch in a row
      // confirm all fields that are required have data
      // if they don't have data, then show an error
      // if they do have data, "submit" that data for saving
      // if they do have data, also this.$emit('mainWaiverCompleted')
    }
  }
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.waiver-text {
  text-align: left;
}
</style>
