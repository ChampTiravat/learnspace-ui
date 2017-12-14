import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { PrimaryButton } from "./Button";
import Card from "./Card";

const ClassroomPreviewWrapper = Card.extend`
  text-align: center;
  max-width: 800px;
  margin-top: 1.5em;
  margin-bottom: 3em;
  padding: 4em 3em;
`;

const PrimaryInfoItem = styled.div`
  margin-bottom: 2em;
  h2 {
    color: #777;
    font-weight: 400;
    font-size: 1.6em;
  }
  h1 {
    color: ${p => p.theme.primaryColor};
    font-size: 1.8em;
    font-weight: 400;
  }
  p {
    color: #777;
    margin: 0;
    font-size: 1.1em;
  }
`;

const ClassroomPreview = () => (
  <ClassroomPreviewWrapper>
    <PrimaryInfoItem>
      <h2>วิชาที่สอน</h2>
      <h1>วิทยาการคอมพิวเตอร์เบื้องต้น</h1>
    </PrimaryInfoItem>

    <PrimaryInfoItem>
      <h2>ผู้สอน</h2>
      <h1>Alan Turing</h1>
    </PrimaryInfoItem>

    <PrimaryInfoItem>
      <h2>คำอธิบาย</h2>
      <p>
        แนวความคิดของ ลูซิพปุส (Leucippus) และดิโมคริตุส (Democritus) ยังคง
        แพรหลายอยู ห  ลายสิบป สสารทั้งหลายประกอบดวยอนุภาคที่เล็กที่สุด
        จนกระทั่งตอมา
        วิทยาศาสตรไดเจริญกาวหนาขึ้นและเกิดทฤษฎีอะตอมขึ้นมาในป ค.ศ.1808
        จากแนวความคิด ของจอหน ดาลตัน ผูเสนอจุดเริ่มตนของเคมียุคใหม
        สมมติฐานเกี ย ่ วกับธรรมชาติของสสารท ดาลตัน ไดเสนอคือแบบจําลองอะตอม
        เปนที่ยอมรับและสนับสนุนจากนักวิทยาศาสตรในสมัย นั้น
        โดยทฤษฎีอะตอมของดาลตันไดกลาวไววา 1. สสารทุกชนิดประกอบดวยอะตอม
        ซึ่งเปนหนวยที่เล็กที่สุด ไมสามารถ แบงแยก ไมอาจสรางขึ้นหรือทําลายได
        2. ธาตุประกอบดวยอนุภาคที เ ่ รียกวาอะตอม อะตอมของธาตุชนิดเดียวกันม
        ลักษณะเหมือนกัน คือ มีมวล ขนาด และสมบัติทางเคมีเหมือนกัน
        และแตกตางจากอะตอม ของธาตุชนิดอื่น 3.
        สารประกอบเกิดจากการรวมตัวของอะตอมของธาตุตั้งแต 2 ชนิดขึ้นไป มา
        รวมตัวกันดวยสัดสวนอะตอมที่คงที่และเปนเลขจํานวนเต็มหรือเศษสวนอยางงาย
        4. การเกิดปฏิกิร ย ิ าเคมีเกี่ยวของกับการแยก การรวม และการจัดอะตอมใหม
        เทานั้น ไมมีการสรางหรือการสูญหายของอะตอม
      </p>
    </PrimaryInfoItem>
    <PrimaryButton>ส่งคำขอเข้าห้องเรียนนี้</PrimaryButton>
  </ClassroomPreviewWrapper>
);

export default ClassroomPreview;
