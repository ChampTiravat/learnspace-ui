import React from "react";
import Head from "next/head";
import styled from "styled-components";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import PostCommentsPanel from "../core/components/PostCommentsPanel";
import Card, { Header, Body } from "../core/components/Card";
import NavigationBar from "../core/components/NavigationBar";
import ActivityPanel from "../core/components/ActivityPanel";
import Container from "../core/components/Container";
import Panel from "../core/components/Panel";
import withData from "../core/withData";

const PostPage = () => [
  <Head>
    <title>Introduction to Artificial Intelligence | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container>
      <Panel left width="60">
        <Card
          fluidWidth
          padding="5em 3em"
          style={{
            height: "auto",
            marginBottom: "6em",
            fontSize: "1.2em",
            color: "#555",
            textAlign: "left"
          }}
        >
          ช่วง หลัง ๆ มานี้ Token-based Authentication ถูกนำมาใช้แทน
          Cookie-based กันบ้างแล้ว ข้อดีคือเราเขียน code
          ครั้งเดียวสามารถใช้ได้กับทั้ง Web App และ Mobile App และสามารถใช้กับ
          Microservice ได้ด้วย แล้ว Token คืออะไรหล่ะ ?
          ถ้าจะให้อธิบายเป็นภาษาบ้าน ๆ ผมก็จะบอกว่า Token คือสิ่งที่ใช้แทน
          username และ password แต่การที่จะได้ Token มา ก็ต้องเอา
          username/password ไปแลกมานะ ใช้แทนยังไง ? เช่น ผมมี Microservice
          ที่เก็บข้อมูลสินค้าอย่างเดียว ไม่มี database ของ user ดังนั้น
          เราไม่สามารถส่ง username/password เพื่อไปขอข้อมูลกับ Microservice
          ตัวนี้ได้ เพราะมันไม่รู้ว่า username/password ที่ส่งมา มีตัวตนจริง ๆ
          หรือเปล่า… Token มีหลายประเภทครับ แต่ในบทความนี้ผมขอพูดถึง JSON Web
          Token ละกัน JSON Web Token (JWT) คืออะไร ? ตามตัวเลยครับ JWT คือ Token
          ที่เก็บ payload เป็น JSON JWT มีส่วนประกอบ 3 ส่วน คือ header, payload,
          และ signature Header — บอกว่า token นี้ เป็น JWT นะ
          แล้วก็บอกด้วยว่าตรง signature ใช้ algorithm อะไรเพื่อ verify
          Payload — เป็น JSON ที่เราเก็บไว้ใน token Signature  — ใช้เพื่อ verify
          ว่า token นี้ ถูกสร้างโดนคนที่มี secret เท่านั้น เกิดจากการนำ header
          กับ payload มาเข้ารหัสด้วย secret ข้อ ควรระวัง!!! — payload
          ไม่ได้ถูกเข้ารหัสนะ ถึงไม่มี secret ก็สามารถอ่านได้
          ดังนั้นห้ามเก็บข้อมูลสำคัญไว้ใน payload เช่น รหัสผ่าน
          สามารถอ่านรายละเอียดเพิ่มเติมเกี่ยวกับ JWT ได้ที่ https://jwt.io/
          <br />
          ช่วง หลัง ๆ มานี้ Token-based Authentication ถูกนำมาใช้แทน
          Cookie-based กันบ้างแล้ว ข้อดีคือเราเขียน code
          ครั้งเดียวสามารถใช้ได้กับทั้ง Web App และ Mobile App และสามารถใช้กับ
          Microservice ได้ด้วย แล้ว Token คืออะไรหล่ะ ?
          ถ้าจะให้อธิบายเป็นภาษาบ้าน ๆ ผมก็จะบอกว่า Token คือสิ่งที่ใช้แทน
          username และ password แต่การที่จะได้ Token มา ก็ต้องเอา
          username/password ไปแลกมานะ ใช้แทนยังไง ? เช่น ผมมี Microservice
          ที่เก็บข้อมูลสินค้าอย่างเดียว ไม่มี database ของ user ดังนั้น
          เราไม่สามารถส่ง username/password เพื่อไปขอข้อมูลกับ Microservice
          ตัวนี้ได้ เพราะมันไม่รู้ว่า username/password ที่ส่งมา มีตัวตนจริง ๆ
          หรือเปล่า… Token มีหลายประเภทครับ แต่ในบทความนี้ผมขอพูดถึง JSON Web
          Token ละกัน JSON Web Token (JWT) คืออะไร ? ตามตัวเลยครับ JWT คือ Token
          ที่เก็บ payload เป็น JSON JWT มีส่วนประกอบ 3 ส่วน คือ header, payload,
          และ signature Header — บอกว่า token นี้ เป็น JWT นะ
          แล้วก็บอกด้วยว่าตรง signature ใช้ algorithm อะไรเพื่อ verify
          Payload — เป็น JSON ที่เราเก็บไว้ใน token Signature  — ใช้เพื่อ verify
          ว่า token นี้ ถูกสร้างโดนคนที่มี secret เท่านั้น เกิดจากการนำ header
          กับ payload มาเข้ารหัสด้วย secret ข้อ ควรระวัง!!! — payload
          ไม่ได้ถูกเข้ารหัสนะ ถึงไม่มี secret ก็สามารถอ่านได้
          ดังนั้นห้ามเก็บข้อมูลสำคัญไว้ใน payload เช่น รหัสผ่าน
          สามารถอ่านรายละเอียดเพิ่มเติมเกี่ยวกับ JWT ได้ที่ https://jwt.io/kk
          ช่วง หลัง ๆ มานี้ Token-based Authentication ถูกนำมาใช้แทน
          Cookie-based กันบ้างแล้ว ข้อดีคือเราเขียน code
          ครั้งเดียวสามารถใช้ได้กับทั้ง Web App และ Mobile App และสามารถใช้กับ
          Microservice ได้ด้วย แล้ว Token คืออะไรหล่ะ ?
          ถ้าจะให้อธิบายเป็นภาษาบ้าน ๆ ผมก็จะบอกว่า Token คือสิ่งที่ใช้แทน
          username และ password แต่การที่จะได้ Token มา ก็ต้องเอา
          username/password ไปแลกมานะ ใช้แทนยังไง ? เช่น ผมมี Microservice
          ที่เก็บข้อมูลสินค้าอย่างเดียว ไม่มี database ของ user ดังนั้น
          เราไม่สามารถส่ง username/password เพื่อไปขอข้อมูลกับ Microservice
          ตัวนี้ได้ เพราะมันไม่รู้ว่า username/password ที่ส่งมา มีตัวตนจริง ๆ
          หรือเปล่า… Token มีหลายประเภทครับ แต่ในบทความนี้ผมขอพูดถึง JSON Web
          Token ละกัน JSON Web Token (JWT) คืออะไร ? ตามตัวเลยครับ JWT คือ Token
          ที่เก็บ payload เป็น JSON JWT มีส่วนประกอบ 3 ส่วน คือ header, payload,
          และ signature Header — บอกว่า token นี้ เป็น JWT นะ
          แล้วก็บอกด้วยว่าตรง signature ใช้ algorithm อะไรเพื่อ verify
          Payload — เป็น JSON ที่เราเก็บไว้ใน token Signature  — ใช้เพื่อ verify
          ว่า token นี้ ถูกสร้างโดนคนที่มี secret เท่านั้น เกิดจากการนำ header
          กับ payload มาเข้ารหัสด้วย secret ข้อ ควรระวัง!!! — payload
          ไม่ได้ถูกเข้ารหัสนะ ถึงไม่มี secret ก็สามารถอ่านได้
          ดังนั้นห้ามเก็บข้อมูลสำคัญไว้ใน payload เช่น รหัสผ่าน
          สามารถอ่านรายละเอียดเพิ่มเติมเกี่ยวกับ JWT ได้ที่ https://jwt.io/
        </Card>
      </Panel>
      <Panel right style={{ position: "fixed", marginLeft: "2em" }}>
        <PostCommentsPanel />
      </Panel>
      <ActivityPanel />
    </Container>
  </AuthenticatedLayout>
];

export default withData(PostPage);
