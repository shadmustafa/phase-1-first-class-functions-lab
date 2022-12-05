// Code your solution in this file!
function returnFirstTwoDrivers (driverList) {
    return driverList.slice(0, 2)
};

function  returnLastTwoDrivers(driverList){

    return driverList.slice(-2);

}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(mult) {
    return function (fare) {
       return fare*mult
    }
}

const fareDoubler = createFareMultiplier(2);

// function fareDoubler(){
//     createFareMultiplier(2)
// }
const fareTripler = createFareMultiplier(3);

  //function fareTripler(){
    //     createFareMultiplier(3)
    // }
function selectDifferentDrivers (arrayOfDrivers, funcArea) { 
    return funcArea (arrayOfDrivers)

}
