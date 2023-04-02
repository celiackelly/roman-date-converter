import React from 'react'
import Button from './Button';
import DateFieldset from './DateFieldset';
import OptionsFieldset from './OptionsFieldset';

export default function DateForm() {

   function convertDate() {
        //replace with actual logic, which probably needs to live higher up
        alert('convert date')
   }

  return (
    <form>
        <DateFieldset />
        <OptionsFieldset isAUCDisabled={false} />   {/* replace hard-coded with state and logic */}
        <Button type={'submit'} buttonText={'Submit'} onClick={convertDate}></Button>
    </form>
  )
}
