import { React, useState } from "react";
import CardSection from "./CardSection";
import Button from "./Button";
import { abbreviateDate, abbreviateYear } from "../utils/dateConversions";

export default function ResultsCard({
  romanDate,
  formattedYear,
  changeOptions,
  handleConvertAnotherDate,
}) {
  const [isAbbreviatedChecked, setIsAbbreviatedChecked] = useState(false);

  let dateString = isAbbreviatedChecked ? abbreviateDate(romanDate) : romanDate;
  let yearString = isAbbreviatedChecked
    ? abbreviateYear(formattedYear)
    : formattedYear;

  return (
    <CardSection className="results-card" title="Roman date:">
      <div>
        <p>{dateString}</p>
        <p>{yearString}</p>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="abbreviated"
            onChange={(e) => setIsAbbreviatedChecked(!isAbbreviatedChecked)}
          ></input>
          display abbreviated date
        </label>
      </div>
      <div className="btn-group">
        <Button
          type="button"
          className={"button-primary"}
          buttonText="Change options"
          onClick={changeOptions}
        />
        <Button
          type="button"
          className={"button-primary"}
          buttonText="Convert another date"
          onClick={handleConvertAnotherDate}
        />
      </div>
    </CardSection>
  );
}
