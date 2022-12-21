import Steps from './Steps';

const Welcome = (props) => {
  const { question, setQuestion } = props;
  return (
    <div className="">
      <div className="flex justify-center text-center items-center text-5xl font-bold pb-12 pt-32 ">
        Adam Welcome to Wellavi
      </div>
      <div className="flex justify-center font-normal text-2xl text-center text-[#595959]">
        I will help translate the wishes of comprehensive personal wellness into clear insights and
        actionable guidance.
      </div>
      <Steps />
      <div className="flex justify-center items-center pb-6 px-4 rounded-3xl">
        <button
          onClick={() => setQuestion(question + 1)}
          type="button"
          className="py-2 px-4 text-white rounded-3xl bg-[#606060] hover:bg-[#606060a1] ">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Welcome;
