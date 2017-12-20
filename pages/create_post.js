import React from "react";

import PostComponentsSelectorModal from "../core/components/PostEditor/PostComponentsSelectorModal";
import AuthenticatedLayout from "../core/components/Layout/AuthenticatedLayout";
import PostEditor from "../core/components/PostEditor/PostEditor";
import Container from "../core/components/Container";
import withData from "../core/withData";

const CreatePostPage = () => (
  <AuthenticatedLayout>
    <Container transparent>
      <PostEditor />
    </Container>
  </AuthenticatedLayout>
);

export default withData(CreatePostPage);
