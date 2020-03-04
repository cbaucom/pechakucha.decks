/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children }) => (
  <main
    sx={{
      px: 3,
      py: 2,
      height: "calc(100% - 100px)",
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </main>
)
