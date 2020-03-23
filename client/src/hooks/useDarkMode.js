import { useState } from 'react'

export const useDarkMode = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = JSON.parse(localStorage.getItem(key))
        return item ? item : initialValue
  })

  const setValue = () => {
    setStoredValue(!storedValue)
    console.log("dark mode clicked", storedValue)
    localStorage.setItem(key, JSON.stringify(!storedValue))
  }

  return [storedValue, setValue]
}
