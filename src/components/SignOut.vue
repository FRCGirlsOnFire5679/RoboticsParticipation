<template>
  <form>
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
                    name="full-name"
                    v-model="signOutName" />
          </div>
        </section>
        <button class="primary-action">Submit</button>
      </form>  
</template>

<script>
export default {
  name: 'SignOut',
  data(){
    return {
      signOutName: ''
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
