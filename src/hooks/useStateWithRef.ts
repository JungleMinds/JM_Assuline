import { useState } from 'react'

const useStateWithRef = <T>(
  stateRef: { current: T },
  initialState?: T
): [T, (newState: T) => void] => {
  const [state, setState] = useState(initialState || stateRef.current)

  const setStateWitRefUpdate = (newState: T): void => {
    stateRef.current = newState
    setState(newState)
  }

  return [state, setStateWitRefUpdate]
}

export default useStateWithRef
