// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   IconButton,
//   InputAdornment,
//   Paper,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// const AdminAuth = () => {
//   const [tabIndex, setTabIndex] = useState(0);
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTabChange = (event, newValue) => {
//     setTabIndex(newValue);
//     setPassword(""); // reset password field when switching tabs
//     setShowPassword(false);
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <Paper elevation={6} sx={{ p: 4, width: "100%" }}>
//         <Tabs
//           value={tabIndex}
//           onChange={handleTabChange}
//           variant="fullWidth"
//           sx={{ mb: 3 }}
//         >
//           <Tab label="Login" />
//           <Tab label="Sign Up" />
//         </Tabs>

//         {tabIndex === 0 && (
//           <Box component="form" noValidate>
//             <Typography variant="h6" align="center" gutterBottom>
//               Admin Login
//             </Typography>

//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type="email"
//               required
//             />

//             <TextField
//               label="Password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowPassword((prev) => !prev)}
//                       edge="end"
//                     >
//                       {showPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ mt: 3, py: 1.5 }}
//             >
//               Log In
//             </Button>
//           </Box>
//         )}

//          <a href="" ></a>
//          {tabIndex === 1 && (
//           <Box component="form" noValidate>
//             <Typography variant="h6" align="center" gutterBottom>
//               Admin Sign Up
//             </Typography>

           
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type="email"
//               required
//             />

//             <TextField
//               label="Password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowPassword((prev) => !prev)}
//                       edge="end"
//                     >
//                       {showPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ mt: 3, py: 1.5 }}
//             >
//               Sign Up
//             </Button>
//           </Box>
//         )}
//       </Paper>
//     </Container>
//   );
// };

// export default AdminAuth;
