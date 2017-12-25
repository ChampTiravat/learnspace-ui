import React from "react";
import styled from "styled-components";

import SubHeading from "./RenderedComponents/SubHeading";
import Attachment from "./RenderedComponents/Attachment";
import Paragraph from "./RenderedComponents/Paragraph";
import Slideshow from "./RenderedComponents/Slideshow";
import PostContentWrapper from "./PostContentWrapper";
import Heading from "./RenderedComponents/Heading";
import Image from "./RenderedComponents/Image";
import Table from "./RenderedComponents/Table";
import Video from "./RenderedComponents/Video";
import List from "./RenderedComponents/List";
import Map from "./RenderedComponents/Map";
import {
  HEADING,
  VIDEO,
  SUB_HEADING,
  PARAGRAPH,
  LIST,
  IMAGE,
  TABLE,
  SLIDE_SHOW,
  MAP,
  ATTACHMENT
} from "../../constants/post-content/components";

const AttachmentWrapper = styled.div`
  text-align: center;
`;

/**
 * @name PostContent
 * @desc Display post content
 */
class PostContent extends React.Component {
  state = {
    receipe: [
      { order: 0, type: HEADING, data: "โครงสร้างของอตอม" },
      { order: 1, type: VIDEO, data: { url: "http://video-url" } },
      { order: 2, type: SUB_HEADING, data: "ลักษณะของอตอมในอดีต" },
      {
        order: 3,
        type: PARAGRAPH,
        data:
          "แนวความคิดของ ลูซิพปุส (Leucippus) และดิโมคริตุส (Democritus) ยังคงแพรหลายอยู ห  ลายสิบป สสารทั้งหลายประกอบดวยอนุภาคที่เล็กที่สุดจนกระทั่งตอมาวิทยาศาสตรไดเจริญกาวหนาขึ้นและเกิดทฤษฎีอะตอมขึ้นมาในป ค.ศ.1808จากแนวความคิด ของจอหน ดาลตัน ผูเสนอจุดเริ่มตนของเคมียุคใหม่สมมติฐานเกียวกับธรรมชาติของสสารท ดาลตัน ไดเสนอคือแบบจําลองอะตอมเปนที่ยอมรับและสนับสนุนจากนักวิทยาศาสตรในสมัย นั้นโดยทฤษฎีอะตอมของดาลตันไดกลาวไววา 1. สสารทุกชนิดประกอบดวยอะตอมซึ่งเปนหนวยที่เล็กที่สุด ไมสามารถ แบงแยกไมอาจสรางขึ้นหรือทําลายได 2. ธาตุประกอบดวยอนุภาคที เ ่ รียกวาอะตอมอะตอมของธาตุชนิดเดียวกันม ลักษณะเหมือนกัน คือ มีมวล ขนาดและสมบัติทางเคมีเหมือนกัน และแตกตางจากอะตอม ของธาตุชนิดอื่น 3.สารประกอบเกิดจากการรวมตัวของอะตอมของธาตุตั้งแต 2 ชนิดขึ้นไป มารวมตัวกันดวยสัดสวนอะตอมที่คงที่และเปนเลขจํานวนเต็มหรือเศษสวนอยางงาย4. การเกิดปฏิกิร ย ิ าเคมีเกี่ยวของกับการแยก การรวม และการจัดอะตอมใหมเทานั้น ไมมีการสรางหรือการสูญหายของอะตอม"
      },
      {
        order: 4,
        type: LIST,
        data: {
          description: "สิ่งที่ควรรู้เกี่ยวกับอตอม",
          items: [
            "สสารทุกชนิดประกอบดวยอะตอม ซึ่งเปนหนวยที่เล็กที่สุดไมสามารถแบงแยก ไมอาจสรางขึ้นหรือทําลายได",
            "ธาตุประกอบดวยอนุภาคที่เรียกวาอะตอม อะตอมของธาตุชนิดเดียวกันมลักษณะเหมือนกัน คือ มีมวล ขนาด และสมบัติทางเคมีเหมือนกันและแตกตางจากอะตอม ของธาตุชนิดอื่น",
            "สารประกอบเกิดจากการรวมตัวของอะตอมของธาตุตั้งแต 2 ชนิดขึ้นไป"
          ]
        }
      },
      {
        order: 5,
        type: IMAGE,
        data: { url: "http://image-url", alt: "some-alt" }
      },
      { order: 6, type: SUB_HEADING, data: "การแผ่พลังงานของ Electron" },
      {
        order: 7,
        type: PARAGRAPH,
        data:
          "ในป 1913 นักฟสิกสชาวเดนมารกชื่อ นีล บอหร (Niels Bohr)เปนผูหนึ่งพยายามหาคําอธิบายเพิ่มเติมเกี่ยวกับแบบจําลองอะตอมของรัทเธอรฟอรดไดนําทฤษฎีกล ศาสตรควอนตัมมาประยุกตใชในการทดลองเพื่อพัฒนาแบบจําลองอะตอมของรัทเธอรฟอรด อีเล็กตรอนซึ่งมีประจุลบเคลือนที่รอบนิวเคลียสที่มีประจุบวกดวยแรงดึงดูดทางไฟฟาตามกฎ ของคูลอมบ(Coulomb) ที่สามารถอธิบายสเปกตรัมของอะตอมไฮโดรเจนที่มีเพียงอิเล็กตรอนตัวเดียวไดโดยไดเสนอแบบจําลองอะตอมของไฮโดรเจนวา 1.อิเล็กตรอนจะเคลื่อนที่เปนวงกลมรอบนิวเคลียสอิเล็กตรอนไมแผคลื่นแมเหล็กไฟฟาออกมาในวงโคจรดังกลาว ดวงอาทิตยสมมติฐานของบอหร สามารถอธิบายปญหาปรากฏการณของอะตอมไฮโดรเจนได คือ 1.เหตุผลที่อิเล็กตรอนโคจรรอบนิวเคลียสของไฮโดรเจนไดโดยไมแผคลื่นแมเหล็กไฟฟา เพราะอิเล็กตรอนโคจรในระดับพลังงานของอะตอมบางวง ซึ่งวงในสุดจะเสถียร 2. สเปกตรัมของไฮโดรเจนเกิดจากการเปลียนระดับพลังงานของอิเล็กตรอน จาก สถานะกระตุ น  มายังสถานะต่ํากวาหรือสถานะพืนจะแผคลื่นแมเหล็กไฟฟา ออกมาอาจเห็นเปนเสนสวางที่ไมตอเนืองและอาจมีความถี่อื่นๆอีกที่ตามองไม เห็น"
      },
      {
        order: 8,
        type: TABLE,
        data: {
          meta: {
            name: "รายชื่อที่เกี่ยวข้อง",
            description: "รายชื่อผู้ที่เกี่ยวข้องกับการดำเนินการในโครงงาน"
          },
          head: ["ลำดับ", "ชื่อ", "นามสกุล", "อายุ"],
          body: [
            [1, "Tony", "Stark", 35],
            [2, "Tony", "Stark", 35],
            [3, "Tony", "Stark", 35],
            [4, "Tony", "Stark", 35],
            [5, "Tony", "Stark", 35]
          ]
        }
      },
      {
        order: 9,
        type: PARAGRAPH,
        data:
          "ในป 1913 นักฟสิกสชาวเดนมารกชื่อ นีล บอหร (Niels Bohr)เปนผูหนึ่งพยายามหาคําอธิบายเพิ่มเติมเกี่ยวกับแบบจําลองอะตอมของรัทเธอรฟอรดไดนําทฤษฎีกล ศาสตรควอนตัมมาประยุกตใชในการทดลองเพื่อพัฒนาแบบจําลองอะตอมของรัทเธอรฟอรด อีเล็กตรอนซึ่งมีประจุลบเคลือนที่รอบนิวเคลียสที่มีประจุบวกดวยแรงดึงดูดทางไฟฟาตามกฎ ของคูลอมบ(Coulomb) ที่สามารถอธิบายสเปกตรัมของอะตอมไฮโดรเจนที่มีเพียงอิเล็กตรอนตัวเดียวไดโดยไดเสนอแบบจําลองอะตอมของไฮโดรเจนวา 1.อิเล็กตรอนจะเคลื่อนที่เปนวงกลมรอบนิวเคลียสอิเล็กตรอนไมแผคลื่นแมเหล็กไฟฟาออกมาในวงโคจรดังกลาว ดวงอาทิตยสมมติฐานของบอหร สามารถอธิบายปญหาปรากฏการณของอะตอมไฮโดรเจนได คือ 1.เหตุผลที่อิเล็กตรอนโคจรรอบนิวเคลียสของไฮโดรเจนไดโดยไมแผคลื่นแมเหล็กไฟฟา เพราะอิเล็กตรอนโคจรในระดับพลังงานของอะตอมบางวง ซึ่งวงในสุดจะเสถียร 2. สเปกตรัมของไฮโดรเจนเกิดจากการเปลียนระดับพลังงานของอิเล็กตรอน จาก สถานะกระตุ น  มายังสถานะต่ํากวาหรือสถานะพืนจะแผคลื่นแมเหล็กไฟฟา ออกมาอาจเห็นเปนเสนสวางที่ไมตอเนืองและอาจมีความถี่อื่นๆอีกที่ตามองไม เห็น"
      },
      {
        order: 10,
        type: SLIDE_SHOW,
        data: [
          { url: "http://image1", alt: "alt for image #1" },
          { url: "http://image2", alt: "alt for image #2" },
          { url: "http://image3", alt: "alt for image #3" },
          { url: "http://image4", alt: "alt for image #4" }
        ]
      },
      { order: 11, type: SUB_HEADING, data: "การแผ่พลังงานของ Electron" },
      {
        order: 12,
        type: PARAGRAPH,
        data:
          "ในป 1913 นักฟสิกสชาวเดนมารกชื่อ นีล บอหร (Niels Bohr)เปนผูหนึ่งพยายามหาคําอธิบายเพิ่มเติมเกี่ยวกับแบบจําลองอะตอมของรัทเธอรฟอรดไดนําทฤษฎีกล ศาสตรควอนตัมมาประยุกตใชในการทดลองเพื่อพัฒนาแบบจําลองอะตอมของรัทเธอรฟอรด อีเล็กตรอนซึ่งมีประจุลบเคลือนที่รอบนิวเคลียสที่มีประจุบวกดวยแรงดึงดูดทางไฟฟาตามกฎ ของคูลอมบ(Coulomb) ที่สามารถอธิบายสเปกตรัมของอะตอมไฮโดรเจนที่มีเพียงอิเล็กตรอนตัวเดียวไดโดยไดเสนอแบบจําลองอะตอมของไฮโดรเจนวา 1.อิเล็กตรอนจะเคลื่อนที่เปนวงกลมรอบนิวเคลียสอิเล็กตรอนไมแผคลื่นแมเหล็กไฟฟาออกมาในวงโคจรดังกลาว ดวงอาทิตยสมมติฐานของบอหร สามารถอธิบายปญหาปรากฏการณของอะตอมไฮโดรเจนได คือ 1.เหตุผลที่อิเล็กตรอนโคจรรอบนิวเคลียสของไฮโดรเจนไดโดยไมแผคลื่นแมเหล็กไฟฟา เพราะอิเล็กตรอนโคจรในระดับพลังงานของอะตอมบางวง ซึ่งวงในสุดจะเสถียร 2. สเปกตรัมของไฮโดรเจนเกิดจากการเปลียนระดับพลังงานของอิเล็กตรอน จาก สถานะกระตุ น  มายังสถานะต่ํากวาหรือสถานะพืนจะแผคลื่นแมเหล็กไฟฟา ออกมาอาจเห็นเปนเสนสวางที่ไมตอเนืองและอาจมีความถี่อื่นๆอีกที่ตามองไม เห็ในป 1913 นักฟสิกสชาวเดนมารกชื่อ นีล บอหร (Niels Bohr)เปนผูหนึ่งพยายามหาคําอธิบายเพิ่มเติมเกี่ยวกับแบบจําลองอะตอมของรัทเธอรฟอรดไดนําทฤษฎีกล ศาสตรควอนตัมมาประยุกตใชในการทดลองเพื่อพัฒนาแบบจําลองอะตอมของรัทเธอรฟอรด อีเล็กตรอนซึ่งมีประจุลบเคลือนที่รอบนิวเคลียสที่มีประจุบวกดวยแรงดึงดูดทางไฟฟาตามกฎ ของคูลอมบ(Coulomb) ที่สามารถอธิบายสเปกตรัมของอะตอมไฮโดรเจนที่มีเพียงอิเล็กตรอนตัวเดียวไดโดยไดเสนอแบบจําลองอะตอมของไฮโดรเจนวา 1.อิเล็กตรอนจะเคลื่อนที่เปนวงกลมรอบนิวเคลียสอิเล็กตรอนไมแผคลื่นแมเหล็กไฟฟาออกมาในวงโคจรดังกลาว ดวงอาทิตยสมมติฐานของบอหร สามารถอธิบายปญหาปรากฏการณของอะตอมไฮโดรเจนได คือ 1.เหตุผลที่อิเล็กตรอนโคจรรอบนิวเคลียสของไฮโดรเจนไดโดยไมแผคลื่นแมเหล็กไฟฟา เพราะอิเล็กตรอนโคจรในระดับพลังงานของอะตอมบางวง ซึ่งวงในสุดจะเสถียรน"
      },
      { order: 13, type: MAP, data: {} },
      {
        order: 14,
        type: ATTACHMENT,
        data: { filename: "very-hard-homework.pdf", size: "300", type: "PDF" }
      },
      {
        order: 15,
        type: ATTACHMENT,
        data: { filename: "very-hard-homework.pdf", size: "300", type: "PDF" }
      }
    ]
  };

  renderPostComponentsFromReceipe = () => {
    const { receipe } = this.state;
    return !receipe || receipe.length === 0
      ? null
      : receipe.map(component => {
          switch (component.type) {
            case HEADING:
              return <Heading key={component.order}>{component.data}</Heading>;
            case VIDEO:
              return <Video key={component.order} />;
            case SUB_HEADING:
              return (
                <SubHeading key={component.order}>{component.data}</SubHeading>
              );
            case PARAGRAPH:
              return (
                <Paragraph key={component.order}>{component.data}</Paragraph>
              );
            case LIST:
              return (
                <List
                  description={component.data.description}
                  key={component.order}
                >
                  {component.data.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </List>
              );
            case IMAGE:
              return (
                <Image
                  key={component.order}
                  src={component.data.url}
                  alt={component.data.alt}
                />
              );
            case TABLE:
              return (
                <Table
                  name={component.data.meta.name}
                  description={component.data.meta.description}
                >
                  <thead>
                    <tr>
                      {component.data.head.map((columnName, i) => (
                        <th key={i}>{columnName}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {component.data.body.map((dataRow, i) => (
                      <tr key={i}>
                        {dataRow.map((data, i) => <td key={i}>{data}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              );
            case SLIDE_SHOW:
              return (
                <Slideshow key={component.order} images={component.data} />
              );
            case MAP:
              return <Map key={component.order} />;
            case ATTACHMENT:
              return (
                <Attachment
                  key={component.order}
                  filename={component.data.filename}
                  size={component.data.size}
                  type={component.data.type}
                />
              );
            default:
              return null;
          }
        });
  };

  render() {
    return (
      <PostContentWrapper>
        {this.renderPostComponentsFromReceipe()}
      </PostContentWrapper>
    );
  }
}

export default PostContent;
