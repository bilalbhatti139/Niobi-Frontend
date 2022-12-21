import { isEmpty } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { updateAssessmentRequest } from '../../../redux/reducers/ducks/UsersDuck';

const Q5 = (props) => {
  const dispatch = useDispatch();
  const { question, setQuestion, questionsData } = props;
  const [cards, setCards] = useState([
    [...questionsData.options[1].feelingsBoxColors],
    [...questionsData.options[1].feelingsBoxColors]
  ]);
  const [pair, setPair] = useState({ q5a: '', q5b: '' });
  const [activeQues, setActiveQues] = useState(0);
  const { assessmentResponse } = useSelector(({ users }) => ({
    assessmentResponse: users?.assessmentResponse
  }));

  useEffect(() => {
    let tem = [];
    tem.splice(0, 1, questionsData.options[1].feelingsBoxColors);
    tem.splice(1, 1, questionsData.options[1].feelingsBoxColors);
    setCards(tem);
    setPair({ q5a: '', q5b: '' });
    setActiveQues(0);
  }, [questionsData]);

  const getTotalSelected = useCallback(() => {
    let count = 0;
    cards[activeQues].map((item) => (item.isSelected ? ++count : item));
    return count;
  }, [cards, activeQues]);

  const handleCardClick = useCallback(
    (item) => {
      let tempArr = [...cards[activeQues]];
      const selectedArr = tempArr.map((innItem) => {
        return item.id === innItem.id
          ? { ...innItem, isSelected: !item.isSelected }
          : { ...innItem, isSelected: false };
      });
      let selected = selectedArr.find((v) => v.isSelected);
      if (activeQues === 0) {
        setPair(!isEmpty(selected) ? { ...pair, q5a: String(selected.id) } : { ...pair, q5a: '' });
      } else {
        setPair(!isEmpty(selected) ? { ...pair, q5b: String(selected.id) } : { ...pair, q5b: '' });
      }
      cards.splice(activeQues, 1, selectedArr);
    },
    [cards, pair, activeQues]
  );

  return (
    <div>
      <div className="w-[100%] p-5 ">
        <div className="w-[100%] sm:p-6">
          <div className="col-span-12 py-6">
            <div className="">
              <h1 className="font-weight-[700] text-2xl text-center">
                Please mark a cell that the best describes <b>how you a ideally want to feel</b> if
                you are now looking for a change in your experience
              </h1>
            </div>
            <div className="flex p-2">
              <div className="mx-auto">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-4">
                    <h1 className="font-weight-[700] text-2xl text-end">confident in feelings</h1>
                  </div>
                  <div className="flex justify-center  rounded-xl  p-6  bg-[#50659D]"></div>
                  <div className="flex justify-center rounded-xl  p-6  bg-[#6B7FB8]"></div>
                  <div className="flex justify-center rounded-xl  p-6 bg-[#869AD2]"></div>
                  <div className="flex justify-center rounded-xl  p-6  bg-[#A0B4ED]"></div>
                  <div className="col-span-4">
                    <h1 className="font-weight-[700] text-2xl text-start">can't say for sure</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex p-2">
            <div className="mx-auto relative flex">
              <div className="grid grid-cols-9 gap-1">
                {cards[activeQues] &&
                  cards[activeQues].length > 0 &&
                  cards[activeQues].map((item, index) => {
                    return (
                      <div className=" ">
                        <div
                          onClick={() => {
                            if (index !== 40) {
                              handleCardClick(item);
                            }
                          }}
                          className=" flex justify-center">
                          <div
                            className={
                              item.isSelected
                                ? 'border-2 p-1 border-[#000000] rounded-2xl opacity-100'
                                : 'opacity-80 p-1 border-2 border-transparent'
                            }>
                            {index === 40 ? (
                              <div className="flex justify-center rounded-xl p-6 bg-[#FFFFFF]" />
                            ) : (
                              <>
                                {item.isSelected && (
                                  <BsCheckLg className="absolute w-[50px] h-[50px] rounded-2xl bg-transparent text-[#000000] p-3" />
                                )}
                                <div
                                  className={`flex justify-center rounded-xl p-6 bg-[${item.color}] `}
                                />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-8 py-4 items-center gap-2">
        <div className=" items-center rounded-3xl"></div>
        <div className=" items-center rounded-3xl">
          <button
            onClick={() => {
              if (!isEmpty(pair) && !isEmpty(pair.q5a) && !isEmpty(pair.q5b)) {
                dispatch(updateAssessmentRequest({ type: 'question-4-5', answer: [pair] }));

                setQuestion(question + 1);
              }
              if (!isEmpty(pair) && !isEmpty(pair.q5a) && isEmpty(pair.q5b)) {
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

export default Q5;
