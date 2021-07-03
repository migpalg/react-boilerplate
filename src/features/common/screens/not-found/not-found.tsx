// @components
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const NotFound: React.FC = () => {
  return (
    <Container>
      <Grid justify="center" container>
        <Grid xs={12} md={6} item>
          <Box marginY={6}>
            <Typography align="center" component="h2" variant="h3">
              Page not found :(
            </Typography>
            <Box marginTop={3}>
              <Typography align="center" variant="body1" color="textSecondary">
                Seems that the page you're looking for doesn't exists
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
