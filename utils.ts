export function cx(...classNames: Array<string | object>) {
  let classNamesToBeReturned: string[] = [];

  classNames.filter(Boolean).forEach((className) => {
    if (typeof className === "string") {
      classNamesToBeReturned.push(className);
    } else {
      const entries = Object.entries(className);

      entries.forEach(([key, value]) => {
        if (value) {
          classNamesToBeReturned.push(key);
        }
      });
    }
  });

  return classNamesToBeReturned.join(" ");
}
