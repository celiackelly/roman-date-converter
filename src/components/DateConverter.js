import { React, useState } from 'react'
import CardSection from './CardSection';
import DateFieldset from './DateFieldset';
import OptionsFieldset from './OptionsFieldset';
import Button from './Button';

export default function DateConverter() {
    const today = new Date()  
    const [year, setYear] = useState(today.getFullYear())
    const [isCommonEra, setIsCommonEra] = useState(true)  
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

    if (!isDateSubmitted) {
        return (
          <CardSection title="Find the Roman date for">
            <form method="post" onSubmit={handleSubmit}>
                <DateFieldset 
                    today={today}
                    year={year} 
                    handleYearChange={(e) => setYear(Number(e.target.value))}
                    isCommonEra={isCommonEra}
                    handleEraChange={(e) => setIsCommonEra(e.target.value === 'A.D. / C.E.')}/>
                <OptionsFieldset isBeforeRomeFounded={year <= 753 && !isCommonEra} />  
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
