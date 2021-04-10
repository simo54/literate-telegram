import React from "react";
import { Heading, HeadingWithContent, Container } from "./components/Heading";
import "./App.css";

function App() {
  return (
    <div>
      <Heading title="Hey there"></Heading>
      <HeadingWithContent>
        <strong>Hello</strong>
      </HeadingWithContent>
      <Container>another hey</Container>
    </div>
  );
}

export default App;
