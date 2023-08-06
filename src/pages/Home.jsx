import React, { useState } from "react";
import data from "../helper/data";
import Cards from "../components/Cards";
import { Box, Container, Grid } from "@mui/material";
import Header from "../components/Header";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredData = selectedCategory
    ? data.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : data;
  return (
    <Container maxWidth="lg">
      <Header setSelectedCategory={setSelectedCategory} />
      <Box mt={3} >
        <Grid sx={{justifyContent:"center", display:"flex"}} container spacing={2}>
          {filteredData.map((item) => (
            <Grid  item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Cards {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
export default Home;