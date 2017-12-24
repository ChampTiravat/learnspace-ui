import React from "react";
import styled from "styled-components";

const MapWrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

/**
 * @name Map
 * @desc Display a map from Google Map with a specific location, detemined by a post creator
 */
const Map = () => <MapWrapper>Map</MapWrapper>;

export default Map;
