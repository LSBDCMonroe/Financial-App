import React, { useEffect, useState } from 'react';
import api from '../../api';
import { CustomModal } from '../shared-components/Modal';
import useNonInitialEffect from '../../utils/useNonInitialEffect';
import { classType } from './StudentDashboard';
import useStateCallback from '../../utils/useStateCallback';

const StudentAddClass = ({ setMyClass }: { setMyClass: any }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [code, setCode] = useState('');
  const [classDetails, setClassDetails] = useState<classType | null>(null);

  /**
   * Makes sure that user can only submit an authcode of lemgth 5
   */
  useEffect(() => {
    if (code.length != 5) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [code]);

  /**
   * Doesn't let the length of authCode be more than 5
   * @param e Change event of the authCode input
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.length > 5) {
      return;
    } else {
      setCode(value);
    }
  };

  /**
   * Body of the Cofirmation modal
   */
  const modalBody = () => {
    return (
      <div>
        <div className="bold-font bold" style={{ fontSize: '1.5em' }}>
          {classDetails.name}
        </div>
        <div className="creation-date meta-txt">
          Created on: {classDetails.date}
        </div>
        <div>Teacher: {classDetails.createdBy}</div>
        <div>Organization: {classDetails.organization}</div>
      </div>
    );
  };

  const registerToClass = () => {
    api
      .getStudentAuthorized(code)
      .then((res) => {
        if (!res.success) setMyClass(classDetails);
        else {
          setMyClass(null);
        }
      })
      .catch((err) => {
        window.alert('Something went wrong \nPlease try again!');
        setMyClass(null);
      });
  };

  /**
   * Actions of the confirmation modal
   */
  const ModalActions = () => {
    return (
      <div>
        <button
          className="yellow-button"
          style={{ minWidth: '10%', marginRight: '1%' }}
          onClick={() => {
            registerToClass();
            setShowConfirmation(false);
          }}
        >
          Yes
        </button>
        <button
          className="blue-button"
          style={{ minWidth: '10%', marginRight: '1%' }}
          onClick={() => {
            setShowConfirmation(false);
            setClassDetails(null);
          }}
        >
          No
        </button>
      </div>
    );
  };

  /**
   * Makes an api call to get class details based on authCode provided
   */
  const handleSubmit = () => {
    api
      .getClassDetails(code)
      .then((res) => {
        if (res.success) {
          setClassDetails(res.classInfo);
          setShowConfirmation(true);
        } else
          window.alert(
            'Invalid authentication code! \n Please enter a valid code.'
          );
      })
      .catch((err) => {
        setClassDetails(null);
        window.alert(
          'Something went wrong! \nPlease refresh the page and try again'
        );
      });
  };

  return (
    <>
      <div
        className="generic-card"
        style={{ margin: 'auto', width: '65vw', marginTop: '15%' }}
      >
        <div className="general-heading">Join A Class</div>
        <div className="ta-center">
          Enter the 5 digit code provided by your instructor to join a class
        </div>
        <div className="ta-center" style={{ margin: '1% 0' }}>
          <input
            className="ta-center"
            type="text"
            style={{ width: '60%' }}
            onChange={handleChange}
            value={code}
          />
        </div>
        <button
          className="yellow-button center"
          disabled={disabled}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {showConfirmation ? (
        <CustomModal
          header={'Is this your class?'}
          body={modalBody}
          actions={ModalActions}
          close={() => setShowConfirmation(false)}
        />
      ) : null}
    </>
  );
};

export default StudentAddClass;
