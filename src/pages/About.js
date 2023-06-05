import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to my Restaurant</Typography>
        <p>
          Tempor non id fugiat ipsum aliqua laborum sint elit consectetur. Et
          excepteur anim esse cillum fugiat eu in ex qui enim. Sit commodo id ex
          aute do veniam ea tempor. Occaecat pariatur consequat ullamco officia
          cillum fugiat. Esse aliqua consequat ad pariatur irure anim non.
          Aliquip incididunt cillum et Lorem tempor fugiat in aliquip ex veniam.
        </p>
        <br />
        <p>
          Lorem ad laboris anim ex mollit dolor sunt ipsum labore sit amet.
          Pariatur cupidatat voluptate nulla ut non. In tempor aute voluptate
          reprehenderit nostrud irure aliquip id adipisicing dolor pariatur.
          Esse occaecat in aute consequat ex est reprehenderit duis Lorem. Et
          excepteur commodo eu mollit nulla anim magna amet cupidatat anim do
          culpa. Cupidatat cillum cillum deserunt velit esse id nulla incididunt
          adipisicing excepteur sunt ipsum id labore.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
