import "katex/dist/katex.min.css";

import katex from "katex";



export default function KatexDebug() {
  const matrix = katex.renderToString(
    String.raw`\begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix}`,
    {
      throwOnError: false,
      displayMode: true,
    }
  );

  const fraction = katex.renderToString(
    String.raw`\frac{a+b}{c+d}`,
    {
      throwOnError: false,
      displayMode: true,
    }
  );

  const laplace = katex.renderToString(
    String.raw`F(s)=\int_0^\infty e^{-st}f(t)\,dt`,
    {
      throwOnError: false,
      displayMode: true,
    }
  );

  const transfer = katex.renderToString(
    String.raw`G(s)=\frac{K}{\tau s+1}`,
    {
      throwOnError: false,
      displayMode: true,
    }
  );

  return (
    <div
      style={{
        background: "white",
        color: "black",
        padding: "40px",
      }}
    >
      <h1>KaTeX Debug</h1>

      <h2>Fraction</h2>
      <div dangerouslySetInnerHTML={{ __html: fraction }} />

      <h2>Laplace</h2>
      <div dangerouslySetInnerHTML={{ __html: laplace }} />

      <h2>Transfer Function</h2>
      <div dangerouslySetInnerHTML={{ __html: transfer }} />

      <h2>Matrix</h2>
      <div dangerouslySetInnerHTML={{ __html: matrix }} />
    </div>
  );
}