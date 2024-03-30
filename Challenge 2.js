//Create a function for calculating demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

//initiliaze the constants
    if (speed < speedLimit + kmPerDemeritPoint) {
        console.log("Ok");
        return;
    }
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > maxDemeritPoints) {
        console.log("License suspended");
    } else {
        console.log("Points: " + demeritPoints);
    }
}

// Different examples of the function in action using different speeds
calculateDemeritPoints(40); // Output: Ok
calculateDemeritPoints(90); // Output: Points: 4
calculateDemeritPoints(110); // Output: Points: 8
calculateDemeritPoints(75); // Output: Points: 1