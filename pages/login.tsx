import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { Header } from "../components/_shared/header";
import { Wrapper } from "../components/_shared/wrapper";

export default function Login() {
  return (
    <div className="bg-gray-100 min-h-[100vh] pb-10">
      <Header />
      <div className="flex flex-col pt-20 w-full">
        <Wrapper>
          <div className="flex flex-col rounded-2xl bg-white w-full max-w-[500px] p-10 gap-4">
            <h1 className="font-semibold text-4xl mb-4">Login</h1>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              type="email"
              autoComplete="email"
              variant="standard"
            />
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              type="password"
              variant="standard"
            />

            <FormControlLabel
              control={
                <Checkbox color="default" name="saveAddress" value="yes" />
              }
              label="Remember me"
            />
            <div className="flex flex-row gap-4">
              <Button
                variant="outlined"
                style={{ color: "black", borderColor: "black" }}
                sx={{ mt: 3 }}
              >
                Signup
              </Button>
              <Button
                className="flex-1"
                variant="contained"
                style={{ background: "black" }}
                sx={{ mt: 3 }}
              >
                Login
              </Button>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
