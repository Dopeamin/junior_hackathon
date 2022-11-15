import {
  Box,
  Button,
  Grid,
  LinearProgress,
  LinearProgressProps,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ArrowRightIcon } from "../_shared/icons/arrow-right.icon";
import { UserBarMinimized } from "./userbar";

export const Applicant = () => {
  function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
  ) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )/100}`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <div>
      <div className="flex flex-row-reverse w-full">
        <div className="flex-1 min-h-screen">
          <iframe src="/application.pdf" className="w-full h-full"></iframe>
        </div>
        <div className="flex-1">
          <div className="p-10">
            <div className="relative z-20 flex flex-row gap-4 items-center mb-10">
              <Link href="/dashboard/applications/1">
                <div className="rotate-180 mb-1">
                  <ArrowRightIcon />
                </div>
              </Link>
              <div className="relative z-20 flex flex-row justify-between w-full items-end">
                <h1 className="text-2xl font-bold text-blue-800 tracking-widest mb-2">
                  Applicant Information
                </h1>
                <UserBarMinimized />
              </div>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  value="Mohamed Amine"
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
                  value="Hamdouni"
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
                  value="Tunis, Tunisia"
                  autoComplete="shipping address-line1"
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
                  value="Tunis"
                  autoComplete="shipping address-level2"
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
                  value="Tunisia"
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Languages Spoken"
                  fullWidth
                  value="French , arabic , english"
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="age"
                  name="age"
                  label="Age"
                  type="number"
                  fullWidth
                  value="22"
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="gender"
                  name="gender"
                  label="Gender"
                  type="text"
                  fullWidth
                  value="Male"
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="disability"
                  name="disability"
                  label="Disability"
                  type="text"
                  fullWidth
                  value="None"
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="ethnicity"
                  name="ethnicity"
                  label="Ethnicity"
                  type="text"
                  fullWidth
                  value="North Africain"
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
            </Grid>

            <div className="flex flex-row w-full mt-10 gap-2 justify-between">
              <p className="text-xs text-gray-700 w-fit">Skill Score</p>
              <Box sx={{ width: "80%" }}>
                <LinearProgressWithLabel value={70} />
              </Box>
            </div>
            <div className="flex flex-row w-full mt-10 gap-2 justify-between">
              <p className="text-xs text-gray-700 w-fit">Work Ethic</p>
              <Box sx={{ width: "80%" }}>
                <LinearProgressWithLabel value={93} />
              </Box>
            </div>
            <div className="flex flex-row w-full mt-10 gap-2 justify-between">
              <p className="text-xs text-gray-700 w-fit">Attitude Score</p>
              <Box sx={{ width: "80%" }}>
                <LinearProgressWithLabel value={43} />
              </Box>
            </div>
            <div className="flex flex-row mt-10 gap-10">
              <Button
                variant="contained"
                className="bg-gray-100"
                color="primary"
              >
                <div className="text-xs text-gray-900">Save</div>
              </Button>
              <Button
                variant="contained"
                className="bg-gray-100"
                color="success"
              >
                <div className="text-xs text-gray-100">Accept</div>
              </Button>
              <Button variant="contained" className="bg-gray-100" color="error">
                <div className="text-xs text-gray-100">Reject</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
