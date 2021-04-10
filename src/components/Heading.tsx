import { ReactElement, ReactNode } from "react";

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

export function Container({
  heading,
  children,
}: {
  children: ReactNode;
} & typeof defaultContainerProps): ReactElement {
  return (
    <div>
      <h3>{heading}</h3>
      {children}
    </div>
  );
}

Container.defaultProps = defaultContainerProps;
