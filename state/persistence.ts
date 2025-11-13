const STORAGE_KEY = 'keyboard-chatter-state';

const isBrowser = () => typeof window !== 'undefined';

export const loadPersistedState = <T>(
  parse: (raw: unknown) => T | undefined
): T | undefined => {
  if (!isBrowser()) {
    return undefined;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return undefined;
    }

    const parsed = JSON.parse(raw);
    return parse(parsed);
  } catch (error) {
    console.warn('Failed to load persisted state', error);
    return undefined;
  }
};

export const persistState = (value: unknown) => {
  if (!isBrowser()) {
    return;
  }

  try {
    const serialized = typeof value === 'string' ? value : JSON.stringify(value);
    window.localStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    console.warn('Failed to persist state', error);
  }
};

export const setupStorePersistence = (
  subscribe: (listener: () => void) => () => void,
  getState: () => unknown,
  selectState: (state: unknown) => unknown
) => {
  if (!isBrowser()) {
    return () => undefined;
  }

  let previousSerialized: string | undefined;

  const handleChange = () => {
    const state = selectState(getState());
    const serialized = JSON.stringify(state);

    if (serialized !== previousSerialized) {
      previousSerialized = serialized;
      persistState(serialized);
    }
  };

  handleChange();

  return subscribe(handleChange);
};
