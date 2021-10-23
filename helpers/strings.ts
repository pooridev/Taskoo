/**
 * @description Removes the falsy values from an array of strings,
 * and returns the result as string.
 * @param strings[] 
 * 
 */
export const removeFalseys = (...strings: string[]) =>
  strings.filter(Boolean).join(' ');
