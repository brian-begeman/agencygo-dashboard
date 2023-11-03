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



const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleString('en-US', options);
};

const calculateFolderSize=(Contents)=> {
  if (Contents) {
    let totalSize = 0;
    for (const content of Contents) {
      totalSize += content.Size;
    }

    let sizeLabel;
    let formattedSize;

    if (totalSize < 1024) {
      sizeLabel = 'B';
      formattedSize = totalSize.toFixed(2);
    } else if (totalSize < 1024 * 1024) {
      sizeLabel = 'KB';
      formattedSize = (totalSize / 1024).toFixed(2);
    } else if (totalSize < 1024 * 1024 * 1024) {
      sizeLabel = 'MB';
      formattedSize = (totalSize / (1024 * 1024)).toFixed(2);
    } else {
      sizeLabel = 'GB';
      formattedSize = (totalSize / (1024 * 1024 * 1024)).toFixed(2);
    }
    return ` ${formattedSize} ${sizeLabel}`

  }
}


export { delay, isArray, arrGenerator,formatDate,calculateFolderSize };
