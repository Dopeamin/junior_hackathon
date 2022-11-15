import Link from "next/link";
import { ArrowRightIcon } from "../_shared/icons/arrow-right.icon";
import { UserBarMinimized } from "./userbar";
import { Grid, TextField } from "@mui/material";
import { Separator } from "../_shared/separator";
import { Button } from "../_shared/button";

export const AddMember = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="relative flex flex-col w-full py-12">
      <div className="relative z-20 flex flex-row gap-4 items-center">
        <Link href="/dashboard/members">
          <div className="rotate-180 mb-1">
            <ArrowRightIcon />
          </div>
        </Link>
        <div className="relative z-20 flex flex-row justify-between w-full items-end">
          <h1 className="text-2xl font-bold text-blue-800 tracking-widest mb-2">
            Add Member
          </h1>
          <UserBarMinimized />
        </div>
      </div>

      <p className="text-base text-gray-800 ml-8">
        Please fill in the member details
      </p>
      <div className="relative z-10 flex flex-col flex-1 w-full pr-10 mt-10">
        <div className="w-full rounded-2xl flex flex-row-reverse gap-4 items-start">
          <div className="flex-2 p-10 shadow-lg bg-gray-50 bg-opacity-40 backdrop-blur rounded-2xl">
            <h1 className="font-semibold text-2xl mb-2 text-slate-600">
              Account Information
            </h1>
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
          </div>

          <div className="flex-5 p-10 shadow-lg rounded-2xl bg-gray-50 bg-opacity-70 backdrop-blur">
            <h1 className="font-semibold text-2xl mb-2 text-slate-600 ">
              Personal Information
            </h1>
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
          </div>
        </div>
        <div className="flex w-full mt-10">
          <Button
            disabled={true}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <p className="text-gray-50">Invite Team Member</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
