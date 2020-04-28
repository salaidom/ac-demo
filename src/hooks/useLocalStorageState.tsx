import { useEffect, useState, Dispatch, SetStateAction } from 'react'

export default function useLocalStorageState<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : defaultValue
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  return [state, setState]
}
