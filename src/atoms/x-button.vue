<style scoped>
  @import '../main.css';

  button {
    cursor: pointer;
    width: auto;
    text-align: center;
    padding: .7rem 2rem;
    color: #555;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    transition: background-color .2s;
    margin: .2rem 0;
    font-size: .9rem;
    font-weight: bold;
  }
  button:hover {
      color: #333;
      background-color: #ddd;
      border-color: #bbb;
  }

  .primary {
    color: #fff;
    background-color: var(--interactive-color);
    border-color: var(--interactive-color-highlight);
  }

  .primary:hover {
    color: #fff;
    background-color: var(--interactive-color-highlight);
  }
</style>

<template>
  <button><slot>{{this.$attrs && this.$attrs.value}}</slot></button>
</template>
