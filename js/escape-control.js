const windows = [];
let listener = null;

const onDocumentKeydown = ({ key }) => {
  if (key === 'Escape') {
    const index = windows.length - 1;
    if (windows[index].condition && !windows[index].condition()) {
      return;
    }
    windows[index].closeFunction();
    windows.length = windows.length - 1;
    if (!windows.length) {
      listener = null;
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  }
};

export const setEscapeControl = (closeFunction, condition = null) => {
  windows.push({
    closeFunction,
    condition
  });
  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentKeydown);
  }
};

export const removeEscapeControl = () => {
  const index = windows.length - 1;
  windows.length = windows.length - 1;
  if (!windows.length) {
    listener = null;
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};
