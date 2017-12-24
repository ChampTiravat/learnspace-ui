import React from "react";
import styled from "styled-components";

const MapWrapper = styled.div`
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #ddd;
    }
`;

/**
 * @name Map
 * @desc Display a map from Google Map with a specific location, detemined by a post creator
 */
const Map = () => <MapWrapper>Map</MapWrapper>;

export default Map;
