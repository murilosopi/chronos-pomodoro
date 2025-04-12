export const boldify = (text: string): React.ReactNode =>
  text
    .split("**")
    .map((fragment, index) =>
      index % 2 != 0 ? <strong>{fragment}</strong> : fragment
    );
