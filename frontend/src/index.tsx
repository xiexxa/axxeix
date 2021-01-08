import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import AppBar from '@material-ui/core/AppBar'
import { Container, CssBaseline, Grid, Link, List, ListItem, ListItemText, Paper, Toolbar, Typography } from '@material-ui/core'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'

import Avator from '../public/images/icon.jpg'
import Favicon from '../public/images/favicon.jpg'
import AppleTouchIcon from '../public/images/apple-touch-icon.jpg'
import { teal } from '@material-ui/core/colors'

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  image: {
    borderRadius: "50%",
    border: "1px solid black"
  },
  icon: {
    margin: "1em"
  },
  footer: {
    padding: theme.spacing(2)
  }
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: teal[300]
    }
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
      <Helmet>
        <title>axxeix</title>
        <meta name="description" content="axxeix" />
        <meta name="author" content="axxeix" />
        <meta name="twitter:card" content="summary" />
        <link rel="shortcut icon" href={Favicon}/>
        <link rel="apple-touch-icon" href={AppleTouchIcon}/>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              <Link href="/" color="inherit">axxeix</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.hero}>
            <Container maxWidth="sm">
              <Grid container alignItems="center" justify="center">
                <img src={Avator} alt="アイコン画像" className={classes.image}></img>
              </Grid>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                axxeix
              </Typography>
              <Paper variant="outlined">
                <List>
                  <ListItem>
                    <TwitterIcon fontSize="small" className={classes.icon} />
                    <Link href="https://twitter.com/axxeix" target="_blank" rel="noopener">@axxeix</Link>
                  </ListItem>
                  <ListItem>
                    <InstagramIcon fontSize="small" className={classes.icon} />
                    <Link href="https://www.instagram.com/axxeix/" target="_blank" rel="noopener">axxeix</Link>
                  </ListItem>
                  <ListItem>
                    <FacebookIcon fontSize="small" className={classes.icon} />
                    <Link href="https://www.facebook.com/profile.php?id=100009399219311" target="_blank" rel="noopener">石川瑛祐</Link>
                  </ListItem>
                  <ListItem>
                    <AppleIcon fontSize="small" className={classes.icon} />
                    <Link href="https://music.apple.com/jp/playlist/0x07e5/pl.u-dEWjIdkyeD5" target="_blank" rel="noopener">Apple Music</Link>
                  </ListItem>
                </List>
              </Paper>
            </Container>
          </div>
        </main>
        <footer>
          <Typography align="center" color="secondary" className={classes.footer}>
            © 2021 axxeix
          </Typography>
        </footer>
      </ThemeProvider>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))