/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ close }) => (
  <button
    sx={{
      p: 1,
      border: "none",
      appearance: "none",
      backgroundColor: "transparent",
      outline: "none",
      transition: "all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      opacity: 1,
      zIndex: 2000,
      "&:hover": {
        opacity: "0.75",
        transform: "scale(1.15) rotate(-15deg)",
      },
    }}
    onClick={close}
  >
    <svg
      width="48px"
      height="48px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 232.2 207.9"
      style={{ enableBackground: "new 0 0 232.2 207.9" }}
      xmlSpace="preserve"
    >
      <g id="Layer_3" style={{ display: "none" }}></g>
      <g>
        <g>
          <polyline
            fill="#FFA06A"
            points="93.5,208.2 153,208.2 232.2,208.2 232.2,0 199,0 33.1,0 0,0 0,208.2 33.1,208.2"
          />
          <g>
            <path
              fill="#FFF"
              d="M101,61.9v22.7c0,2.4,0,4.2-1.1,14.4h0.2c3.3-7.7,9.6-11.9,19-11.9c13,0,21.7,9.8,21.7,25.7
							c0,19.2-10.5,33.1-31.4,33.1c-8.3,0-18.8-2-23.5-4.7V72.8h-8.6v-11L101,61.9L101,61.9z M100.7,131.5c2.1,1.2,6.2,2,9.6,2
							c9.9,0,15.6-8,15.6-19.1c0-9.6-4.2-15.1-12.2-15.1c-8.3,0-12.9,5.6-12.9,13.9L100.7,131.5L100.7,131.5z"
            />
            <circle fill="#FFF" cx="152.9" cy="136.6" r="9.7" />
          </g>
        </g>
      </g>
    </svg>
  </button>
)
