import { isEmpty, split } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAssessmentRequest } from '../../../redux/reducers/ducks/UsersDuck';

const Q11 = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { question, setQuestion, questionsData } = props;
  const [cards, setCards] = useState([[...questionsData?.options], [...questionsData?.options]]);
  const [pair, setPair] = useState({ q111: '', q112: '' });
  const [activeQues, setActiveQues] = useState(0);

  useEffect(() => {
    let tem = [];
    tem.splice(0, 1, questionsData?.options);
    tem.splice(1, 1, questionsData?.options);
    setCards(tem);
    setPair({ q111: '', q112: '' });
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
        setPair(
          !isEmpty(selected) ? { ...pair, q111: selected.id.toString() } : { ...pair, q111: '' }
        );
      } else {
        setPair(
          !isEmpty(selected) ? { ...pair, q112: selected.id.toString() } : { ...pair, q112: '' }
        );
      }
      cards.splice(activeQues, 1, selectedArr);
    },
    [cards, pair, activeQues]
  );

  return (
    <div>
      <div className="flex flex-col  mt-48 text-xl md:text-4xl font-medium">
        <div className="flex justify-center">{split(questionsData?.questions, 'speaks')[0]}</div>
        <div className="flex justify-center">
          {'speaks ' + split(questionsData?.questions, 'speaks')[1]}
        </div>
      </div>
      <div className="xl:flex justify-center">
        <div className="xl:w-[70%]">
          <div className="grid grid-cols-12 mt-48">
            {cards[activeQues] &&
              cards[activeQues].length > 0 &&
              cards[activeQues].map((item, index) => {
                return (
                  <div className="col-span-12 sm:col-span-4 lg:col-span-3 h-[250px]  xl:col-span-2 p-3">
                    <div
                      className={
                        item.isSelected
                          ? 'border-2 border-gradient border-t-[#F1BB4C] border-r-[#E28943] border-b-[#CA478B] border-l-[#863C92] rounded-2xl'
                          : 'opacity-70 '
                      }>
                      <div
                        onClick={() => {
                          handleCardClick(item);
                        }}
                        className="px-3 py-8 h-[250px] flex justify-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img
                          src={`${process.env.REACT_APP_IMAGE_URL}/assessment/${item.img}`}
                          alt={'img'}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="flex justify-between px-8 py-8 items-center gap-2">
        <div className=" items-center rounded-3xl"></div>
        <div className=" items-center rounded-3xl">
          <button
            onClick={() => {
              if (!isEmpty(pair) && !isEmpty(pair.q111) && !isEmpty(pair.q112)) {
                dispatch(updateAssessmentRequest({ type: 'question-12-13', answer: [pair] }));

                setQuestion(question + 1);

                setTimeout(() => {
                    navigate('/user');
                }, 3000);
              }
              if (!isEmpty(pair) && !isEmpty(pair.q111) && isEmpty(pair.q112)) {
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

export default Q11;
