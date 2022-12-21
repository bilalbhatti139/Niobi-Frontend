const Introduction = (props) => {
  const { question, setQuestion } = props;

  return (
    <div className="p-12">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="xl:col-span-4 col-span-12 items-center p-10 w-[400px] ">
          <img src={'/images/intro.svg'} alt="profile-img" className="w-[400px] rounded-full" />
        </div>

        <div className=" xl:col-span-8 col-span-12 items-center ">
          <div className=" items-center xl:items-start font-normal my-6 text-2xl xl:text-left text-center xl:w-3/4 text-[#595959]">
            The TrueSelf whole person wellness assessment is a version of the MOODFORM test, a
            psychological tool for self-Improvement developed in over 20 year of clinical praxis by
            the German psychologist and sociologist Dr. J. Mensing.
          </div>

          <div className="flex xl:justify-start justify-center items-center gap-2">
            <div className="flex-row justify-center items-center rounded-3xl">
              <button
                onClick={() => setQuestion(question + 1)}
                type="button"
                className="py-2 px-4 text-white border-2 border-[#606060] rounded-3xl bg-[#606060] hover:bg-[#606060a1] ">
                Continue
              </button>
            </div>
            <div className="flex-row justify-center items-center rounded-3xl">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
