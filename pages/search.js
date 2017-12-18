import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import ClassroomResultGroup from "../core/components/SearchPage/ClassroomResultGroup";
import SearchHeaderPanel from "../core/components/SearchPage/SearchHeaderPanel";
import UserResultGroup from "../core/components/SearchPage/UserResultGroup";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import SearchPanel from "../core/components/SearchPage/SearchPanel";
import Container from "../core/components/Container";
import withData from "../core/withData";

class SearchPage extends React.Component {
  state = {
    query: "Introduction to Computer Science"
  };
  render() {
    const { query } = this.state;
    return [
      <Head>
        <title>ผลการค้นหา "{query}" | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <SearchHeaderPanel searchQuery={query} />
        <Container style={{ padding: "0", marginTop: "10em" }}>
          <SearchPanel />
          <ClassroomResultGroup />
          <UserResultGroup />
        </Container>
      </AuthenticatedLayout>
    ];
  }
}

export default withData(SearchPage);
