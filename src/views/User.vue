<template>
  <div class="user-page">
    <UserForm />
    <UserCell v-bind:users="list" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import UserCell from '@/components/UserCell.vue'
import UserForm from '@/components/UserForm.vue'
import { GET_USER_LIST } from '@/store/types/actions'

export default Vue.extend({
  name: 'User',
  components: {
    UserCell,
    UserForm
  },
  mounted () {
    this.$store.dispatch(GET_USER_LIST)
  },
  computed: {
    ...mapState({
      list: (state: any) => state.user.list
    })
  }
})
</script>

<style lang="scss">
.user-page {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  width: 50vw;
}
</style>
