import React from "react";
import CardSection from "./CardSection";
import DateFieldset from "./DateFieldset";
import OptionsFieldset from "./OptionsFieldset";
import Button from "./Button";

export default function FormCard({
  month,
  handleMonthChange,
  day,
  handleDayChange,
  year,
  handleYearChange,
  era,
  handleEraChange,
  isBeforeRomeFounded,
  isDisplayYearChecked,
  handleDisplayYearChange,
  yearDisplayOption,
  handleYearDisplayOptionChange,
  handleSubmit,
}) {
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
          handleEraChange={handleEraChange}
        />
        <OptionsFieldset
          isBeforeRomeFounded={isBeforeRomeFounded}
          isDisplayYearChecked={isDisplayYearChecked}
          handleDisplayYearChange={handleDisplayYearChange}
          yearDisplayOption={yearDisplayOption}
          handleYearDisplayOptionChange={handleYearDisplayOptionChange}
        />
        <div className="btn-group">
          <Button
            type="submit"
            className={"button-primary"}
            buttonText="Submit"
          />
        </div>
      </form>
    </CardSection>
  );
}
