/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import logo from "../assets/brandLogo/logo.png";
import google from "../assets/brandLogo/google.png";
import facebook from "../assets/brandLogo/facebook.png";
import appstore from "../assets/brandLogo/appstore (1).png";
import googlestore from "../assets/brandLogo/appstore (2).png";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";

const defaultTheme = createTheme();
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [hide, setHide] = React.useState(true);
  const [otp, setOtp] = React.useState(false);
  const [verifyotp, setVerifyotp] = React.useState(false);

  let handelverifyotp = () => {
    setOtp(false);
    setHide(false);
    setVerifyotp(true);
  };

  return (
    <>
      <Navbar />
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ mt: 10, mb: 10 }}>
          <Box
            sx={{
              fontSize: "16px",
              width: "50%",
              mx: "auto",
              textAlign: "center",
              mt: 5,
            }}
          >
            <p>
              Job Expert বাংলাদেশের প্রথম এবং সর্ববৃহৎ Virtual Exam Center (VEC)
              বিসিএস প্রিলিমিনারি এবং অন্যান্য MCQ পরীক্ষার প্রস্তুতির জন্য
              হাজারো পরীক্ষার্থীর সাথে চূড়ান্ত পরীক্ষার আগেই LIVE মডেল টেস্ট
              দিয়ে নিজের অবস্থান যাচাই করে নিন।
            </p>
          </Box>
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "200px", mb: 3 }}>
                <img src={logo} alt="" />
              </Box>
              <Typography component="h1" variant="h5" sx={{ fontSize: "16px" }}>
                ই-মেইল অথবা ফোন নাম্বার দিয়ে লগ-ইন করুন
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="ই-মেইল অথবা ফোন নাম্বার"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="পাসওয়ার্ড"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                {/* submit button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    pt: 1.5,
                    backgroundColor: "#26A4DE",
                    "&:hover": {
                      backgroundColor: "#26A4DE",
                    },
                    fontSize: "16px",
                  }}
                >
                  লগ-ইন করুন
                </Button>
                <Grid container>
                  <Grid item xs={8} textAlign="left">
                    <Link to="/singup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Link onClick={handleOpen} variant="body2">
                      Forgot password?
                    </Link>
                    <div>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          {hide ? (
                            <>
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h3"
                              >
                                enter your email
                              </Typography>
                              <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Typography>
                              <Button
                                sx={{ marginTop: "20px" }}
                                variant="contained"
                                onClick={() => setOtp(true)}
                              >
                                Send OTP
                              </Button>
                            </>
                          ) : (
                            ""
                          )}

                          {otp ? (
                            <form className="text-center ">
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h3"
                              >
                                Enter OTP
                              </Typography>
                              <div className="flex items-center justify-center ml-4">
                                <input
                                  type="text"
                                  className="w-16 md:w-20 h-12 text-center text-xl border rounded-md mx-1 focus:outline-none"
                                  maxLength={1}
                                  pattern="[0-9]"
                                  required
                                />
                                <input
                                  type="text"
                                  className="w-16 md:w-20 h-12 text-center text-xl border rounded-md mx-1 focus:outline-none"
                                  maxLength={1}
                                  pattern="[0-9]"
                                  required
                                />
                                <input
                                  type="text"
                                  className="w-16 md:w-20 h-12 text-center text-xl border rounded-md mx-1 focus:outline-none"
                                  maxLength={1}
                                  pattern="[0-9]"
                                  required
                                />
                                <input
                                  key=""
                                  type="text"
                                  className="w-16 md:w-20 h-12 text-center text-xl border rounded-md mx-1 focus:outline-none"
                                  maxLength={1}
                                  pattern="[0-9]"
                                  required
                                />
                              </div>
                              <button
                                onClick={handelverifyotp}
                                type="submit"
                                className="ml-4 px-24 md:px-28 py-2 bg-blue-500 text-white rounded bg-primary  focus:outline-none mt-10"
                              >
                                ভেরিফাই করুন
                              </button>
                            </form>
                          ) : (
                            ""
                          )}

                          {verifyotp ? (
                            <div>
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h3"
                              >
                                Set your new password
                              </Typography>
                              <TextField
                                id="filled-basic"
                                label="New Password"
                                variant="filled"
                                fullWidth
                              />
                              <TextField
                                id="filled-basic"
                                label="Confrime Password"
                                variant="filled"
                                fullWidth
                                sx={{ marginTop: "20px" }}
                              />
                              <Button
                                sx={{ marginTop: "20px" }}
                                variant="contained"
                              >
                                Submite
                              </Button>
                            </div>
                          ) : (
                            ""
                          )}
                        </Box>
                      </Modal>
                    </div>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 5,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    width: "200px",

                    border: "1px solid  #808080",
                  }}
                ></Box>
                <Box sx={{ mx: 2 }}>OR</Box>
                <Box sx={{ flex: 1, border: "1px solid  #808080" }}></Box>
              </Box>
            </Box>

            {/* google and facebook login button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                mt: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  mt: 3,
                  mb: 2,
                  p: 1.5,
                  backgroundColor: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                  },
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <img src={google} alt="" />
                </Box>
              </Button>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  mt: 3,
                  mb: 2,
                  p: 1.5,
                  backgroundColor: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                  },
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <img src={facebook} alt="" />
                </Box>
              </Button>
            </Box>

            {/* group logo png */}

            <Box sx={{ width: "80%", my: 5, mx: "auto" }}>
              <img src={logo} alt="" className="mx-auto mt-16" />
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
                <img src={appstore} alt="" className="w-40" />
                <img src={googlestore} alt="" className="w-40" />
              </div>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default login;
