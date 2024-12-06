const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to calculate the total
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

module.exports = { totalBatteries };

// Example usage
console.log(totalBatteries); //calculates the total to equal 31
