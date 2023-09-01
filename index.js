const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const batteries = (accumulator, item) => {
    return accumulator + item
}

let totalBatteries = batteryBatches.reduce(batteries, 0)