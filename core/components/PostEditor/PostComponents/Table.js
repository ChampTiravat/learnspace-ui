import React from "react";

import { SuccessButton, DangerButton } from "../../Button";
import Card, { Body, Footer } from "../../Card";

/**
 * @name Table
 * @desc Display a data as a grid
 */
const Table = () => (
  <Card fluidWidth marginBottom="2em">
    <Body>
      <table>
        <tbody>
          <tr>
            <td>first name</td>
            <td>last name</td>
            <td>age</td>
          </tr>
          <tr>
            <td>Tony</td>
            <td>Stark</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Tony</td>
            <td>Stark</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Tony</td>
            <td>Stark</td>
            <td>35</td>
          </tr>
        </tbody>
      </table>
    </Body>
    <Footer>
      <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
      <DangerButton>ยกเลิก</DangerButton>
    </Footer>
  </Card>
);

export default Table;
