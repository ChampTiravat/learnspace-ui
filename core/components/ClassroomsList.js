import React from "react";

import Card from "./Card";
import ClassroomProfilePic from "./ClassroomProfilePic";

const ClassroomsList = () => (
  <div
    style={{
      marginTop: "1.5em",
      overflowY: "scroll",
      height: "500px"
    }}
  >
    <Card
      large
      marginBottom="1em"
      padding="4em"
      style={{ position: "relative" }}
    >
      <div>
        <h3>Introduction to AI</h3>
        <p>ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก</p>
      </div>
      <ClassroomProfilePic />
    </Card>

    <Card
      large
      marginBottom="1em"
      padding="4em"
      style={{ position: "relative" }}
    >
      <div>
        <h3>Introduction to AI</h3>
        <p>ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก</p>
      </div>
      <ClassroomProfilePic />
    </Card>
    <Card
      large
      marginBottom="1em"
      padding="4em"
      style={{ position: "relative" }}
    >
      <div>
        <h3>Introduction to AI</h3>
        <p>ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก</p>
      </div>
      <ClassroomProfilePic />
    </Card>
  </div>
);

export default ClassroomsList;
