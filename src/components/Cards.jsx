import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Cards = (item) => {
  return (
    <Card className="cards" sx={{ maxWidth: 500, margin:"auto" }}>
      <CardActionArea className="card-container">
        <ImageList sx={{ width: 800, height: 300, objectFit: "contain" }}>
          <ImageListItem key={item.id} sx={{ objectFit: "cover" }}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <Typography
              variant="body1"
              sx={{
                bgcolor: "black",
                width: "5rem",
                height: "2rem",
                color: "white",
                zIndex: "4",
                textAlign: "center",
                paddingY: "4px",
                opacity: ".85",
                borderRadius: "5px",
                margin: ".2rem",
                flexWrap: "nowrap",
                position: "absolute",
                top: "0", // Resmin üstünde olacak şekilde
                left: "0", // Resmin üstünde olacak şekilde
              }}
            >
              {item.price} $
            </Typography>
          </ImageListItem>
        </ImageList>
        <CardContent className="card-over">
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
