import React, { useState } from 'react';
import '../../../../App.css';
import { months, years } from '../helper/helper';

const educationTemp = {
  title: '',
  type: '',
  company_name: '',
  start_date: {
    month: '',
    year: ''
  },
  end_date: {
    month: '',
    year: ''
  },
  currently: false
};

export default function EditEducation(props) {
  const initialEduValues = {
    school: '',
    degree: '',
    field_of_study: '',
    start_month: '',
    start_year: '',
    end_month: '',
    end_year: '',
    grade: ''
  };

  let educationArray = [];
  const [values, setValues] = useState(initialEduValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  educationArray.push(values);

  const [educations, setEducations] = useState([educationTemp]);

  const addEducations = () => {
    setEducations((prev) => [...prev, educationTemp]);
  };

  function stepFourData() {
    // Here, we invoke the callback with the new value
    props.onChange({ education: educationArray });
  }
  return <></>;
}
