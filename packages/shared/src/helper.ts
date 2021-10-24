export function toSmallHump(name: string) {
  const [c, ...other] = name;
  return c.toLowerCase() + other.join("");
}

export function em<T>(params: T, prefix = "", suffix = "") {
  if (typeof params === "number" || typeof params === "boolean") {
    return params;
  }
  return params ? prefix + params + suffix : "";
}
