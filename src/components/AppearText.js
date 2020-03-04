/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export default ({ children }) => (
  <Styled.h2
    sx={{
      color: "#003B5C",
      fontWeight: "display",
      textAlign: "center",
      width: "100%",
    }}
  >
    {children}
  </Styled.h2>
)
