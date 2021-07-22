$car = document.querySelector('img');
var car = {
  heading: 'east',
  x: 0,
  y: 0
}

document.addEventListener('keydown', handleKey);

function handleKey(event) {
  console.log(event);
  switch (event.key) {
    case 'ArrowRight':
      car.heading = 'east';
      $car.className = '';
      break;
    case 'ArrowLeft':
      car.heading = 'west';
      $car.className = 'west';
      break;
    case 'ArrowDown':
      car.heading = 'south';
      $car.className = 'south';
      break;
    case 'ArrowUp':
      car.heading = 'north';
      $car.className = 'north';
  }
  console.log($car);
}

function goCar(heading) {
  switch (heading) {
    case 'east':
      car.x += 10;
    case 'west':
      car.x -= 10;
      $car.style.left = car.x + 'px'
      return;
    case 'south':
      car.y += 10;
    case 'north':
      car.y -= 10;
      $car.style.top = car.y + 'px';
      return;
  }
}
