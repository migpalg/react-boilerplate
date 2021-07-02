// @components
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

// @packages
import { Link as RouterLink } from "react-router-dom";

// @scripts
import { config } from "../../../../core";

const routes = config.routes.auth;

export const SignUp: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box marginBottom={4} marginTop={2}>
        <Typography variant="h2" component="h2">
          Sign Up
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth id="name" label="Name" variant="outlined" />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="repeat-password"
            label="Repeat password"
            type="password"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Box marginTop={2}>
        <Button variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle2" color="textSecondary" align="center">
          Already have an account?{" "}
          <RouterLink to={`${routes.base}${routes.login}`}>
            <Link component="span">Login Instead</Link>
          </RouterLink>
        </Typography>
      </Box>
    </Container>
  );
};
