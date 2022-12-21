import { useCallback, useEffect, useState } from 'react';
import Step from './Step';

const Q1 = (props) => {
  const { question, setQuestion, questionsData, userAnswer } = props;
  const [selectedArray, setSelectedArray] = useState(questionsData.options);
  const [activeRow, setActiveRow] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  const [currentSelected, setCurrentSelected] = useState(0);
  const [outputTotal, setOutputTotal] = useState([]);
  // const selectedAnswer = userAnswer ? userAnswer[0] : {};
  // let isQ1Sumited = !!selectedAnswer?.answer.length;

  const getTotalSelected = useCallback((array, index) => {
    let count = 0;
    array && array.length > 0 && array[index].map((inn) => (!!inn.isSelected ? count++ : 0));
    return count;
  }, []);

  useEffect(() => {
    setSelectedArray(questionsData.options);
    setActiveRow(0);
  }, [questionsData]);
  // useEffect(() => {
  //   if (isQ1Sumited) {
  //     var finalArr = [];
  //     selectedArray?.forEach((itemArr, index) => {
  //       let newArr = [];
  //       itemArr?.forEach((ele, ind) => {
  //         if (selectedAnswer && selectedAnswer?.answer[index][ind] !== 0) {
  //           if (selectedArray[index][ind].isSelected === false) {
  //             let { opt } = selectedArray[index][ind];
  //             let newObj = {
  //               opt,
  //               isSelected: true,
  //               count: userAnswer[0].answer[index][ind]
  //             };
  //             newArr.push(newObj);
  //           } else {
  //             newArr.push(selectedArray[index][ind]);
  //           }
  //         } else {
  //           newArr.push(selectedArray[index][ind]);
  //         }
  //         // }
  //       });
  //       finalArr[index] = newArr;
  //     });
  //     setSelectedArray(finalArr);
  //     setOutputTotal(finalArr);
  //     console.log(finalArr);
  //   }
  // }, []);

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
          setCurrentSelected(totalCount);
          return outerValue;
        });

      let output =
        totalArr[activeRow] &&
        totalArr[activeRow].length > 0 &&
        totalArr[activeRow].map((inn) => inn.count);

      console.log(output, 'output');
      console.log(outputTotal, 'outputTotal');
      console.log(totalArr, 'totalArray');
      setTotalSelected(selectedSum);
      setSelectedArray(totalArr);
      outputTotal.splice(activeRow, 1, output);
      setOutputTotal(outputTotal);
    },
    [selectedArray, getTotalSelected, activeRow, outputTotal]
  );
  return (
    <div className="flex-col p-4">
      <div className="flex justify-center items-center p-10">
        <div className="w-1/3 text-lg font-medium mr-6">{questionsData.questions}</div>
        <div className="w-1/3 text-base font-normal">{questionsData.description}</div>
      </div>

      <Step
        questionsData={questionsData}
        selectedArray={selectedArray}
        setSelectedArray={setSelectedArray}
        question={question}
        setQuestion={setQuestion}
        getTotalSelected={getTotalSelected}
        handleClick={handleClick}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
        totalSelected={totalSelected}
        setTotalSelected={setTotalSelected}
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
        outputTotal={outputTotal}
        userAnswer={userAnswer}
      />
    </div>
  );
};

export default Q1;
