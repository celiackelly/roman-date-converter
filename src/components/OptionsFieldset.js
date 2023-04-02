import React from 'react'

export default function OptionsFieldset({ isAUCDisabled }) {
  return (
    <fieldset>
        {/* add a legend */}
        <label>abbreviated
            <input type="checkbox" name="abbreviated"></input>
        </label>
        <label>display year
            <input type="checkbox" name="display-year"></input>
        </label>
        <label>display year in A.U.C.
            <input type="checkbox" name="display-AUC-year" disabled={isAUCDisabled}></input>
        </label>
    </fieldset>
  )
}
