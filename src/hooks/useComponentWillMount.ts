import { useRef } from "react"

const useComponentWillMount = (func: () => void) => {
  const willMount = useRef(true)
  if (typeof window !== "undefined" && willMount.current) {
    func()
  }
  willMount.current = false
}

export default useComponentWillMount
