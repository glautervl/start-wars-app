import React from "react";

import { Container, Title, Text, SubTitle } from "./styles";

const About: React.FunctionComponent<{}> = () => (
  <Container>
    <Title>About People Project</Title>
    <Text>
      The project People to display the characters from Star Wars movies was
      created using the default create-react-app tool for React projects
      creation.
    </Text>
    <SubTitle>Why am I seeing this page?</SubTitle>
    <Text>
      The purpose of this page is to have a simple internal routing system in
      this particular project in order to show how it should be configured to
      work with the single-spa routing without conflicts.
    </Text>
  </Container>
);

export default About;
