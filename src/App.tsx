import React from "react";
import {
  Heading,
  HeadingWithContent,
  Container,
  TextWithNumber,
} from "./components/Heading";
import "./App.css";

function App() {
  return (
    <div>
      <Heading title="Hey there"></Heading>
      <HeadingWithContent>
        <strong>Hello</strong>
      </HeadingWithContent>
      <Container>another hey</Container>
      <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
        {(num: number) => <div>Today is {num}</div>}
      </TextWithNumber>
    </div>
  );
}

export default App;
