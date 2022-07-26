<template>
  <form>
    <!-- Form Example (submitting currently does nothing with the data) -->
    <h2>Please Sign in</h2>
    <section class="form-inputs-container">
      <div class="input-container">
        <label for="full-name">Full Name (required; use the name you used for sign up):
        </label>
        <input type="text"
                required
                class="name-input"
                id="full-name"
                name="full-name"
                v-model="signInName" />
      </div>
      <div class="input-container">
        <label for="team-name">  
          Team Name (optional; e.g. "5679" or "Girls on Fire 5679"):
        </label>
        <input type="text"
              class="name-input"
              id="team-name"
              name="team-name"
              v-model="signInTeam" />
      </div>
    </section>
    <button class="primary-action">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'SignIn',
  data(){
    return {
      signInName: '',
      signInTeam: '',
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
</style>
