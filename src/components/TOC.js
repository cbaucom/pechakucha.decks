/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

const TOC = ({ children, opened }) => (
  <section
    sx={{
      position: "absolute",
      overflowY: "scroll",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      p: 0,
      m: 0,
      zIndex: 1000,
      transition: "all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transform: opened ? "translate3D(0, 0, 0)" : "translate3D(-100vw, 0, 0)",
      backgroundColor: "background",
    }}
  >
    {children}
  </section>
)

export default ({ opened }) => (
  <TOC opened={opened}>
    <Styled.h1 as="h2">
      <span role="img" aria-label="book">
        📖
      </span>{" "}
      Table of contents
    </Styled.h1>

    <Styled.ul
      sx={{
        listStyle: "none",
      }}
    >
      <Styled.li>
        <Styled.a as={Link} to="/1">
          What we "built"
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/2">
          Course curriculum
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/3">
          State
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/4">
          State Example
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/5">
          Controlled vs Uncontrolled Inputs
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/6">
          Controlled vs Uncontrolled Inputs Example
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/7">
          Effects
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/8">
          useEffect Example
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/9">
          Reducers
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/10">
          useReducer Example
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/11">
          React.memo
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/12">
          React.memo Example
        </Styled.a>
      </Styled.li>
      <Styled.li>
        <Styled.a as={Link} to="/13">
          Cool React Dev Tools Feature
        </Styled.a>
      </Styled.li>
    </Styled.ul>
  </TOC>
)
