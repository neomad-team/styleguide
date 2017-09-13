<style scoped>
input,
textarea {
  border: 1px solid #aaa;
  border-radius: .2rem;
  padding: .7rem 1rem;
  font: inherit;
  color: inherit;
  transition: border-color .2s;
}

input:focus,
textarea:focus {
  border-color: #555;
}

form > div {
  margin: 1rem 0;
  display: flex;
  align-items: center;
}
form > div > label {
  min-width: 5rem;
  padding-right: 1rem;
}
input,
button,
textarea, {
  display: inline-block;
  min-width: 20rem;
}

form input[type=submit] {
  /* label width to align with fields */
  margin-left: 6rem;
}


form.login {
  max-width: 20rem;
}
form.login label + input {
  flex-grow: 1;
}
form.login [type=submit] {
  width: 100%;
  margin-left: 0;
}
form.login hr {
  border-top: 0;
  border-bottom: 1px solid #ccc;
  margin: 1rem 0;
}
</style>

<template><form><slot></slot></form></template>
