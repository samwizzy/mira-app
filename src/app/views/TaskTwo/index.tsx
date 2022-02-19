import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "./Chart";
import CountForm from "./CountForm";
import { getAwardsApi } from "src/store/slices/chart.slice";
import { RootState } from "src/store";

export default function TaskTwo() {
  const dispatch = useDispatch();
  const { awards } = useSelector(({ chart }: RootState) => chart);

  useEffect(() => {
    dispatch(getAwardsApi("nm0001667"));
  }, [dispatch]);

  // useMemo for expensive data modelling
  const mappedAwards = useMemo(
    () =>
      awards.map((award) => ({
        ...award,
        count: awards.filter((a) => a.year === award.year).length,
      })),
    [awards]
  );

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto bg-gray-50 sm:p-6 px-4 py-6">
        <div className="mb-6">
          <span className="text-sm text-gray-600 font-light">
            Designed with rechart
          </span>
          <h2 className="text-gray-700 text-xl">
            <strong>IMDB</strong> Chart
          </h2>
        </div>

        <div className="grid grid-cols-12 sm:gap-8 gap-x-0 gap-y-6">
          <div className="sm:col-span-4 col-span-12">
            <CountForm />
          </div>
          <div className="sm:col-span-8 col-span-12 overflow-auto">
            <Chart data={mappedAwards} />
          </div>
        </div>
      </div>
    </div>
  );
}
