import { React, useState } from 'react'
import CardSection from './CardSection';
import DateForm from './DateForm';

export default function DateConverter() {

    const [isDateSubmitted, setIsDateSubmitted] = useState(false)

    if (!isDateSubmitted) {
        return (
          <CardSection title="Find the Roman date for">
            <DateForm />
          </CardSection>
        );
      } else {
          return (
            <CardSection title="Converted date">

            </CardSection>
          );
      }
}
