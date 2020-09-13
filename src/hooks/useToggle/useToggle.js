import { useState, useCallback } from "react";

/**
 * useToggle
 * @param {string} initialValue
 */
const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue((value) => !value));
  return [value, toggler];
};

export default useToggle;
