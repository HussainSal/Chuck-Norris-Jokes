import React, { useState, useEffect } from "react";
import classes from "./Category.module.css";
import { useAppContext } from "../../store/contextApi";
import { Button, Card, makeStyles, Typography } from "@material-ui/core";
import chuckNorris from "../../assets/images/chuck.png";

/*MUI STYLING */
const useStyle = makeStyles((theme) => {
  return {
    categoryCard: {
      height: "700px",
      minWidth: "300px",
      backgroundColor: "#9575CD",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      [theme.breakpoints.down(751)]: {
        flexDirection: "row",
        height: "340px",
        maxwidth: "600px",
      },
    },
    button: {
      margin: "5px",
      [theme.breakpoints.down(620)]: {
        margin: "2px",
        height: "30px",
      },
    },
  };
});

const Category = () => {
  const style = useStyle();
  const ctx = useAppContext();
  const [category, setCategory] = useState([]);

  /* GETTING CATEGORY */
  useEffect(() => {
    const gettingCategory = async () => {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/categories"
      );

      const data = await response.json();
      setCategory(data);
    };
    gettingCategory();
  }, []);

  /* GETTING JOKES  */
  const gettingJokes = async () => {
    const link =
      ctx.selectedCategory === "Random"
        ? "https://api.chucknorris.io/jokes/random"
        : `https://api.chucknorris.io/jokes/random?category=${ctx.selectedCategory}`;

    const response = await fetch(link);

    const data = await response.json();

    ctx.setJoke(data.value);
    ctx.setSmileyid("");
  };

  return (
    <div className={classes.container}>
      <Card elevation="disable" className={style.categoryCard}>
        <div className={classes.chuckNorrisJokes}>
          <Typography
            style={{ marginBottom: "20px" }}
            color="primary"
            variant="h4"
          >
            Chuck Norris Jokes
          </Typography>
          <img width="180px" src={chuckNorris} alt="" />
        </div>
        <div>
          <Typography
            style={{ marginBottom: "20px" }}
            color="primary"
            variant="h4"
          >
            Categories
          </Typography>
          {category.map((cur) => {
            return (
              <Button
                variant={ctx.selectedCategory == cur ? "contained" : "outlined"}
                className={style.button}
                key={cur}
                color="primary"
                onClick={() => ctx.setSelectedCategory(cur)}
              >
                {cur}
              </Button>
            );
          })}
          <Typography
            className={classes.selectedCategoryContainer}
            color="primary"
          >
            Selected Category :
            <span className={classes.selectedCategory}>
              {ctx.selectedCategory}
            </span>
          </Typography>
          <Button
            onClick={gettingJokes}
            variant="contained"
            className={classes.newJokeButton}
          >
            New Joke
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Category;
