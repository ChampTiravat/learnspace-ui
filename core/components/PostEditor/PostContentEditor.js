import React from "react";
import styled from "styled-components";

import SetTitleCard from "./PostComponents/SetPostTitleCard";
import EmptyField from "./PostComponents/EmptyField";
import SlideShow from "./PostComponents/SlideShow";
import Heading from "./PostComponents/Heading";
import Table from "./PostComponents/Table";
import Image from "./PostComponents/Image";
import Map from "./PostComponents/Map";
import Card from "../Card";

/**
 * @name PostContentEditor
 * @desc Edit a content of the post
 */
class PostContentEditor extends React.Component {
  render() {
    return (
      <div>
        <SetTitleCard />
        <Card fluidWidth padding="2em" marginBottom="4em">
          <Heading />
          <Image />
          <Table />
          <Map />
          <SlideShow />
          <EmptyField />
        </Card>
      </div>
    );
  }
}

export default PostContentEditor;
