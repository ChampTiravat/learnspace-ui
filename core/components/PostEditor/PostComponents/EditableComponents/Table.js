import React from "react";
import PropTypes from "prop-types";

import { TABLE } from "../../../../constants/post-content/components";
import TableWrapper from "../../../PostPage/RenderedComponents/Table";
import { Button, CircleButton } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";
import {
  Form,
  Input,
  InputLabel,
  InputGroup,
  TextAreaField
} from "../../../Form";
import { map } from "async";

/**
 * @name Table
 * @desc Display a data as a grid
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop useToAddComponent : Specify wether to use this modal to add new component or edit the one existed
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop editPostComponent : f() to edit an existing post component in the receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Table extends React.Component {
  state = {
    description: "",
    columnToAdd: "",
    name: "",
    head: [],
    body: []
  };

  /**
   * @name addComponentHandler
   * @desc Append the <Table /> component to the 'receipe'
   */
  addComponentHandler = () => {
    const { body, name, description, head } = this.state;

    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (
      !head.length ||
      head.length === 0 ||
      !body.length ||
      body.length === 0
    ) {
      return null;
    }

    addNewPostComponent({
      type: TABLE,
      order,
      data: {
        meta: { name, description },
        head,
        body
      }
    });

    hideAddPostComponentModal();
  };

  /**
   * @name addComponentHandler
   * @desc Edit the specific <Table /> component in the 'receipe'
   */
  editComponentHandler = () => {
    const { hideEditPostComponentModal, editPostComponent, order } = this.props;
    const { body, name, description, head } = this.state;

    if (
      !head.length ||
      head.length === 0 ||
      !body.length ||
      body.length === 0
    ) {
      return null;
    }

    editPostComponent({
      type: TABLE,
      order,
      newData: {
        meta: { name, description },
        head,
        body
      }
    });

    hideEditPostComponentModal();
  };

  /**
   * @name addRowItem
   * @desc f() to add a new row item to the table
   */
  addRowItem = () => {
    const itemsToAdd = this.state.head.map(column => ({
      data: this.state[column],
      column
    }));

    this.setState(({ body }) => ({
      body: body.concat([
        {
          id: Math.ceil((Math.random() + (1 + Math.random())) * 100),
          items: itemsToAdd
        }
      ])
    }));
  };

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
  addColumnItem = () => {
    this.setState(({ head, columnToAdd }) => ({
      head: head.concat(columnToAdd)
    }));
    this.setState({
      columnToAdd: ""
    });
  };

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
          <CircleButton
            danger
            type="button"
            onClick={() => this.removeRowItem(rowItem.id)}
          >
            -
          </CircleButton>
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
        <Input
          type="text"
          name="newColumn"
          value={this.state.columnToAdd}
          placeholder="พิมพ์ชื่อคอลัมน์ที่ต้องการจะเพิ่มที่นี่"
          onChange={e => this.setState({ columnToAdd: e.target.value })}
        />
      </th>
      <th>
        <CircleButton primary type="button" onClick={this.addColumnItem}>
          +
        </CircleButton>
      </th>
    </tr>
  );

  /**
   * @name renderNewRowInput
   * @desc f() to render the corresponding number of row inputs to the number of table's columns
   */
  renderNewRowInput = () => {
    const { head, body } = this.state;
    if (!head.length || head.length === 0) {
      return null;
    }
    return (
      <tr>
        <td>{/* LEAVE THIS BLANK */}</td>
        {head.map(column => (
          <td>
            <Input
              type="text"
              name={column}
              value={this.state.body[column]}
              onChange={e => this.setState({ [column]: e.target.value })}
            />
          </td>
        ))}
        <td>{/* LEAVE THIS BLANK */}</td>
        <td>
          <CircleButton primary type="button" onClick={this.addRowItem}>
            +
          </CircleButton>
        </td>
      </tr>
    );
  };

  render() {
    const {
      hideAddPostComponentModal,
      hideEditPostComponentModal,
      useToAddComponent
    } = this.props;

    /*
      Specify the which f() will be used to hide this modal
      depending on wether this modal have been called as
      a modal to add new component or editing the new one
    */
    const hideThisModal = useToAddComponent
      ? hideAddPostComponentModal
      : hideEditPostComponentModal;

    /*
      Specify the which f() will be used to submit the form 
      depending on wether this modal have been called as
      a modal to add new component or editing the new one
    */
    const submitHandler = useToAddComponent
      ? this.addComponentHandler
      : this.editComponentHandler;

    return [
      <Header>ตาราง</Header>,
      <Form onSubmit={e => e.preventDefault() & submitHandler()}>
        <Body>
          <InputGroup>
            <InputLabel>ชื่อตารางนี้</InputLabel>
            <Input
              name="name"
              type="text"
              value={this.state.name}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>คำอธิบายเกี่ยวกับตารางนี้</InputLabel>
            <Input
              name="description"
              type="text"
              value={this.state.description}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
          </InputGroup>
          <TableWrapper
            description={this.state.description}
            name={this.state.name}
          >
            <thead>{this.renderColumns()}</thead>
            <tbody>
              {this.renderRows()}
              {this.renderNewRowInput()}
            </tbody>
          </TableWrapper>
        </Body>
        <Footer>
          <Button primary marginRight="0.5em">
            เสร็จสิ้น
          </Button>
          <Button light type="button" onClick={hideThisModal}>
            ยกเลิก
          </Button>
        </Footer>
      </Form>
    ];
  }
}

Table.propTypes = {
  useToAddComponent: PropTypes.bool.isRequired,
  hideAddPostComponentModal: PropTypes.func,
  addNewPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
  order: PropTypes.number.isRequired
};

export default Table;
