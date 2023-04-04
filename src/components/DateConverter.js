import { React, useState } from 'react'
import CardSection from './CardSection';
import DateFieldset from './DateFieldset';
import OptionsFieldset from './OptionsFieldset';
import Button from './Button';
import outputFormattedRomanDate from '../utils/dateConversions'

//put the Roman date conversion functions in a separate utils/dateConversion.js file

export default function DateConverter() {
    const today = new Date()  
    const [year, setYear] = useState(today.getFullYear())
    const [isCommonEra, setIsCommonEra] = useState(true)
    const [isDisplayYearChecked, setisDisplayYearChecked] = useState(true)
    const [isDisplayAUCChecked, setisDisplayAUCChecked] = useState(false)
    const [isDateSubmitted, setIsDateSubmitted] = useState(false)

   function handleYearChange(e) {
        const isBeforeRomeFounded = e.target.value <= 753 && isCommonEra === false
        if (isBeforeRomeFounded) { setisDisplayAUCChecked(false) }
        setYear(Number(e.target.value));
   }

   function handleEraChange(e) {
        const isBeforeRomeFounded = year <= 753 && e.target.value === 'B.C. / B.C.E.'
        if (isBeforeRomeFounded) { setisDisplayAUCChecked(false) }
        setIsCommonEra(e.target.value === 'A.D. / C.E.');
    }

    function handleDisplayYearChecked(e) {
        if (!e.target.checked) { setisDisplayAUCChecked(false) }
        setisDisplayYearChecked(!isDisplayYearChecked);
    }

   function handleSubmit(e) {
   
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const formData = new FormData(e.target); 
        outputFormattedRomanDate(formData)

        setIsDateSubmitted(true)
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
                    handleDisplayYearChecked={handleDisplayYearChecked}
                    isDisplayAUCChecked={isDisplayAUCChecked}
                    handleDisplayAUCChange={(e) => setisDisplayAUCChecked(e.target.checked)}
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
                <Button 
                    type="button" 
                    buttonText="Convert another date" 
                    onClick={() => setIsDateSubmitted(false)}/>
            </CardSection>
          );
      }
}
