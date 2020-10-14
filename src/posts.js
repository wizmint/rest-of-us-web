import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Grid, Typography } from "@material-ui/core";
import { posts } from "./dummy-posts";

function Posts(props) {
    return (
        <div style={{ marginTop: 80 }} >
      <Grid container spacing={40} justify="center">
        { posts.map(post => (
          <Grid item key={post.title}>
            <Card style={{ margin: 10, minWidth: 300, maxWidth: 600, maxHeight: 500, backgroundColor: 'green' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={post.title}
                  width="40"
                  height="250"
                  image={post.image}
                  title={post.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="secondary">Share</Button>
                <Button size="small" color="secondary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    );
}

export default Posts;