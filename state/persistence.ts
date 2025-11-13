const STORAGE_KEY = 'keyboard-chatter-state';
const LEGACY_SETTINGS_KEY = 'persist:settings';
const LEGACY_KEYBOARD_KEY = 'persist:keyboard';

const isBrowser = () => typeof window !== 'undefined';

const parseJson = (value: string) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn('Failed to parse persisted state', error);
    return undefined;
  }
};

const readLegacyPersistEntry = (key: string): unknown => {
  if (!isBrowser()) {
    return undefined;
  }

  try {
    const raw = window.localStorage.getItem(key);

    if (!raw) {
      return undefined;
    }

    const parsed = parseJson(raw);
    if (!parsed || typeof parsed !== 'object') {
      return undefined;
    }

    const state = (parsed as { state?: unknown }).state;

    if (typeof state === 'string') {
      return parseJson(state);
    }

    return state ?? undefined;
  } catch (error) {
    console.warn('Failed to read legacy persisted state', error);
    return undefined;
  }
};

const migrateLegacyState = (): unknown => {
  if (!isBrowser()) {
    return undefined;
  }

  const legacySettings = readLegacyPersistEntry(LEGACY_SETTINGS_KEY);
  const legacyKeyboard = readLegacyPersistEntry(LEGACY_KEYBOARD_KEY);

  if (!legacySettings && !legacyKeyboard) {
    return undefined;
  }

  const state: Record<string, unknown> = {};

  if (legacySettings && typeof legacySettings === 'object') {
    state.settings = legacySettings;
  }

  if (legacyKeyboard && typeof legacyKeyboard === 'object') {
    const { keys: rawKeys } = legacyKeyboard as { keys?: unknown };
    const keys =
      rawKeys && typeof rawKeys === 'object' && rawKeys !== null ? rawKeys : {};

    state.keyboard = {
      keys,
      input: '',
    };
  }

  if (!state.keyboard && state.settings) {
    state.keyboard = {
      keys: {},
      input: '',
    };
  }

  if (!state.settings && !state.keyboard) {
    return undefined;
  }

  return state;
};

export const loadPersistedState = <T>(
  parse: (raw: unknown) => T | undefined
): T | undefined => {
  if (!isBrowser()) {
    return undefined;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (raw) {
      const parsed = parseJson(raw);
      const result = parse(parsed);

      if (result !== undefined) {
        return result;
      }
    }
  } catch (error) {
    console.warn('Failed to load persisted state', error);
  }

  const migratedState = migrateLegacyState();

  if (migratedState) {
    const parsed = parse(migratedState);

    if (parsed !== undefined) {
      persistState(parsed);

      try {
        window.localStorage.removeItem(LEGACY_SETTINGS_KEY);
        window.localStorage.removeItem(LEGACY_KEYBOARD_KEY);
      } catch (error) {
        console.warn('Failed to clear legacy persisted state', error);
      }

      return parsed;
    }
  }

  return undefined;
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
