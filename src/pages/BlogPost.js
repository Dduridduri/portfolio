import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const posts = [
  { id: 1, title: 'Post 1', content: 'This is the content of post 1', imageUrl: 'https://via.placeholder.com/200' },
  { id: 2, title: 'Post 2', content: 'This is the content of post 2', imageUrl: 'https://via.placeholder.com/200' },
  { id: 3, title: 'Post 3', content: 'This is the content of post 3', imageUrl: 'https://via.placeholder.com/200' },
  { id: 4, title: 'Post 4', content: 'This is the content of post 4', imageUrl: 'https://via.placeholder.com/200' },
  { id: 5, title: 'Post 5', content: 'This is the content of post 5', imageUrl: 'https://via.placeholder.com/200' },
  { id: 6, title: 'Post 6', content: 'This is the content of post 6', imageUrl: 'https://via.placeholder.com/200' },
];



function BlogPosts() {
  return (
    <>
    
    <div className="w-[80%] text-center mx-auto">
      <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia component="img" height="140" image={post.imageUrl} alt={post.title} />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
    </div>
       <div className="animated-element ">
       나는 커지고 작아지는 애니메이션을 가지고 있어!
     </div>
     </>
  );
}

export default BlogPosts;