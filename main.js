$car = document.querySelector('img');
var car = {
  heading: 'east',
  x: 0,
  y: 0
}
var intervalId = null;

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
      break;
    case ' ':
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      } else {
        intervalId = setInterval(goCar, 16);
      }

  }
  console.log(car);
}

function goCar() {
  switch (car.heading) {
    case 'east':
      car.x = car.x + 4;
      $car.style.left = car.x + 'px'
      break;
    case 'west':
      car.x -= 4;
      $car.style.left = car.x + 'px'
      break;
    case 'south':
      car.y += 4;
      $car.style.top = car.y + 'px';
      break;
    case 'north':
      car.y -= 4;
      $car.style.top = car.y + 'px';
      break;
  }
  if (car.y < 0 || car.y > window.innerHeight ||
    car.x < 0 || car.x > window.innerWidth ) {
     clearInterval(intervalId);
  }
  console.log(car);
}
