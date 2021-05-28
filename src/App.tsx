import React from "react";
import {
  Heading,
  HeadingWithContent,
  Container,
  TextWithNumber,
  List,
  MyHeading,
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
      <List
        items={["Test01", "another hey", "tested"]}
        render={(item: string) => <div>{item.toLowerCase()}</div>}
      ></List>
      <MyHeading title="Im a class"></MyHeading>
    </div>
  );
}

export default App;
