function delay(milliseconds: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

const isArray = (item: any): boolean => {
  return Array.isArray(item);
};

const arrGenerator = (val: number): number[] =>
  Array.from({ length: val }, (_, i) => i + 1);

export { delay, isArray, arrGenerator };
