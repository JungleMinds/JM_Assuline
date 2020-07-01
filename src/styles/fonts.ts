import { css } from "styled-components"

// Fonts
const families = {
  circular: `'CircularStd', sans-serif`,
  poppins: `'Poppins', sans-serif;`,
}

const faces = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
`

const settings = css`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
`

export { families, faces, settings }
