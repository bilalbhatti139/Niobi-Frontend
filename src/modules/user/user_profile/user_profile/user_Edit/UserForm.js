import React from 'react';
import { Formik } from 'formik';
import UserFormBody from './UserFormBody';
import { initialValues, UserSchema } from './helper';

const UserForm = ({
  loading,
  onHandleSubmit,
  onClose,
  actionState,
  user,
  chains,
  chainsLoading,
  showModal,
  setShowModal
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, handles) => {
        onHandleSubmit(values, handles);
      }}
      validationSchema={UserSchema}>
      {(props) => {
        const { touched, values, errors, handleChange, handleSubmit, setFieldValue } = props;
        return (
          <UserFormBody
            onClose={onClose}
            loading={loading}
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            actionState={actionState}
            user={user}
            chains={chains}
            chainsLoading={chainsLoading}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        );
      }}
    </Formik>
  );
};

export default UserForm;
