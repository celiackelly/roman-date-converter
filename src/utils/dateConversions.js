//max integer you can express in Roman numerals without a line over is 3999
//make sure you validate against floats and 0, negative nums
function integerToRomanNumeral(num) {
    const map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = '';
    
    for (let key in map) {  
      const repeatCounter = Math.floor(num / map[key]);
      
      if (repeatCounter !== 0) {
        result += key.repeat(repeatCounter);
      }
      
      num %= map[key];
      
      if (num === 0) return result;
    }
    
    return result;
}

function normalizeFormData(formData) {
    const formJson = Object.fromEntries(formData.entries());
    const normalizedData = { ...formJson }

    normalizedData.day = Number(normalizedData.day)
    normalizedData.month = Number(normalizedData.month)
    normalizedData.year = Number(normalizedData.year)
    
    //by default in HTML, if a checkbox is checked, the data is submitted with the value "on"; else no data for that checkbox is sent
    normalizedData.displayYear ?  normalizedData.displayYear = true :     normalizedData.displayYear = false
    normalizedData.displayAUCYear ?   normalizedData.displayAUCYear = true :   normalizedData.displayAUCYear = false
    normalizedData.abbreviated ?  normalizedData.abbreviated = true : normalizedData.abbreviated = false

    return normalizedData
}

function convertToRomanDate(day, month) {

}

function formatYear(year, era, displayAUCYear = false) {
    // look at how the old form deals with BC/AD => AC (ante Christum) / AD (anno Domini); I've also heard post Christum natum
    //maybe you want to add a link to an info section about choices and alternatives

}

function abbreviateDate() {

}

// export default function outputFormattedRomanDate(day, month, year, era, abbreviated = false, displayYear = false, displayAUCYear = false) {
//     console.log('hey, this is going to be a formatted Roman date!')
// }

export default function outputFormattedRomanDate(formData) {
    const { abbreviated, day, displayAUCYear, displayYear, era, month, year } = normalizeFormData(formData)
    
    console.log('hey, this is going to be a formatted Roman date!')
    console.log(abbreviated)
}
