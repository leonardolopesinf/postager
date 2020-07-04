import React from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'

import themes from '@styles/themes'
import GlobalStyle from '@styles/global'

import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import Main from '@components/Main'
import Results from '@components/Results'
import WindowsActions from '@components/WindowActions'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 10px;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  flex: 1;
  flex-direction: row;
`;

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Container>
        <Header />
        <Content>
          <Sidebar />
          <Main />
          <Results />
        </Content>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

render(<App />, mainElement)
