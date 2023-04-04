import React  from 'react'

export default function OptionsFieldset({ 
    isBeforeRomeFounded, 
    isDisplayYearChecked, 
    handleDisplayYearChange,
    isDisplayAUCChecked, 
    handleDisplayAUCChange, 
    isSecularNotationChecked, 
    handleSecularNotationChange
}) {

  return (
    <fieldset className="options-fieldset">
        {/* add a legend */}
        <label>
            <input type="checkbox" name="abbreviated"></input>
            abbreviated
        </label>
        <label>
            <input type="checkbox" name="displayYear" 
                onChange={handleDisplayYearChange}
                checked={isDisplayYearChecked}></input>
            display year
        </label>
        <label>
            <input type="checkbox" name="displaySecularNotation" 
                checked={isSecularNotationChecked}
                onChange={handleSecularNotationChange}
                disabled={!isDisplayYearChecked}>
            </input>
            display year in secular notation
        </label>
        <label>
            <input type="checkbox" name="displayAUCYear" 
                checked={isDisplayAUCChecked}
                onChange={handleDisplayAUCChange}
                disabled={isBeforeRomeFounded || !isDisplayYearChecked}>
            </input>
            display year <span className="italics">ab urbe condita</span>
        </label>
    </fieldset>
  )
}


//Might make more sense to only show the last two checkboxes if display year is checked
//rather than enabling disabling, etc
//could also make these options into a radio select, so only one can be chosen w/o any additional code, state management