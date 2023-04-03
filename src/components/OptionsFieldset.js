import { React, useState}  from 'react'

export default function OptionsFieldset({ isBeforeRomeFounded, isDisplayAUCChecked, handleDisplayAUCChange }) {
  const [isDisplayYearChecked, setisDisplayYearChecked] = useState(true)

  return (
    <fieldset>
        {/* add a legend */}
        <label>
            <input type="checkbox" name="abbreviated"></input>
            abbreviated
        </label>
        <label>
            <input type="checkbox" name="display-year" 
                onChange={() => setisDisplayYearChecked(!isDisplayYearChecked)}
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
