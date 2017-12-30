import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import styled, { keyframes } from "styled-components";

import { TABLE } from "../../../../constants/post-content/components";
import TableWrapper from "../../../PostPage/RenderedComponents/Table";
import { Form, InputField, TextAreaField } from "../../../Form";
import { SuccessButton, DangerButton } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";

const RemoveItemButton = DangerButton.extend`
  color: #fff;
  margin-left: 1em;
  padding: 0.5em 1em;
  border-radius: 50%;
  text-align: center;
  font-size: 1.1em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: 150ms ease-in;
  &:hover {
    background-color: #fff;
    color: ${p => p.theme.DANGER_COLOR};
  }
`;

const AddItemButton = RemoveItemButton.extend`
  background-color: ${p => p.theme.PRIMARY_COLOR};
`;

/**
 * @name Table
 * @desc Display a data as a grid
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Table extends React.Component {
  state = {
    meta: { name: "", description: "" },
    head: ["ชื่อจริง", "นามสกุล", "อายุ"],
    body: []
  };

  /**
   * @name submitHandler
   * @desc Append the <Table /> component to the 'receipe'
   * @param { description } : Describe what is presenting in the list
   * @param { items[string] } : Array of list items
   */
  submitHandler = values => {
    return console.log(values);
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (
      !description &&
      description !== "" &&
      (items.length && items.length > 0)
    ) {
      return;
    }

    addNewPostComponent({
      type: TABLE,
      order,
      data
    });

    hideAddPostComponentModal();
  };

  /**
   * @name addRowItem
   * @desc f() to add a new row item to the table
   */
  addRowItem = () =>
    this.setState(({ body }) => ({
      body: body.concat([
        {
          id: Math.ceil((Math.random() + (1 + Math.random())) * 100),
          items: [
            { column: "ชื่อจริง", data: "tony" },
            { column: "นามสกุล", data: "stark" },
            { column: "อายุ", data: "40" }
          ]
        }
      ])
    }));

  /**
   * @name removeRowItem
   * @desc f() to remove one particular row from the table, specifying by row ID
   * @param rowToRemove : An indentification of the row which will be removed
   */
  removeRowItem = rowToRemove =>
    this.setState(({ body }) => ({
      body: body.filter(rowItem => rowItem.id !== rowToRemove)
    }));

  /**
   * @name addColumnItem
   * @desc f() to add a new column item to the table
   */
  addColumnItem = () =>
    this.setState(({ head }) => ({
      head: head.concat("new column")
    }));

  /**
   * @name removeColumnItem (DO NOT USE THIS F(). IT DID NOT COMPLETED, YET!!!)
   * @desc f() to remove one particular column from the table, specifying by row ID
   * @param columnToRemove : An indentification of the column which will be removed
   */
  removeColumnItem = columnToRemove =>
    // we need to remove this.state.body[?].items[?].column === columnToRemove
    this.setState(({ head, body }) => ({
      head: head.filter(columnItem => columnItem !== columnToRemove)
    }));

  /**
   * @name renderRows
   * @desc f() to render a rows corresponding to the number of the current rows at the time
   */
  renderRows = () =>
    this.state.body.map((rowItem, i) => (
      <tr key={i + 1}>
        <td>{i + 1}</td>
        {rowItem.items.map((row, j) => <td key={j}>{row.data}</td>)}
        <td>
          <RemoveItemButton
            type="button"
            onClick={() => this.removeRowItem(rowItem.id)}
          >
            -
          </RemoveItemButton>
        </td>
      </tr>
    ));

  /**
   * @name renderColumns
   * @desc f() to render a tables's columns name
   */
  renderColumns = () => (
    <tr>
      <th>ลำดับ</th>
      {this.state.head.map((column, i) => <th>{column}</th>)}
      <th>
        <AddItemButton type="button" onClick={this.addColumnItem}>
          +
        </AddItemButton>
      </th>
    </tr>
  );

  /**
   * @name renderNewRowInput
   * @desc f() to render the corresponding number of row inputs to the number of table's columns
   */
  renderNewRowInput = () => {
    const { head, body } = this.state;
    return (
      <tr>
        <td>{/* Leave this blank */}</td>
        {head.map(column => (
          <td>
            <Field
              name={`${column}-${body.length + 1}`}
              component={InputField}
            />
          </td>
        ))}
        <td>
          <AddItemButton type="button" onClick={this.addRowItem}>
            +
          </AddItemButton>
        </td>
      </tr>
    );
  };

  render() {
    const { hideAddPostComponentModal, handleSubmit } = this.props;
    return [
      <Header>ตาราว</Header>,
      <Form onSubmit={e => e.preventDefault() & this.submitHandler(this.state)}>
        <Body>
          <Field
            name="name"
            label="ชื่อตารางนี้"
            component={InputField}
            type="text"
          />
          <Field
            name="description"
            label="คำอธิบายเกี่ยวกับตารางนี้"
            component={InputField}
            type="text"
          />
          <TableWrapper>
            <thead>{this.renderColumns()}</thead>
            <tbody>
              {this.renderRows()}
              {this.renderNewRowInput()}
            </tbody>
          </TableWrapper>
        </Body>
        <Footer>
          <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
          <DangerButton type="button" onClick={hideAddPostComponentModal}>
            ยกเลิก
          </DangerButton>
        </Footer>
      </Form>
    ];
  }
}

Table.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "table_component_data" })(Table);
