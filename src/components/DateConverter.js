import { React, useState } from 'react'
import CardSection from './CardSection';
import DateFieldset from './DateFieldset';
import OptionsFieldset from './OptionsFieldset';
import Button from './Button';
import outputFormattedRomanDate from '../utils/dateConversions'

export default function DateConverter() {
    const today = new Date()  
    const [year, setYear] = useState(today.getFullYear())
    const [isCommonEra, setIsCommonEra] = useState(true)
    const [isDisplayYearChecked, setisDisplayYearChecked] = useState(false)
    const [yearDisplayOption, setYearDisplayOption] = useState("secularNotation")
    const [isDateSubmitted, setIsDateSubmitted] = useState(false)
    const [romanDate, setRomanDate] = useState('')

   function handleYearChange(e) {
        const isBeforeRomeFounded = e.target.value <= 753 && isCommonEra === false
        if (isBeforeRomeFounded) { setYearDisplayOption(null) }
        setYear(Number(e.target.value));
   }

   function handleEraChange(e) {
        const isBeforeRomeFounded = year <= 753 && e.target.value === 'B.C. / B.C.E.'
        if (isBeforeRomeFounded) { setYearDisplayOption(null) }
        setIsCommonEra(e.target.value === 'A.D. / C.E.');
    }

    function handleDisplayYearChange(e) {
        // if (!e.target.checked) { setYearDisplayOption(null) }
        setisDisplayYearChecked(!isDisplayYearChecked);
    }

    function handleYearDisplayOptionChange(e) {
        setYearDisplayOption(e.target.value);
    }

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const formData = new FormData(e.target); 

        //convert to Roman date and set state
        setRomanDate(outputFormattedRomanDate(formData))
        setIsDateSubmitted(true)

        //reset date to today 
        resetDate()
    }

    function resetDate() {
        setIsCommonEra(true)
        setYear(today.getFullYear())
        setisDisplayYearChecked(false)
        setYearDisplayOption(null)
        //no need to reset day and month here; they're set in DateFieldset.js
    }

    if (!isDateSubmitted) {
        return (
          <CardSection title="Find the Roman date for">
            <form method="post" onSubmit={handleSubmit}>
                <DateFieldset 
                    today={today}
                    year={year} 
                    handleYearChange={handleYearChange}
                    isCommonEra={isCommonEra}
                    handleEraChange={handleEraChange}/>
                <OptionsFieldset 
                    isBeforeRomeFounded={year <= 753 && !isCommonEra}
                    isDisplayYearChecked={isDisplayYearChecked}
                    handleDisplayYearChange={handleDisplayYearChange}
                    yearDisplayOption={yearDisplayOption}
                    handleYearDisplayOptionChange={handleYearDisplayOptionChange}
                    />  
                <Button 
                    type="submit" 
                    buttonText="Submit"></Button>
            </form>
          </CardSection>
        );
      } else {
          return (
            <CardSection title="Converted date">
                <p>{romanDate}</p>
                <Button 
                    type="button" 
                    buttonText="Change options" 
                    onClick={() => alert('can we reload but preserve previous options?')}/>
                    {/* to change options, you'd have to move all state up to DateConverter. 
                    Then you'd save a snapshot of all the options in state in the form's handleSubmit. Then onClick, you'd reset all inputs and state to the snapshot. Look back at the React tic-tac-toe tutorial- game history */}
                <Button 
                    type="button" 
                    buttonText="Convert another date" 
                    onClick={() => setIsDateSubmitted(false)}/>
            </CardSection>
          );
      }
}
