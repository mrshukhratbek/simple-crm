//@mui
import { Container, Typography, Box, Stack, Alert } from '@mui/material';
//@components
import { LoginForm } from '../molecules';

function Login() {
  return (
    <>
      <Container maxWidth="sm">
        <Stack sx={{ py: 12 }}>
          <Stack sx={{ mb: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                Sign in to CRM
              </Typography>
            </Box>
          </Stack>

          <Alert severity="info" sx={{ mb: 3 }}>
            Use email : <strong>demo@crm.system</strong> / password :<strong>demo123</strong>
          </Alert>

          <LoginForm />
        </Stack>
      </Container>
    </>
  );
}

export default Login;
