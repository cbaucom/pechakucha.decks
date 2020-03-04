/** @jsx jsx */
import { jsx } from "theme-ui"
import { useDeck } from "gatsby-theme-mdx-deck"

export default ({ title }) => {
  const { index, length } = useDeck()
  // let timeLeft = 20
  // const timerId = setInterval(countdown, 1000)

  // function countdown() {
  //   if (timeLeft == -1) {
  //     clearTimeout(timerId)
  //   } else {
  //     document.getElementById("time-container").innerHTML =
  //       timeLeft + " seconds remaining"
  //     timeLeft--
  //   }
  // }

  return (
    <footer>
      <div
        sx={{
          variant: "footNotes",
          left: 0,
        }}
      >
        {title}
      </div>
      {/* <div
        id="time-container"
        sx={{
          variant: "footNotes",
        }}
      ></div> */}
      <div
        sx={{
          variant: "footNotes",
          right: 0,
        }}
      >
        {index + 1} / {length}
      </div>
    </footer>
  )
}
