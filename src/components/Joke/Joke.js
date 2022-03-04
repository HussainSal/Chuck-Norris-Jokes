import React, { useEffect, useState } from "react";
import classes from "./Joke.module.css";
import { useAppContext } from "../../store/contextApi";
import { Card, Typography } from "@material-ui/core";

const Joke = () => {
  const ctx = useAppContext();

  const emoji = [
    {
      src: "https://twemoji.maxcdn.com/2/72x72/1f603.png",
      id: 1,
    },
    {
      src: "https://twemoji.maxcdn.com/2/72x72/1f610.png",
      id: 2,
    },
    {
      src: "https://twemoji.maxcdn.com/2/72x72/1f615.png",
      id: 3,
    },
    {
      src: "https://twemoji.maxcdn.com/2/72x72/1f620.png",
      id: 4,
    },
  ];

  /* GETTING jokes */
  useEffect(() => {
    const gettingJoke = async () => {
      const response = await fetch(`https://api.chucknorris.io/jokes/random`);

      const data = await response.json();
      ctx.setJoke(data.value);
    };
    gettingJoke();
  }, []);

  useEffect(() => {
    /* GETTING JOKES ACCODING TO CATEGORY */
    const gettingJokes = async () => {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${ctx.selectedCategory}`
      );

      const data = await response.json();

      ctx.setJoke(data.value);
    };
    gettingJokes();
    ctx.setSmileyid("");
  }, [ctx.selectedCategory]);

  const smileHandler = (id) => {
    ctx.setSmileyid(id);
  };

  return (
    <div className={classes.container}>
      <Card className={classes.jokeCard}>
        <div className={classes.emojiBox}>
          {emoji.map((cur, i) => {
            return (
              <img
                key={i}
                className={`${classes.emoji}  ${
                  ctx.smileyid === cur.id && classes.activeEmoji
                } `}
                src={cur.src}
                alt=""
                onClick={() => {
                  smileHandler(cur.id);
                }}
              />
            );
          })}
        </div>

        <Typography variant="h4" className={classes.jokeText}>
          {ctx.joke || "Please Refresh ! Chuck Norris is dead."}
        </Typography>
      </Card>
    </div>
  );
};

export default Joke;
