import React from "react";
import PropTypes from "prop-types";

import { LIST } from "../../../../constants/post-content/components";
import { Form, InputGroup, Input, InputLabel } from "../../../Form";
import { CircleButton, Button } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";

/**
 * @name List
 * @desc Display a list with ordered items
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop useToAddComponent : Specify wether to use this modal to add new component or edit the one existed
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop editPostComponent : f() to edit an existing post component in the receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class List extends React.Component {
  state = {
    description: "",
    itemToAdd: "",
    items: []
  };

  /**
   * @name addComponentHandler()
   * @desc Append the <List /> component to the 'receipe'
   */
  addComponentHandler = () => {
    const { items, description } = this.state;

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
      type: LIST,
      data: { description, items: items.map(item => item.data) },
      order
    });

    hideAddPostComponentModal();
  };

  /**
   * @name editComponentHandler()
   * @desc Edit the specific <List /> component in the 'receipe'
   */
  editComponentHandler = () => {
    const { hideEditPostComponentModal, editPostComponent, order } = this.props;
    const { items, description } = this.state;

    if (
      !description &&
      description !== "" &&
      (items.length && items.length > 0)
    ) {
      return;
    }

    editPostComponent({
      newData: { description, items: items.map(item => item.data) },
      type: LIST,
      order
    });

    hideEditPostComponentModal();
  };

  /**
   * @name removeItem
   * @desc Remove one item from the list
   * @param itemToDelete : A list item to remove
   */
  removeItem = itemToRemove =>
    this.setState(({ items }) => ({
      items: items.filter(item => item.id !== itemToRemove.id)
    }));

  /**
   * @name addItem
   * @desc Add one item to the list
   */
  addItem = () => {
    this.setState(({ items }) => ({
      items: items.concat({
        id: Math.ceil((Math.random() + (1 + Math.random())) * 100),
        data: this.state.itemToAdd
      })
    }));
    this.setState({
      itemToAdd: ""
    });
  };

  /**
   * @name renderItems
   * @desc Render every items which have been added to the list with remove button
   */
  renderItems = () =>
    this.state.items.map(item => (
      <li
        key={item.id}
        style={{
          position: "relative",
          width: "90%",
          padding: "1.5em"
        }}
      >
        {item.data}
        <CircleButton
          danger
          type="button"
          position="absolute"
          top="1em"
          right="-4em"
          onClick={() => this.removeItem(item)}
        >
          -
        </CircleButton>
      </li>
    ));

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
      <Header>รายการ</Header>,
      <Form onSubmit={e => e.preventDefault() & submitHandler()}>
        <Body>
          <InputGroup>
            <InputLabel>รายการนี้เกี่ยวข้องกับอะไร</InputLabel>
            <Input
              type="text"
              name="description"
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
          </InputGroup>
          <ol>
            {this.renderItems()}
            <Input
              name="itemToAdd"
              value={this.state.itemToAdd}
              onChange={e => this.setState({ itemToAdd: e.target.value })}
            />
            <Button
              primary
              textCenter
              type="button"
              marginTop="1em"
              style={{ width: "90%" }}
              onClick={this.addItem}
            >
              + เพิ่มรายการ
            </Button>
          </ol>
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

List.propTypes = {
  useToAddComponent: PropTypes.bool.isRequired,
  hideAddPostComponentModal: PropTypes.func,
  addNewPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
  order: PropTypes.number.isRequired
};

export default List;
