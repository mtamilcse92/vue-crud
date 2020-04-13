<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Users">Users</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
}

#nav {
  padding: 30px 0px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0.25rem 0.5rem;
    text-decoration: none;

    &.router-link-exact-active {
      background: #4aecc6;
      color: #000;
      border-radius: 0.25rem;
    }
  }
}
</style>
