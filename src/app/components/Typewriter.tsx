import { useEffect, useState } from "react"

export default function Typewriter({ string }: any) {
    const [currentText, setCurrentText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < string.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + string[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, 30)
            return () => clearTimeout(timeout)
        }
    }, [currentIndex, string])

    return (
        <p className="header-paragraph">{currentText}</p>
    )
}