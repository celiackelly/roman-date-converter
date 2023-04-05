import React from 'react'

export default function DateFieldset( {month, day, year, handleMonthChange, handleDayChange, handleYearChange, isCommonEra, handleEraChange} ) {

  function calcDaysInMonth() {
    let daysCount = 31
    const isLeapYear = year % 4 === 0    //also need to add 100/400 rule 
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        daysCount = 30
    }
    if (month == 2) {
        daysCount = !isLeapYear ? 28 : 29
    } 
    return daysCount
  }  
  const dayOptions = Array.from(
    {length: calcDaysInMonth()}, 
    (_, i) => (
        <option key={i + 1} value={i + 1}>{i + 1}</option>
    )
  )

  return (
    <fieldset>
        {/* add a legend */}
        <label><span className="sr-only">Month</span>
            <select name="month" value={month} onChange={handleMonthChange}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        </label>
        <label><span className="sr-only">Day</span>
            <select name="day" value={day} onChange={handleDayChange}>
                {dayOptions}
            </select>
        </label>
        <label><span className="sr-only">Year</span>
            <input name="year" 
                type="number" min="1" max="3999" step="1" value={year} 
                onChange={handleYearChange}>
            </input>
        </label>
        <label><span className="sr-only">Era</span>
            <select name="era" 
                    value={isCommonEra ? "A.D. / C.E." : "B.C. / B.C.E."} 
                    onChange={handleEraChange}>
                <option value="A.D. / C.E.">A.D. / C.E.</option>
                <option value="B.C. / B.C.E.">B.C. / B.C.E.</option>
            </select>
        </label>
    </fieldset>
  )
}
