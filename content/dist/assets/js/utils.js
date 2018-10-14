window.onload = _ => {
  const menu = document.querySelector('#menu')
  const avatar = document.querySelector('#avatar-menu')
  avatar.addEventListener('click', _ => {
    menu.classList.toggle('active')
  })

  const address = document.querySelector('[data-latlng]')
  address && coordinatesToAddress(address)
}

function coordinatesToAddress (address) {
  const latlng = address.dataset.latlng
  const [lat, lng] = latlng.split(',')
  return fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`, {
    mode: 'cors'
  })
  .then(response => response.json())
  .then(dataSet => {
    const data = dataSet.address
    data['area'] = data.town || data.village || data.city
    address.textContent = `${data.area}, ${data.country}`
  })
}
