import { React, useState } from "react";
import FormCard from "./FormCard";
import ResultsCard from "./ResultsCard";
import {
  outputFormattedRomanDate,
  normalizeFormData,
  checkBeforeRomeFounded,
} from "../utils/dateConversions";

export default function DateConverter() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [day, setDay] = useState(today.getDate());
  const [year, setYear] = useState(today.getFullYear());
  const [era, setEra] = useState("A.D. / C.E.");
  const [isDisplayYearChecked, setIsDisplayYearChecked] = useState(true);
  const [yearDisplayOption, setYearDisplayOption] = useState("secularNotation");
  const [isDateSubmitted, setIsDateSubmitted] = useState(false);
  const [submittedFormData, setSubmittedFormData] = useState(null);

  const { romanDate, formattedYear } = submittedFormData
    ? outputFormattedRomanDate(submittedFormData)
    : { romanDate: null, formattedYear: null };

  function handleMonthChange(e) {
    const isBeforeRomeFounded = checkBeforeRomeFounded(
      day,
      e.target.value,
      year,
      era
    );
    if (isBeforeRomeFounded) {
      setYearDisplayOption(null);
    }
    setMonth(Number(e.target.value));
  }

  function handleDayChange(e) {
    const isBeforeRomeFounded = checkBeforeRomeFounded(
      e.target.value,
      month,
      year,
      era
    );
    if (isBeforeRomeFounded) {
      setYearDisplayOption(null);
    }
    setDay(Number(e.target.value));
  }

  function handleYearChange(e) {
    const isBeforeRomeFounded = checkBeforeRomeFounded(
      day,
      month,
      e.target.value,
      era
    );
    if (isBeforeRomeFounded) {
      setYearDisplayOption(null);
    }
    setYear(Number(e.target.value));
  }

  function handleEraChange(e) {
    const isBeforeRomeFounded = checkBeforeRomeFounded(
      day,
      month,
      year,
      e.target.value
    );
    if (isBeforeRomeFounded) {
      setYearDisplayOption(null);
    }
    setEra(e.target.value);
  }

  function handleDisplayYearChange(e) {
    if (!e.target.checked) {
      setYearDisplayOption(null);
    }
    const isBeforeRomeFounded = checkBeforeRomeFounded(day, month, year, era);
    if (isBeforeRomeFounded) {
      setYearDisplayOption(null);
    }
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
    setSubmittedFormData(normalizeFormData(formData));

    //Change state so results card is shown instead of form
    setIsDateSubmitted(true);
  }

  function changeOptions() {
    setDay(submittedFormData.day);
    setMonth(submittedFormData.month);
    setYear(submittedFormData.year);
    setEra(submittedFormData.era);
    setIsDisplayYearChecked(submittedFormData.displayYear);
    setYearDisplayOption(submittedFormData.yearDisplayOption);

    //Change state so form is shown
    setIsDateSubmitted(false);
  }

  function resetDate() {
    setDay(today.getDate());
    setMonth(today.getMonth() + 1);
    setYear(today.getFullYear());
    setEra("A.D. / C.E.");
    setIsDisplayYearChecked(true);
    setYearDisplayOption(null);
    setSubmittedFormData(null);
  }

  function handleConvertAnotherDate() {
    setIsDateSubmitted(false);
    resetDate();
  }

  if (!isDateSubmitted) {
    return (
      <FormCard
        month={month}
        handleMonthChange={handleMonthChange}
        day={day}
        handleDayChange={handleDayChange}
        year={year}
        handleYearChange={handleYearChange}
        era={era}
        handleEraChange={handleEraChange}
        isBeforeRomeFounded={checkBeforeRomeFounded(day, month, year, era)}
        isDisplayYearChecked={isDisplayYearChecked}
        handleDisplayYearChange={handleDisplayYearChange}
        yearDisplayOption={yearDisplayOption}
        handleYearDisplayOptionChange={handleYearDisplayOptionChange}
        handleSubmit={handleSubmit}
      />
    );
  } else {
    return (
      <ResultsCard
        romanDate={romanDate}
        formattedYear={formattedYear}
        changeOptions={changeOptions}
        handleConvertAnotherDate={handleConvertAnotherDate}
      />
    );
  }
}
