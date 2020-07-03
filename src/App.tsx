import React from 'react'
import { render } from 'react-dom'
import GlobalStyle from './styles/global'
import { Container } from './styled/Home/common'
import Counter from './components/Home/Counter/Counter'
import { ThemeProvider } from 'styled-components'
import themes from './styles/themes'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Container>
        <Counter />
      </Container>
    </ThemeProvider>
  )
}

render(<App />, mainElement)
