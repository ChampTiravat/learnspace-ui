import React from "react";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import PostEditor from "../core/components/PostEditor/PostEditor";
import Container from "../core/components/Container";
import withData from "../core/withData";
import PostComponentsSelectorModal from "../core/components/PostEditor/PostComponentsSelectorModal";

const CreatePostPage = () => (
  <AuthenticatedLayout>
    <Container transparent>
      <PostEditor />
    </Container>
  </AuthenticatedLayout>
);

export default withData(CreatePostPage);
