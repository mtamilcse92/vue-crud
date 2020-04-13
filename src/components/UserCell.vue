<template>
  <ul>
    <div class="empty-componet" v-if="users.length === 0">No item in inventory</div>
    <li v-for="(user, x) in users" :key="x">
      <h3>{{ user.email }} </h3>
      <h3>{{ user.createdAt }}</h3>
      <div class="button">
          <button v-on:click="deleteUser(user._id)">D</button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { DELETE_USER } from '@/store/types/actions'

@Component
export default class UserCell extends Vue {
  @Prop() private users!: object[];
  deleteUser (id: string) {
    this.$store.dispatch(DELETE_USER, id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  margin: 0 10px;
  margin-bottom: 1rem;
  h3 {
    margin: 0;
    padding: 1rem;
  }
}
.empty-componet {
  display: flex;
  font-size: 1.5rem;
}
.button {
  padding-right: 1rem;
  button {
    padding: 0.3rem 0.75rem;
    border-radius: 0.2rem;
    border: none;
    cursor: pointer;
    border: none;
    background: orange;
  }
}
a {
  color: #42b983;
}
</style>
