import React from "react";
import { Grid, Button, Typography, Stack, Box } from "@mui/material";

const About = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          color={"white"}
          display={"flex"}
          justifyContent={"center"}
          fontWeight={"bold"}
          marginTop={"10%"}
          marginBottom={"5%"}
        >
          About Me
        </Typography>
      </Box>
      <Grid container spacing={14}>
        {/* Photo */}
        <Grid item xs={12} sm={7}>
          <img
            src="../../public/2.jpg"
            alt="Your Photo"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>
        {/* Information */}
        <Grid
          item
          xs={12}
          sm={4}
          container
          direction="column"
          justifyContent="center"
          color={"white"}
        >
          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: "30px", fontWeight: "bold" }}
          >
            Hi there!
          </Typography>
          <Typography variant="body1" paragraph>
            I'm MennatAllah, a graduate from the Faculty of Languages and
            Translation with a passion for education and design. Currently, I'm
            diving into the world of{" "}
            <Typography
              component="span"
              sx={{
                color: "#800000",
                "&:hover": {
                  color: "#E5E5E5",
                  transition: "0.3s",
                  cursor: "pointer",
                },
              }}
            >
              web and user interface design at ITI
            </Typography>{" "}
            honing my skills to create seamless digital experiences.
          </Typography>
          <Typography variant="body1" paragraph>
            I love sharing knowledge and empowering others to reach their full
            potential. When I'm not crafting intuitive user interfaces, you can
            find me exploring new teaching methods or sketching out my next
            design idea. Let's connect and create something amazing together!
          </Typography>
          {/* Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              width: "70%",
              backgroundColor: "transparent",
              border: "1px solid #ffffff80",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "transparent",
                border: "1px solid white",
              },
            }}
          >
            Download My CV
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
