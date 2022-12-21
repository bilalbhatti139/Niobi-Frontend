import React from 'react';
import Stepper from '../Stepper';

import { BookCoachSessionSteps } from '../../utils/constants';
import CoachProfileStepOne from './step1';
import CoachProfileStepTwo from './step2';
import CoachProfileStepThree from './step3';

const BookCoachSession = () => {
  return (
    <>
      <Stepper
        BookCoachSessionSteps={BookCoachSessionSteps}
        StepOne={CoachProfileStepOne}
        StepTwo={CoachProfileStepTwo}
        StepThree={CoachProfileStepThree}
      />
    </>
  );
};

export default BookCoachSession;
