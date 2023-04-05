import React from 'react'

export default function OptionsFieldset({ 
    isBeforeRomeFounded, 
    isDisplayYearChecked, 
    handleDisplayYearChange,
    yearDisplayOption,
    handleYearDisplayOptionChange
}) {

    const yearDisplayOptionsRadio = (
        <>
            <label>
                <input required 
                    type="radio" 
                    name="yearDisplayOption" 
                    value="secularNotation"
                    checked={yearDisplayOption === "secularNotation"}
                    onChange={handleYearDisplayOptionChange}></input>
                display year in secular notation
            </label>
            <label>
                <input required 
                    type="radio" 
                    name="yearDisplayOption" 
                    value="christianNotation"
                    checked={yearDisplayOption === "christianNotation"}
                    onChange={handleYearDisplayOptionChange}></input>
                display year in Christian notation
            </label>
            <label>
                <input required 
                    type="radio" 
                    name="yearDisplayOption" 
                    value="AUCNotation"
                    checked={yearDisplayOption === "AUCNotation"}
                    onChange={handleYearDisplayOptionChange}
                    disabled={isBeforeRomeFounded || !isDisplayYearChecked}>
                </input>
                display year <span className="italics">ab urbe condita</span>
            </label>
        </>
    )  

  return (
    <fieldset className="options-fieldset">
        {/* add a legend */}
        <label>
            <input type="checkbox" name="displayYear" 
                onChange={handleDisplayYearChange}
                checked={isDisplayYearChecked}></input>
            display year
        </label>
        {isDisplayYearChecked ? yearDisplayOptionsRadio : null}
    </fieldset>
  )
}
