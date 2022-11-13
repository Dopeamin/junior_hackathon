import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  AppBar,
  Toolbar,
  Step,
  StepLabel,
  Stepper,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Header } from "../components/_shared/header";
import { Wrapper } from "../components/_shared/wrapper";

export default function SignUp() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Account Information",
    "Personal Information",
    "Recrutement Preferences",
  ];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AccountInformation />;
      case 1:
        return <PersonalInformation />;
    }
  }

  const AccountInformation = () => {
    return (
      <>
        <h1 className="font-semibold text-4xl mb-10">Account Information</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="repeatPassword"
              name="repeatPassword"
              label="Repeat Password"
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
      </>
    );
  };

  const PersonalInformation = () => {
    return (
      <>
        <h1 className="font-semibold text-4xl mb-10">Personal Information</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
            />
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <div className="bg-gray-100 min-h-[100vh] pb-10">
      <Header />
      <div className="pt-20">
        <Wrapper>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="bg-white rounded-2xl p-10 w-full max-w-[600px] flex flex-col">
            <div className="mb-10">{getStepContent(activeStep)}</div>

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }} 
                style={{color:"black"}}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                style={{background:"black"}}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? "Place order" : "Next"}
              </Button>
            </Box>
          </div>

          <p className="my-6 text-gray-600 text-sm">
            © 2022 All copytights reserved
          </p>
        </Wrapper>
      </div>
    </div>
  );
}
