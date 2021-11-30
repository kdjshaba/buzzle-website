import { AppBar, Container, Typography, Toolbar } from "@material-ui/core";

export default function Footer() {
  return (
    <AppBar position="static" color="white">
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            style={{ marginRight: "30%" }}
          >
            © 2021 Buzzle
          </Typography>

          <Typography align="center" variant="body1" color="inherit">
            Made with ❤️ in MTL
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
