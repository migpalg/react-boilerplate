// @components
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

// @packages
import { useTheme, useMediaQuery } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

// @scripts
import { useStyles } from "./login.styles";
import { config } from "../../../../core";

const routes = config.routes.auth;

export const Login: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify={matches ? "center" : "flex-start"}
        className={classes.wrapper}
      >
        <Grid item md={4}>
          <Box marginTop={Number(!matches) && 2}>
            <Card>
              <CardContent>
                <Typography align="center" variant="h2" component="h2">
                  Sign In
                </Typography>
                <Typography
                  align="center"
                  variant="subtitle2"
                  color="textSecondary"
                >
                  Login into your account to get all the content
                </Typography>
                <form>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    margin="normal"
                    type="email"
                    variant="outlined"
                    autoFocus
                  />

                  <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    margin="normal"
                    type="password"
                    variant="outlined"
                  />

                  <Box marginTop={2}>
                    <Button variant="contained" color="primary" fullWidth>
                      Login
                    </Button>
                  </Box>
                </form>
                <Box marginTop={2}>
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="subtitle2"
                  >
                    Doesn't have an account?{" "}
                    <RouterLink to={`${routes.base}${routes.signUp}`}>
                      <Link component="span">Create one</Link>
                    </RouterLink>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box marginTop={2}>
            <Typography
              align="center"
              color="textSecondary"
              variant="subtitle2"
            >
              Developed by{" "}
              <Link
                href="https://github.com/migpalg"
                target="_blank"
                rel="noreferrer"
              >
                @migpalg
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
