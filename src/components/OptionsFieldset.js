import React  from 'react'

export default function OptionsFieldset({ 
    isBeforeRomeFounded, 
    isDisplayYearChecked, 
    handleDisplayYearChecked,
    isDisplayAUCChecked, 
    handleDisplayAUCChange 
}) {

  return (
    <fieldset>
        {/* add a legend */}
        <label>
            <input type="checkbox" name="abbreviated"></input>
            abbreviated
        </label>
        <label>
            <input type="checkbox" name="display-year" 
                onChange={handleDisplayYearChecked}
                checked={isDisplayYearChecked}></input>
            display year
        </label>
        <label>
            <input type="checkbox" name="display-AUC-year" 
                checked={isDisplayAUCChecked}
                onChange={handleDisplayAUCChange}
                disabled={isBeforeRomeFounded || !isDisplayYearChecked}>
            </input>
            display year in A.U.C.
        </label>
    </fieldset>
  )
}
