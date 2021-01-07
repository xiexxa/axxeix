import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from '@material-ui/core/AppBar'
import { Container, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Icon from './images/icon.jpg'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}))
function App() {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            axxeix
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.hero}>
          <Container maxWidth="sm">
            <img src={Icon} alt="アイコン画像"></img>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              axxeix
            </Typography>
          </Container>
        </div>
      </main>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))