const getStorage = () => (typeof window !== 'undefined' ? window.sessionStorage : null);

export const getStorageItem = <T>(key: string): T | null => {
  const localStorage = getStorage();
  if (!localStorage) return null;

  const str = localStorage.getItem(key);
  return str ? JSON.parse(str) : null;
};

export const updateStorageItem = <T>(key: string, data: T, force = false): void => {
  const localStorage = getStorage();
  if (!localStorage) return;

  const str = localStorage.getItem(key);
  const obj = str ? JSON.parse(str) : {};
  localStorage.setItem(key, JSON.stringify(force ? data : { ...obj, ...data }));
};
