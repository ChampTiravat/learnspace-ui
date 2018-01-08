import React from "react";

import AuthenticatedLayout from "../core/components/Layout/AuthenticatedLayout";
import EditPostEditor from "../core/components/EditPostPage/EditPostEditor";
import Container from "../core/components/Container";
import withData from "../core/withData";

const EditPostPage = () => (
  <AuthenticatedLayout>
    <Container>
      <EditPostEditor />
    </Container>
  </AuthenticatedLayout>
);

export default withData(EditPostPage);
