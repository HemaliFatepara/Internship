import React, { Component } from 'react';

// import { connect } from 'react-redux';
import TableComponent from './table';


let data = [];
let records = {};
let getIndex;

class Test extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      isEdit: false,
      updated: false,
    };
  }

  resetData = () => {
    records = {};
    this.setState({ fields: records });
  };

  onChangeState = (e) => {
    const {  errors } = this.state;
    let { value, name } = e.target;
    records[name] = value;
    errors[name] = '';
    this.setState({ fields: records });
  };

  handleValidation = (fields) => {
    let errors = {};
    let formIsValid = true;
    //Name
    if (fields) {
      if (!fields['name']) {
        formIsValid = false;
        errors['name'] = 'Cannot be empty';
      }
      //Name
      if (!fields['desc']) {
        formIsValid = false;
        errors['desc'] = 'Cannot be empty';
      }
      //Name
      if (!fields['date']) {
        formIsValid = false;
        errors['date'] = 'Cannot be empty';
      }
      //Name
      if (!fields['time']) {
        formIsValid = false;
        errors['time'] = 'Cannot be empty';
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  };

  onAdd = (e) => {
    e.preventDefault();

    if (this.handleValidation(records)) {
      data = JSON.parse(localStorage.getItem('dataItem')) || [];
      data.push(records);
      localStorage.setItem('dataItem', JSON.stringify(data));
      this.resetData(records);
    }
  };

  toEdit = (e, ele, rowIndex) => {
    getIndex = rowIndex;
    e.preventDefault();

    records = ele;
    this.setState({
      fields: ele,
      isEdit: true,
      update: false,
    });
  };

  toDelete = (e, rowIndex) => {
    e.preventDefault();
    const updateItem = JSON.parse(localStorage.getItem('dataItem'));
    updateItem.splice(rowIndex, 1);
    localStorage.setItem('dataItem', JSON.stringify(updateItem));
    this.setState({ updated: true, isEdit: false });
    this.resetData(records);
  };

  toEditUpdate = (e) => {
    e.preventDefault();
    if (this.handleValidation(records)) {
      const updateItem = JSON.parse(localStorage.getItem('dataItem'));
      updateItem[getIndex] = records;
      localStorage.setItem('dataItem', JSON.stringify(updateItem));
      this.setState({ isEdit: false, updated: true });
      this.resetData(records);
    }
  };

  render() {
    const {
      fields: { name, desc, date, time },
      isEdit,
    } = this.state;

    const dataItem = JSON.parse(localStorage.getItem('dataItem')) || [];

    return (
      <div>
        <form >
          <div>
            <div>
              <label htmlFor="name">
                Firstname
                <input
                  type="text"
                  value={name !== undefined ? name : ''}
                //   className="input"
                  name="name"
                  onChange={(e) => this.onChangeState(e)}
                /><br />
              </label>
              {/* <span style={{ color: 'red' }}>
                {this.state.errors && this.state.errors['name']}
              </span> */}
            </div><br />
          </div>
          <div>
            <div >
              <label htmlFor="desc">
                lastname
                <input
                  type="text"
                  value={desc !== undefined ? desc : ''}
                  className="input"
                  name="desc"
                  onChange={(e) => this.onChangeState(e)}
                />
              </label>
              {/* <span style={{ color: 'red' }}>
                {this.state.errors && this.state.errors['desc']}
              </span> */}
            </div><br /><br />
          </div>
          <div>
            <div>
              <label htmlFor="date">
                Email
                <input
                  type="text"
                  value={date !== undefined ? date : ''}
                  className="input"
                  name="date"
                  onChange={(e) => this.onChangeState(e)}
                />
              </label>
              <span style={{ color: 'red' }}>
                {this.state.errors && this.state.errors['date']}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="form-control">
              <label htmlFor="time" className="label">
                Time
                <input
                  type="text"
                  value={time !== undefined ? time : ''}
                  className="input"
                  name="time"
                  onChange={(e) => this.onChangeState(e)}
                />
              </label>
              <span style={{ color: 'red' }}>
                {this.state.errors && this.state.errors['time']}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="form-control">
              <button
                className="button-save"
                onClick={(e) => this.onAdd(e)}
                disabled={isEdit}
              >
                Save
              </button>
              {isEdit && (
                <button
                  className="button-save"
                  onClick={(e) => this.toEditUpdate(e)}
                >
                  Update
                </button>
              )}
            </div>
          </div>
        </form>
        <TableComponent
          tableData={dataItem}
          toEdit={this.toEdit}
          toDelete={this.toDelete}
          isUpated={this.state.updated}
        />
      </div>
    );
  }
}

// const mapStateToProps = () => {};

export default Test;


