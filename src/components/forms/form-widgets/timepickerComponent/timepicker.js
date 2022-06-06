import React, { Fragment } from 'react';
import Breadcrumb from '../../../common/breadcrumb';
import TimePickerTwo from './timepicker-two';
import TimePickerOne from './timepicker-one';
import TimePickerThree from './timepicker-three';
import { Default,TimePickerDarkTheme,SetMultipleTimepicker } from "../../../../constant";

const TimePickerWrapper = () => {
  return (
    <Fragment>
      <Breadcrumb title="Timepicker" parent="Forms" />
      <div className="container-fluid timepicker-form">
        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>{Default}:</h5>
              </div>
              <div className="card-body">
                <form className="theme-form">
                  <div className="form-group mb-0">
                    <TimePickerTwo />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card app-dark">
              <div className="card-header">
                <h5>{TimePickerDarkTheme}</h5>
              </div>
              <div className="card-body">
                <form className="theme-form">
                  <div className="form-group mb-0">
                    <TimePickerOne />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-12 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>{SetMultipleTimepicker}</h5>
              </div>
              <div className="card-body">
                <div className="clearfix">
                  <form className="theme-form">
                    <div className="form-group mb-0 mb-3">
                      <TimePickerThree />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TimePickerWrapper;
