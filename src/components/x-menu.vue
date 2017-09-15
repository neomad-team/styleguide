<style scoped>
  #host {
    position: relative;
    display: inline-block;
    align-items: center;
  }

  #host > a {
    padding: 3px 15px;
    text-decoration: none;
  }

  img {
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #888 ;
    border-radius: 50%;
  }

  #host nav {
    display: none;
    top: 2rem;
    right: -.8rem;
    position: absolute;
    margin: 0;
    padding: 1rem 2rem;
    background-color: #fff;
    box-shadow: 0 0 6px rgba(50, 50, 50, .2);
    border-radius: 3px;
    transition: all .3s;
    opacity: 1;
  }

  #host nav::before {
    content: '';
    position: absolute;
    top: -.5rem;
    right: 1rem;
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    box-shadow: -2px -2px 1px rgba(100, 100, 100, .1);
    transform: rotate(45deg);
  }

  #host nav.active {
    display: block;
  }

  #host nav a {
    display: block;
    text-decoration: none;
    padding: .5rem 0;
  }
</style>

<template><nav id=host><slot></slot></nav></template>

<script>
  export default {
    mounted() {
      const menu = this.$el.querySelector('nav')
      this.$el.querySelector('img').addEventListener('click', _ => {
        menu.classList.toggle('active')
      })
    }
  }
</script>
