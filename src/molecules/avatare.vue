<style>
  img {
    background: red;
    width: 100px;
    height: 100px;
  }
</style>
<template>
  <div>
    This is my picture: <slot name=picture></slot>
    Do you like it?
    then click on my link: <slot name=link></slot>
    Make it clickable?
    <slot name=link>
      <slot name=picture></slot>
    </slot>

    <hr>
    <p>des trucs ici</p>
  </div>
</template>
