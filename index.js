// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let farePrice;

  if (distance <= 400) {
    farePrice = 0;
  } else if (distance > 400 && distance <= 2000) {
    farePrice = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    farePrice = 25;
  } else {
    farePrice = "cannot travel that far";
  }

  return farePrice;
}
