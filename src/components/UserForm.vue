<template>
  <div class="form">
    <header>User Form</header>
    <input v-model="userForm.email" placeholder="Email Id">
    <input v-model="userForm.password" placeholder="Password">
    <div class="button">
        <button v-on:click="formSubmit">Add</button>
    </div>
<div>

</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapState } from 'vuex'
import UserCell from '@/components/UserCell.vue'
import { GET_USER_LIST, SAVE_USER } from '@/store/types/actions'

export default Vue.extend({
  name: 'UserForm',

  computed: {
    ...mapState({
      userForm: (state: any) => state.user.form
    })
  },
  methods: {
    formSubmit () {
      this.$store.dispatch(SAVE_USER)
    }
  }
})
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  header {
      padding: 0.5rem 0rem;
  }
  input {
      padding: 0.5rem;
      margin: 0.5rem 0rem;

  }
}
.button {
    padding: 0.5rem;
    display: flex;
    justify-content: flex-end;
    button {
        padding: 0.3rem 0.75rem;
        border-radius: 0.2rem;
        border: none;
        cursor: pointer;
        background: #4aecc6;
    }
}
</style>
