import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { options1 } from './Helper';

const Question1 = () => {
  const [selectedArray, setSelectedArray] = useState([]);
  const [activeRow, setActiveRow] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    setSelectedArray(options1);
    setActiveRow(0);
  }, []);

  const getTotalSelected = useCallback((array, index) => {
    let count = 0;
    array && array[index].map((inn) => (!!inn.isSelected === true ? count++ : 0));

    return count;
  }, []);

  const handleClick = useCallback(
    (item) => {
      const toggleArr =
        selectedArray &&
        selectedArray.map((outerValue, index) =>
          outerValue.map((innItem) =>
            innItem.opt === item.opt
              ? {
                  ...item,
                  isSelected: !item.isSelected
                }
              : innItem
          )
        );

      const totalArr =
        toggleArr &&
        toggleArr.map((outerValue, index) => {
          let totalCount = getTotalSelected(toggleArr, index);
          return outerValue.map((innItem) =>
            innItem.opt === item.opt
              ? {
                  ...item,
                  isSelected: !item.isSelected,
                  count: !item.isSelected ? totalCount : 0
                }
              : innItem
          );
        });
      let selectedSum = 0;
      totalArr &&
        totalArr.map((outerValue, index) => {
          let totalCount = getTotalSelected(totalArr, index);
          selectedSum += totalCount;
          if (totalCount >= 3) {
            setActiveRow(totalCount >= 3 ? index + 1 : activeRow);
          }
          return outerValue;
        });

      setTotalSelected(selectedSum);
      setSelectedArray(totalArr);
    },
    [selectedArray, getTotalSelected, activeRow]
  );

  return (
    <div className="flex-col p-4">
      <div className="flex justify-center p-10">
        <div className="w-1/3 text-lg font-medium mr-6">
          Please describe yourself using the 35 characteristics: "That's me"
        </div>
        <div className="w-1/3 text-base font-normal">
          In each of the five rows (across) give a 1 for the quality that best describes you, a 2
          for the second best and a 3 that describes you third best.
        </div>
      </div>

      <div className="flex-col ">
        {selectedArray &&
          selectedArray.map((outerValue, index) => {
            let totalSelectedInCurrRow = getTotalSelected(selectedArray, index);
            const op =
              outerValue &&
              outerValue.map((innerValue) => {
                return (
                  <div
                    onClick={() => {
                      if (totalSelectedInCurrRow < 3 && index === activeRow) {
                        handleClick(innerValue);
                      }
                    }}
                    id={index + innerValue.opt}
                    className={
                      innerValue.isSelected
                        ? 'border-2 border-[#8C8C8C] text-sm font-normal p-3 m-2 rounded-full bg-[#606060] text-[white] '
                        : 'border-2 border-[#8C8C8C] text-sm font-normal p-3 m-2 rounded-full  hover:bg-[#606060] hover:text-[white] cursor-pointer'
                    }>
                    {innerValue.count > 0 && (
                      <span className="rounded-full bg-[#ACABAB] text-white px-2.5 mx-1">
                        {innerValue.count > 0 ? innerValue.count : ''}
                      </span>
                    )}
                    <span>{innerValue.opt}</span>
                  </div>
                );
              });

            const fout = (
              <div
                className={
                  activeRow === index
                    ? 'flex mx-auto items-center opacity-100'
                    : 'flex mx-auto items-center opacity-30'
                }>
                <div className="font-normal text-2xl px-4">{index + 1}</div>
                {op}
              </div>
            );
            return fout;
          })}
      </div>
      <div
        onClick={() => {
          setSelectedArray(options1);
          setActiveRow(0);
          setTotalSelected(0);
        }}
        className="flex justify-start ml-8  text-[red] p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>

      <div className="flex justify-between px-8 py-8 items-center gap-2">
        <div className=" items-center rounded-3xl">
          <button
            onClick={() => navigate('/start-assessment')}
            type="button"
            className="py-2 px-4 text-[#8C8C8C] border-2 border-[#8C8C8C] rounded-3xl bg-white hover:bg-[#606060] hover:text-white">
            Back
          </button>
        </div>
        <div className=" items-center rounded-3xl">
          <button
            onClick={() => {
              if (totalSelected >= 15) {
                navigate('/personal_assessment/Q2');
              }
            }}
            type="button"
            className={`py-2 px-4 text-white border-2 border-[#606060] rounded-3xl bg-[#606060] hover:bg-[#606060a1] ${
              totalSelected >= 15 ? 'opacity-100' : 'opacity-30'
            }`}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question1;
