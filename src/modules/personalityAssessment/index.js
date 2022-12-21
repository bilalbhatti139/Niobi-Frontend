import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContinueAssessment } from './ContinueAssessment';
import Introduction from './Introduction';
import Welcome from './Welcome';

import Q1 from '../personalityAssessment/Q1/index';
import Q2 from '../personalityAssessment/Q2-3';
import Q5 from '../personalityAssessment/Q5';
import Q6 from '../personalityAssessment/Q6-7';
import Q8 from '../personalityAssessment/Q8-9';
import Q10 from '../personalityAssessment/Q10';
import Q11 from '../personalityAssessment/Q11';
import { updateAnswersRequest, updateQuestionsRequest } from '../../redux/reducers/ducks/UsersDuck';
import { useNavigate } from 'react-router-dom';
import Spinner from '../shared/Loader';

const PersonalityAssessment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questionsResponse, assessmentAnswers } = useSelector(({ users }) => ({
    assessmentAnswers: users?.assessmentAnswers,
    questionsResponse: users?.questionsResponse
  }));
  const [question, setQuestion] = useState(null);

  const array = [
    <Welcome question={question} setQuestion={setQuestion} />,
    <Introduction question={question} setQuestion={setQuestion} />,
    <ContinueAssessment question={question} setQuestion={setQuestion} />,
    <Q1
      questionsData={questionsResponse && questionsResponse.length > 0 && questionsResponse[0]}
      userAnswer={assessmentAnswers}
      question={question}
      setQuestion={setQuestion}
    />,
    <Q2
      questionsData={questionsResponse && questionsResponse.length > 0 && questionsResponse[1]}
      userAnswer={assessmentAnswers}
      question={question}
      setQuestion={setQuestion}
    />,
    <Q5
      questionsData={questionsResponse && questionsResponse.length > 0 && questionsResponse[3]}
      userAnswer={assessmentAnswers}
      question={question}
      setQuestion={setQuestion}
    />,
    <Q6
      questionsData={questionsResponse && questionsResponse.length > 0 && questionsResponse[5]}
      userAnswer={assessmentAnswers}
      question={question}
      setQuestion={setQuestion}
    />,
    <Q8
      questionsData={questionsResponse && questionsResponse.length > 0 && questionsResponse[7]}
      userAnswer={assessmentAnswers}
      question={question}
      setQuestion={setQuestion}
    />,
    <Q10
      questionsData={questionsResponse && questionsResponse.length > 0 && questionsResponse[9]}
      userAnswer={assessmentAnswers}
      question={question}
      setQuestion={setQuestion}
    />,
    <Q11
      questionsData={questionsResponse && questionsResponse.length > 0 && questionsResponse[11]}
      userAnswer={assessmentAnswers}
      question={question}
      setQuestion={setQuestion}
    />
  ];

  useEffect(() => {
    dispatch(updateQuestionsRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateAnswersRequest());
  }, [dispatch]);

  useEffect(() => {
    if (assessmentAnswers?.length > 6) {
      navigate('/user');
    }
    setQuestion(assessmentAnswers?.length ? assessmentAnswers?.length + 3 : 0);
  }, [dispatch, assessmentAnswers, navigate]);

  return (
    <div>
      {!assessmentAnswers ? (
        <Spinner />
      ) : (
        <div className="flex justify-center items-center bg-[#F5F5F5] h-screen px-32">
          <div className="flex-col w-full bg-white justify-center shadow-2xl rounded-2xl">
            {questionsResponse && question >= 0 ? array[question] : <></>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalityAssessment;
