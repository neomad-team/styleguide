window.onload = _ => {
  const menu = document.querySelector('#menu')
  const avatar = document.querySelector('#avatar-menu')
  avatar.addEventListener('click', _ => {
    menu.classList.toggle('active')
  })
}
