import { React, useState } from 'react'
import CardSection from './CardSection';
import DateFieldset from './DateFieldset';
import OptionsFieldset from './OptionsFieldset';
import Button from './Button';

export default function DateConverter() {

    const [isDateSubmitted, setIsDateSubmitted] = useState(true)

    function convertDate(e) {
        //replace with actual logic
        e.preventDefault()
        setIsDateSubmitted(true)
   }

    if (!isDateSubmitted) {
        return (
          <CardSection title="Find the Roman date for">
            <form>
                <DateFieldset />
                <OptionsFieldset isAUCDisabled={false} />   {/* replace hard-coded with state and logic */}
                <Button type="submit" buttonText="Submit" onClick={convertDate}></Button>
                </form>
          </CardSection>
        );
      } else {
          return (
            <CardSection title="Converted date">
                <Button type="button" buttonText="Convert another date" onClick={() => setIsDateSubmitted(false)}/>
            </CardSection>
          );
      }
}
