import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';


const MyCard = () => {
  return (
    <Card>
        <Box
            component="img"
            sx={{
                height: 750,
                width: 350,
                maxHeight: { xs: 450, md: 250 },
                maxWidth: { xs: 350, md: 250 },
            }}
            alt="Harvey Spector."
            src="https://media.gettyimages.com/id/909442556/photo/suits-season-1.jpg?s=1024x1024&w=gi&k=20&c=A3pa5zAQsHGzjIDNYt5ZwFqrkCucgQ838zmmOLdZ1DI="
        />     
      <CardContent>
        <Typography variant="h5" component="div">
          Harvey Specter
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Harvey is known for being charming, witty, confident, and the best closer in New York City.
        He is also known for his high belief in himself
        </Typography>
        <hr/>
        
      </CardContent>
    </Card>
  );
};

export default MyCard;