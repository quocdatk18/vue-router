<template>
  <nav>
    <h1>my vue router</h1>
    <ul class="nav-link">
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/product">product</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
name:"my-navbar"
}
</script>

<style scoped lang="scss">
nav{
  background: #333;
  color:#fff;
  text-align: center;
  padding:0.8rem;
}
.nav-link{
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  li{
text-transform: uppercase;
a{
    color: #fff;
    text-decoration: none;
    &:hover{
    color: rgb(83, 203, 250);
}
}

  }
}
</style>