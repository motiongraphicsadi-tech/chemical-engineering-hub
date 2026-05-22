export function formatTitle(slug: string) {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  
  export function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, "-");
  }