import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAssessmentRequest } from '../../../redux/reducers/ducks/UsersDuck';

const Step = (props) => {
  const {
    selectedArray,
    setSelectedArray,
    getTotalSelected,
    question,
    setQuestion,
    activeRow,
    handleClick,
    totalSelected,
    setTotalSelected,
    setActiveRow,
    currentSelected,
    setCurrentSelected,
    outputTotal,
    questionsData,
    userAnswer
  } = props;
  const dispatch = useDispatch();
  const [subArray, setSubArray] = useState(selectedArray[activeRow]);
  useEffect(() => {
    setSubArray(selectedArray[activeRow]);
    setCurrentSelected(getTotalSelected(selectedArray, activeRow));
  }, [selectedArray, activeRow, getTotalSelected, setCurrentSelected]);

  const handleSubmit = () => {
    let selectedSum = 0;
    selectedArray &&
      selectedArray.map((outerValue, index) => {
        let totalCount = getTotalSelected(selectedArray, index);
        selectedSum += totalCount;
        setCurrentSelected(totalCount);
        return outerValue;
      });
    console.log(selectedSum, 'selectedSum');
    if (activeRow > 3 && currentSelected > 2) {
      setTotalSelected(selectedSum);
    }
  };
  return (
    <div className="flex-col p-4 justify-center items-center">
      <div
        className={`flex-col w-[13%] mx-auto text-center items-center ${
          currentSelected > 2 ? ' opacity-30' : ' opacity-100'
        } `}>
        {subArray &&
          subArray.length > 0 &&
          subArray.map((item, index) => {
            return (
              <div
                onClick={() => {
                  if (currentSelected < 3) {
                    handleClick(item);
                  }
                  setCurrentSelected(getTotalSelected(selectedArray, activeRow));
                }}
                id={index + item.opt}
                className={
                  item.isSelected
                    ? 'border-2 border-[#8C8C8C] text-sm font-normal p-3 m-2 rounded-full bg-[#606060] text-[white] '
                    : 'border-2 border-[#8C8C8C] text-sm font-normal p-3 m-2 rounded-full  hover:bg-[#606060] hover:text-[white] cursor-pointer'
                }>
                {item.count > 0 && (
                  <span className="rounded-full bg-[#ACABAB] text-white px-3 mx-1">
                    {item.count > 0 ? item.count : ''}
                  </span>
                )}
                <span>{item.opt}</span>
              </div>
            );
          })}
      </div>
      <div
        onClick={() => {
          setSelectedArray(questionsData.options);
          setCurrentSelected(0);
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
        <div className=" items-center rounded-3xl"></div>
        <div className=" items-center rounded-3xl">
          <button
            onClick={() => {
              if (currentSelected > 2 && totalSelected > 14 && activeRow > 3) {
                dispatch(updateAssessmentRequest({ type: 'question-1', answer: [...outputTotal] }));
                setQuestion(question + 1);
              }
              if (currentSelected > 2 && activeRow < 4) {
                setActiveRow(activeRow + 1);
              }
              handleSubmit();
              setCurrentSelected(getTotalSelected(selectedArray, activeRow));

              setCurrentSelected(0);
            }}
            type="button"
            className={`py-2 px-4 text-white border-2 border-[#606060] rounded-3xl bg-[#606060] hover:bg-[#606060a1] ${
              currentSelected > 2 ? 'opacity-100' : 'opacity-30'
            }`}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step;
