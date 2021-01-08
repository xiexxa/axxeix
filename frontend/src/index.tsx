import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from '@material-ui/core/AppBar'
import { Container, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'

import Icon from '../public/images/icon.jpg'
import { teal } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  image: {
    borderRadius: "50%",
    border: "1px solid black"
  }
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: '#00bcd4'
    }
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              axxeix
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.hero}>
            <Container maxWidth="sm">
              <Grid container alignItems="center" justify="center">
                <img src={Icon} alt="アイコン画像" className={classes.image}></img>
              </Grid>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                axxeix
              </Typography>
            </Container>
          </div>
        </main>
      </ThemeProvider>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))