export const isBiggerOrEqual = (size: number) =>
  typeof window !== "undefined" && window.innerWidth >= size
