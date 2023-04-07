import { React, useState} from 'react';
import CardSection from './CardSection';
import DateFieldset from './DateFieldset';
import OptionsFieldset from './OptionsFieldset';
import Button from './Button';
import { outputFormattedRomanDate, 
        normalizeFormData, 
        abbreviateDate, 
        abbreviateYear,
        checkBeforeRomeFounded } from '../utils/dateConversions'

export default function DateConverter() {
    const today = new Date()  
    const [month, setMonth] = useState(today.getMonth() + 1)
    const [day, setDay] = useState(today.getDate())   
    const [year, setYear] = useState(today.getFullYear())
    const [era, setEra] = useState('A.D. / C.E.')
    const [isDisplayYearChecked, setIsDisplayYearChecked] = useState(true)
    const [yearDisplayOption, setYearDisplayOption] = useState('secularNotation')
    const [isDateSubmitted, setIsDateSubmitted] = useState(false)
    const [submittedFormData, setSubmittedFormData] = useState(null) 
    const [isAbbreviatedChecked, setIsAbbreviatedChecked] = useState(false)

    const { romanDate, formattedYear } = submittedFormData ? outputFormattedRomanDate(submittedFormData) : { romanDate: null, formattedYear: null }

    function handleMonthChange(e) {
        const isBeforeRomeFounded = checkBeforeRomeFounded(day, e.target.value, year, era)
        if (isBeforeRomeFounded) { setYearDisplayOption(null) }
        setMonth(Number(e.target.value)) 
    }

    function handleDayChange(e) {
        const isBeforeRomeFounded = checkBeforeRomeFounded(e.target.value, month, year, era)
        if (isBeforeRomeFounded) { setYearDisplayOption(null) }
        setDay(Number(e.target.value)) 
    }

   function handleYearChange(e) {
        const isBeforeRomeFounded = checkBeforeRomeFounded(day, month, e.target.value, era)
        if (isBeforeRomeFounded) { setYearDisplayOption(null) }
        setYear(Number(e.target.value));
   }

   function handleEraChange(e) {
        const isBeforeRomeFounded = checkBeforeRomeFounded(day, month, year, e.target.value)
        if (isBeforeRomeFounded) { setYearDisplayOption(null) }
        setEra(e.target.value);
    }

    function handleDisplayYearChange(e) {
        if (!e.target.checked) { setYearDisplayOption(null) }
        const isBeforeRomeFounded = checkBeforeRomeFounded(day, month, year, era)
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
        setIsDisplayYearChecked(true)
        setYearDisplayOption(null)
        setIsAbbreviatedChecked(false)
        setSubmittedFormData(null)
    }

    if (!isDateSubmitted) {
        return (
          <CardSection className="form-card" title="Find the Roman date for:">
            <form method="post" onSubmit={handleSubmit}>
                <DateFieldset 
                    month={month}
                    handleMonthChange={handleMonthChange}
                    day={day}
                    handleDayChange={handleDayChange}
                    year={year} 
                    handleYearChange={handleYearChange}
                    era={era}
                    handleEraChange={handleEraChange}/>
                <OptionsFieldset 
                    isBeforeRomeFounded={checkBeforeRomeFounded(day, month, year, era)}
                    isDisplayYearChecked={isDisplayYearChecked}
                    handleDisplayYearChange={handleDisplayYearChange}
                    yearDisplayOption={yearDisplayOption}
                    handleYearDisplayOptionChange={handleYearDisplayOptionChange}
                    />  
                <div className='btn-group'>
                    <Button 
                        type="submit" 
                        buttonText="Submit" />    
                </div>
            </form>
          </CardSection>
        );
      } else {
          return (
            <CardSection className="results-card" title="Roman date:">
                <div>
                    <p>{isAbbreviatedChecked ? abbreviateDate(romanDate) : romanDate}</p>
                    <p>{isAbbreviatedChecked ? abbreviateYear(formattedYear) : formattedYear}</p>
                </div>
                <label>
                    <input type="checkbox" name="abbreviated" checked={isAbbreviatedChecked} onChange={ (e)=> setIsAbbreviatedChecked(!isAbbreviatedChecked)}></input>
                    display abbreviated date
                </label>
                <div className='btn-group'>
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
                </div>
            </CardSection>
          );
      }
}
