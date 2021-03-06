import * as React from "react";
import { HiOutlineTrendingUp } from "react-icons/hi";

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
          and awards for each year.
        </p>
        <p className="text-base text-gray-600">
          To have a count of the awards for each year, we have added a count
          property to help do this using the Array map, and this is so we can
          have them depicted on a line chart by{" "}
          <span>
            count <HiOutlineTrendingUp className="inline-block" /> year
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default React.memo(CountForm);
