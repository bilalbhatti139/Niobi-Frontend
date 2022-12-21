import { isEmpty } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAssessmentRequest } from '../../../redux/reducers/ducks/UsersDuck';

const Q6 = (props) => {
  let dispatch = useDispatch();
  const { question, setQuestion, questionsData } = props;
  const [blocks, setBlocks] = useState([[...questionsData.options], [...questionsData.options]]);
  const [pair, setPair] = useState({ q6: '', q7: '' });
  const [activeQues, setActiveQues] = useState(0);

  useEffect(() => {
    let tem = [];
    tem.splice(0, 1, questionsData.options);
    tem.splice(1, 1, questionsData.options);

    setBlocks(tem);
    setPair({ q6: '', q7: '' });
    setActiveQues(0);
  }, [questionsData]);

  const getTotalSelected = useCallback(() => {
    let count = 0;
    blocks[activeQues].map((item) => (item.isSelected ? ++count : item));
    return count;
  }, [blocks, activeQues]);

  const handleCardClick = useCallback(
    (item) => {
      let tempArr = [...blocks[activeQues]];
      const selectedArr = tempArr.map((innItem) => {
        return item.id === innItem.id
          ? { ...innItem, isSelected: !item.isSelected }
          : { ...innItem, isSelected: false };
      });
      let selected = selectedArr.find((v) => v.isSelected);
      if (activeQues === 0) {
        setPair(!isEmpty(selected) ? { ...pair, q6: selected.id.toString() } : { ...pair, q6: '' });
      } else {
        setPair(!isEmpty(selected) ? { ...pair, q7: selected.id.toString() } : { ...pair, q7: '' });
      }
      blocks.splice(activeQues, 1, selectedArr);
    },
    [blocks, pair, activeQues]
  );

  return (
    <div>
      <div className="flex justify-center px-12 mt-24 text-xl md:text-4xl font-medium">
        {questionsData.questions}
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 p-4">
          {blocks[activeQues] &&
            blocks[activeQues].length > 0 &&
            blocks[activeQues].map((item, index) => {
              return (
                <>
                  <div
                    onClick={() => {
                      handleCardClick(item);
                    }}
                    className=" p-4 ">
                    {item.id === 5 ? (
                      <div className="col-span-4 sm:ml-0 mt-6  md:col-span-4  md:ml-6" />
                    ) : (
                      <>
                        <div
                          className={
                            item.isSelected
                              ? 'border-2 border-gradient border-t-[#F1BB4C] border-r-[#E28943] border-b-[#CA478B] border-l-[#863C92] rounded-2xl'
                              : 'opacity-70'
                          }>
                          <img
                            src={`${process.env.REACT_APP_IMAGE_URL}/assessment/${item.img}`}
                            alt=""
                          />
                        </div>
                      </>
                    )}
                  </div>
                </>
              );
            })}
        </div>
      </div>

      <div className="flex justify-between px-8 py-8 items-center gap-2">
        <div className=" items-center rounded-3xl"></div>
        <div className=" items-center rounded-3xl">
          <button
            onClick={() => {
              if (!isEmpty(pair) && !isEmpty(pair.q6) && !isEmpty(pair.q7)) {
                dispatch(updateAssessmentRequest({ type: 'question-6-7', answer: [pair] }));

                setQuestion(question + 1);
              }
              if (!isEmpty(pair) && !isEmpty(pair.q6) && isEmpty(pair.q7)) {
                setActiveQues(1);
              }
            }}
            type="button"
            className={`py-2 px-4 text-white border-2 border-[#606060] rounded-3xl bg-[#606060] hover:bg-[#606060a1] ${
              getTotalSelected() === 1 ? 'opacity-100' : 'opacity-30'
            }`}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Q6;
