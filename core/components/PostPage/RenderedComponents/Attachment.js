import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { PrimaryButton, LightButton } from "../../Button";
import Card from "../../Card";

const AttachmentCard = Card.extend`
  max-width: 400px;
  margin-top: 3em;
  margin-bottom: 0em;
  margin-left: 0.7em;
  margin-right: 0.7em;
  padding: 1em;
  display: inline-block;
`;

const FileInfoWrapper = styled.div`
  display: inline-block;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const FileInfo = styled.h4`
  display: block;
  color: #777;
  span {
    color: ${p => p.theme.PRIMARY_COLOR};
  }
`;

const FileImage = styled.img`
  background-color: #ddd;
  width: 100%;
  height: 200px;
`;

/**
 * @name Attachment
 * @desc Uses to display an available file attachment(s) for a particular post(this file is downloadable)
 * @prop filename : name of the file
 * @prop size     : size of the file(MBs)
 * @prop type     : type of the file
 */
const Attachment = ({ filename, size, type }) => (
  <AttachmentCard>
    <FileImage src={image} />
    <FileInfoWrapper>
      <FileInfo>
        File name: <span>{filename}</span>
      </FileInfo>
      <FileInfo>
        File size: <span>{size}</span>
      </FileInfo>
      <FileInfo>
        File type: <span>{type}</span>
      </FileInfo>
    </FileInfoWrapper>
    <PrimaryButton fluidWidth textCenter>
      ดาวน์โหลด
    </PrimaryButton>
  </AttachmentCard>
);

Attachment.propTypes = {
  filename: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default Attachment;
