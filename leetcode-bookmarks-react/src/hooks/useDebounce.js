import { useEffect, useState } from 'react'

export const useDebounce = (value, delay = 300) => {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const t = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(t)
    }, [value, delay])

    return debounced
}
