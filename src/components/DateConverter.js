import { React, useState } from 'react'
import CardSection from './CardSection';
import DateFieldset from './DateFieldset';
import OptionsFieldset from './OptionsFieldset';
import Button from './Button';

export default function DateConverter() {
    const today = new Date()  
    const [year, setYear] = useState(today.getFullYear())
    const [isCommonEra, setIsCommonEra] = useState(true)
    const [isDisplayAUCChecked, setisDisplayAUCChecked] = useState(false)
    const [isDateSubmitted, setIsDateSubmitted] = useState(false)

    function convertDate() {
        //add actual logic

   }

   function handleSubmit(e) {
   
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form); 
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

       setIsDateSubmitted(true)
   }

   function handleYearChange(e) {
        setYear(Number(e.target.value));
        if (e.target.value <= 753 && isCommonEra === false) { setisDisplayAUCChecked(false) }
   }

   function handleEraChange(e) {
        setIsCommonEra(e.target.value === 'A.D. / C.E.');
        if (year <= 753 && e.target.value === 'B.C. / B.C.E.') { setisDisplayAUCChecked(false) }
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
