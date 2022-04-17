export const useStorage = <T>(key: string) => {
  const save = (objToSave: T): void => {
    const json = JSON.stringify(objToSave);
    localStorage.setItem(key, json);
  };

  const load = (): T | null => {
    const loadedJson = localStorage.getItem(key);

    if (loadedJson === null) {
      return null;
    }

    let loadedObj: T | null = null;
    try {
      loadedObj = JSON.parse(loadedJson);
    } catch {
      // clear saved settings if JSON is invaliid
      localStorage.removeItem(key);
    }

    return loadedObj;
  };

  return [save, load] as const;
};
