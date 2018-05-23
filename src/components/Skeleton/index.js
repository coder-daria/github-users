// Dependencies
import * as React from "react";
// Custom
import { Container, Img, Text } from "./styles";

const Skeleton = () => (
  <Container>
    <Text>Loading data...</Text>
    <Img src="https://i.pinimg.com/originals/78/76/94/787694fd5d0ee04baf699ce7085a9f1d.jpg" />
  </Container>
);

export default Skeleton;
