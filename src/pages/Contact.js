import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Laboris nisi veniam culpa veniam ut et ipsum voluptate magna ad in ea
          reprehenderit. Nisi aliquip dolor ipsum proident.
        </p>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} />{" "}
                    9875468775(Tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                    myrestaurant123@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1 }} /> 9845667855
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
