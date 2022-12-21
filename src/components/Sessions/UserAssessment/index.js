import ContinueAssessment from './ContinueAssessment';
import Introduction from './Introduction';
import Landing from './Landing';
import Question1 from './Question1';

const UserAssessment = (props) => {
  const array = [<Landing />, <Introduction />, <ContinueAssessment />, <Question1 />];

  return (
    <div className="flex justify-center items-center bg-[#F5F5F5] h-screen px-32">
      <div className="flex-col w-full bg-white justify-center shadow-2xl rounded-2xl">
        {array[props.index]}
      </div>
    </div>
  );
};

export default UserAssessment;
