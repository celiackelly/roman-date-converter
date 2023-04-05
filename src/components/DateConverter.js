import { React, useState } from 'react'
import CardSection from './CardSection';
import DateFieldset from './DateFieldset';
import OptionsFieldset from './OptionsFieldset';
import Button from './Button';
import { outputFormattedRomanDate, normalizeFormData, abbreviateDate } from '../utils/dateConversions'

export default function DateConverter() {
    const today = new Date()  
    const [month, setMonth] = useState(today.getMonth() + 1)
    const [day, setDay] = useState(today.getDate())   
    const [year, setYear] = useState(today.getFullYear())
    const [era, setEra] = useState('A.D. / C.E.')
    const [isDisplayYearChecked, setIsDisplayYearChecked] = useState(false)
    const [yearDisplayOption, setYearDisplayOption] = useState('secularNotation')
    const [isDateSubmitted, setIsDateSubmitted] = useState(false)
    const [submittedFormData, setSubmittedFormData] = useState(null) 
    const [isAbbreviatedChecked, setIsAbbreviatedChecked] = useState(false)

    const romanDate = submittedFormData ? outputFormattedRomanDate(submittedFormData) : null

   function handleYearChange(e) {
        const isBeforeRomeFounded = e.target.value > 753 && era === 'B.C. / B.C.E.'
        if (isBeforeRomeFounded) { setYearDisplayOption(null) }
        setYear(Number(e.target.value));
   }

   function handleEraChange(e) {
        const isBeforeRomeFounded = year > 753 && e.target.value === 'B.C. / B.C.E.'
        if (isBeforeRomeFounded) { setYearDisplayOption(null) }
        setEra(e.target.value);
    }

    function handleDisplayYearChange(e) {
        if (!e.target.checked) { setYearDisplayOption(null) }
        const isBeforeRomeFounded = year > 753 && era === 'B.C. / B.C.E.'
        if (isBeforeRomeFounded) { setYearDisplayOption(null) }
        setIsDisplayYearChecked(!isDisplayYearChecked);
    }

    function handleYearDisplayOptionChange(e) {
        setYearDisplayOption(e.target.value);
    }

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const formData = new FormData(e.target); 

        //normalize submitted form data and save in state
        setSubmittedFormData(normalizeFormData(formData))

        //Change state so results card is shown instead of form 
        setIsDateSubmitted(true)
    }

    function changeOptions() {   
        setDay(submittedFormData.day)
        setMonth(submittedFormData.month)
        setYear(submittedFormData.year)
        setEra(submittedFormData.era)
        setIsDisplayYearChecked(submittedFormData.displayYear)
        setYearDisplayOption(submittedFormData.yearDisplayOption)
        setIsAbbreviatedChecked(false)

        //Change state so form is shown 
        setIsDateSubmitted(false)  
    }

    function resetDate() {
        setDay(today.getDate())
        setMonth(today.getMonth() + 1)
        setYear(today.getFullYear())
        setEra('A.D. / C.E.')
        setIsDisplayYearChecked(false)
        setYearDisplayOption(null)
        setIsAbbreviatedChecked(false)
        setSubmittedFormData(null)
    }

    if (!isDateSubmitted) {
        return (
          <CardSection title="Find the Roman date for">
            <form method="post" onSubmit={handleSubmit}>
                <DateFieldset 
                    month={month}
                    handleMonthChange={ (e) => setMonth(e.target.value) }
                    day={day}
                    handleDayChange={ (e) => setDay(e.target.value) }
                    year={year} 
                    handleYearChange={handleYearChange}
                    era={era}
                    handleEraChange={handleEraChange}/>
                <OptionsFieldset 
                    isBeforeRomeFounded={year > 753 && era === 'B.C. / B.C.E.'}
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
                <p>{isAbbreviatedChecked ? abbreviateDate(romanDate) : romanDate}</p>
                <label>
                    <input type="checkbox" name="abbreviated" checked={isAbbreviatedChecked} onChange={ (e)=> setIsAbbreviatedChecked(!isAbbreviatedChecked)}></input>
                    display abbreviated date
                </label>
                <Button 
                    type="button" 
                    buttonText="Change options" 
                    onClick={changeOptions}/>
                <Button 
                    type="button" 
                    buttonText="Convert another date" 
                    onClick={() => { 
                        setIsDateSubmitted(false); 
                        resetDate() }}/>
            </CardSection>
          );
      }
}
