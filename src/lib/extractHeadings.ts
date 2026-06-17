export function extractHeadings(
    content: string
  ) {
  
    const headings =
      content
        .split("\n")
        .filter((line) =>
          line.startsWith("# ")
        )
        .map((line) =>
          line.replace("# ", "")
        );
  
    return headings;
  }