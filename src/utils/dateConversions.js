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
    
    //by default in HTML, if a checkbox is checked, the data is submitted with the value "on"; else no data for that checkbox is sent. For each checkbox, normalize value to true or false. 
    normalizedData.abbreviated ?  normalizedData.abbreviated = true : normalizedData.abbreviated = false
    normalizedData.displayYear ?  normalizedData.displayYear = true : normalizedData.displayYear = false

    console.log(normalizedData)

    return normalizedData
}

function calculateMarkerDays(day, month, year) {
    // calculate the Ides and Nones for the input month, and the Kalends for the next month
    const markerDays = {}

    // set the Ides and Nones for the month
    switch(month) {
        // March, July, October, May, the Ides are on the 15th day
        case 3: 
        case 5: 
        case 7: 
        case 10: 
            markerDays.ides = 15;
            markerDays.nones = 7;
            break;
        default: 
            markerDays.ides = 13;
            markerDays.nones = 5;
            break;
    }

    // set the Kalends for the next month; for easier math, this is the days in the month + 1
    switch(month) {
        // 30 days have Sep, Apr, Jun, and Nov
        case 4:
        case 6: 
        case 9: 
        case 11: 
            markerDays.kalends = 31;
            break;
        // The Roman calendar inserts the leap day after Feb 24th - only dates after that will be affected
        case 2: 
            markerDays.kalends = (year % 4 === 0) && day > 24 ? 30 : 29
            break;
        default: 
            markerDays.kalends = 32;
            break;
    }
    return markerDays
}

function convertToRomanDate(day, month, year) {
    //create a dictionary of months with accusative and ablative forms
    const months = {
        1: { acc: "Ianuarias", abl: "Ianuariis" }, 
        2: { acc: "Februarias", abl: "Februariis" } ,
        3: { acc: "Martias", abl: "Martiis"},  
        4: { acc: "Apriles", abl: "Aprilibus"},  
        5: { acc: "Maias", abl: "Maiis"},
        6: { acc: "Iunias", abl: "Iuniis"}, 
        7: { acc: "Iulias", abl: "Iuliis"},
        8: { acc: "Augustas", abl: "Augustis"},
        9: { acc: "Septembres", abl: "Septembribus"},
        10: { acc: "Octobres", abl: "Octobribus"},
        11: { acc: "Novembres", abl: "Novembribus"},
        12: { acc: "Decembres", abl: "Decembribus"},    
    }

    // calculate the Ides and Nones for the input month, and the Kalends for the next month
    const markerDays = calculateMarkerDays(day, month, year)

    //calculate the Roman date string (month + day)
    let romanDate
    switch(day) {
        //start with the days that fall on the Kalends, Ides, Nones
        case 1: 
            romanDate = `Kalendis ${months[month].abl}`;
            break;
        case markerDays.nones: 
            romanDate =`Nonis ${months[month].abl}`;
            break;
        case markerDays.ides: 
            romanDate =`Idibus ${months[month].abl}`;
            break;

        // Other days will countdown to the next epoch
		default:
            //calculate the countdown and start the romanDate string
            let countdown
            if (day < markerDays.nones) {
                countdown = markerDays.nones - day + 1  // countdown Roman style, with inclusive counting
                romanDate =`Nonas ${months[month].acc}`;    // start the romanDate string
            } else if (day < markerDays.ides) {
                countdown = markerDays.ides - day + 1  // countdown Roman style
                romanDate =`Idus ${months[month].acc}`;    // start the romanDate string
            } else {
                // if the date is after the Ides, count down to the Kalends of the next month
                countdown = markerDays.kalends - day + 1  // countdown Roman style
                romanDate =`Kalendas ${months[month === 12 ? 1 : month + 1].acc}`;    // start the romanDate string
            }

            // pridie (the day before) is 2 days before the marker day 
            if (countdown === 2) { 
                romanDate = `pridie ${romanDate}`
            } else {
                const romanNumeralDay = integerToRomanNumeral(countdown).toLowerCase()

                // normally we just count down, but Feb 25 of a leap year is weird- it's called "ante diem bis vi Kalendas Martias..."
                const leapYearModifier = (year % 4 === 0) && day === 25 ? 'bis ' : ''

                romanDate = `ante diem ${leapYearModifier}${romanNumeralDay} ${romanDate}`
            }  
            break;
    }
    return romanDate
}

function formatYear(year, era, displayAUCYear, displaySecularNotation) {
    // look at how the old form deals with BC/AD => AC (ante Christum) / AD (anno Domini); I've also heard post Christum natum
    //maybe you want to add a link to an info section about choices and alternatives, as well as info on changing calendars throughout history, how this calculator arrives at its calculations

}

function convertEra(era) {

}

function abbreviateDate() {

}

export default function outputFormattedRomanDate(formData) {
    const { abbreviated, 
            day, 
            displayYear, 
            era, 
            month, 
            year, 
            yearDisplayOption } = normalizeFormData(formData)
    
    const romanDate = convertToRomanDate(day, month, year)
    console.log(romanDate)

}

