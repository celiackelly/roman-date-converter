import React from 'react'

export default function OptionsFieldset({ isAUCDisabled }) {
  return (
    <fieldset>
        {/* add a legend */}
        <label>
            <input type="checkbox" name="abbreviated"></input>
            abbreviated
        </label>
        <label>
            <input type="checkbox" name="display-year"></input>
            display year
        </label>
        <label>
            <input type="checkbox" name="display-AUC-year" disabled={isAUCDisabled}></input>
            display year in A.U.C.
        </label>
    </fieldset>
  )
}
