import * as React from "react";

function CountForm() {
  return (
    <div>
      <div className="mb-6">
        <span className="text-xs text-gray-600 font-light">Rapid API</span>
        <h2 className="text-lg text-gray-800">About IMDB</h2>
      </div>

      <div>
        <p className="text-base text-gray-600 mb-2">
          IMDB is a API that provides a collection of actors, their nominations
          and their awards for each year.
        </p>
        <p className="text-base text-gray-600">
          To have a count of the awards for each year, we have added a count
          property to help do this using a map, and have them depicted on a line
          chart.
        </p>
      </div>
    </div>
  );
}

export default React.memo(CountForm);
