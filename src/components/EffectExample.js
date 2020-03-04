import React, { useState, useEffect } from "react"

function useMediaQuery(query) {
  const hasWindow = typeof window !== "undefined" && window.matchMedia(query)
  const [isWide, setIsWide] = useState(hasWindow.matches)

  // Subscribe to media query
  useEffect(() => {
    const media = hasWindow

    const listener = event => setIsWide(event.matches)
    media.addListener(listener)

    // cleanup
    return () => media.removeListener(listener)
  }, [query])

  return isWide
}

function EffectExample() {
  const query = "(min-width: 1000px)"

  let isWide = useMediaQuery(query)

  return (
    <div style={{ display: "flex", width: "100%", height: "80%" }}>
      <section style={{ backgroundColor: "cornflowerblue", width: "100%" }}>
        Main Content
      </section>

      {isWide && (
        <aside style={{ backgroundColor: "green", width: "100%" }}>
          <div>Sidebar</div>
        </aside>
      )}
    </div>
  )
}

export default EffectExample
