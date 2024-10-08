export const Keys: <T = Record<string, any>>(obj: T) => (keyof T)[] = (obj) => {
  return Object.keys(obj as Record<string, any>) as any;
};

export function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, fields: K[]): Omit<T, K> {
  const clone = { ...obj };

  if (Array.isArray(fields)) {
    fields.forEach((key) => {
      delete clone[key];
    });
  }

  return clone;
}
