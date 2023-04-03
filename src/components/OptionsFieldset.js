import { React, useState}  from 'react'

export default function OptionsFieldset({ isBeforeRomeFounded }) {
  const [displayYear, setDisplayYear] = useState(false)

  return (
    <fieldset>
        {/* add a legend */}
        <label>
            <input type="checkbox" name="abbreviated"></input>
            abbreviated
        </label>
        <label>
            <input type="checkbox" name="display-year" 
                onChange={() => setDisplayYear(!displayYear)}
                checked={displayYear}></input>
            display year
        </label>
        <label>
            <input type="checkbox" name="display-AUC-year" 
                disabled={isBeforeRomeFounded || !displayYear}>
            </input>
            display year in A.U.C.
        </label>
    </fieldset>
  )
}
