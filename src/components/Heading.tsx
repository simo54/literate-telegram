import { ReactElement, ReactNode, useState } from "react";

// Conventional props
export function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

export function HeadingWithContent({
  children,
}: {
  children: ReactNode;
}): ReactElement | null {
  return <h2>{children}</h2>;
}

// Default props
const defaultContainerProps = {
  heading: <strong>My Heading with strong tag</strong>,
};

type ContainerProps = {
  children: ReactNode;
} & typeof defaultContainerProps;

export function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h3>{heading}</h3>
      {children}
    </div>
  );
}

Container.defaultProps = defaultContainerProps;

// Functional Props
export function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, stateSet] = useState<number>(1);

  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  );
}

// List (Generics)
export function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}
