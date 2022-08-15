// Code your solution in this file!
const distanceFromHqInBlocks = (value) => {
    return Math.abs (value - 42)
}

const distanceFromHqInFeet = (value) => {
    return distanceFromHqInBlocks(value) * 264
}

const distanceTravelledInFeet = (start,destination) => {
    const difference = destination-start
return Math.abs (difference * 264)
}

const calculatesFarePrice = (start,destination) => {
    const difference = destination-start
    const distance = Math.abs (difference * 264)
    if (distance <= 400) {
        return 0
    }
    else if (distance > 400 && distance <=2000) {
        return ((distance -400) * 2)/100
    }
    else if (distance > 2000 && distance <=2500) {
        return 25
    }
    else {
        return "cannot travel that far"
    }
}