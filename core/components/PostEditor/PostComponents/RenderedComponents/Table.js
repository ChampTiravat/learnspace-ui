import React from "react";

import { SuccessButton, DangerButton } from "../../../Button";
import Card, { Body, Footer } from "../../../Card";

/**
 * @name Table
 * @desc Display a data as a grid
 */
const Table = () => (
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
);

export default Table;
