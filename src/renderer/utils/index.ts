function delay(milliseconds: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

const isArray = (item: any): boolean => {
  return Array.isArray(item);
};

export { delay, isArray };
