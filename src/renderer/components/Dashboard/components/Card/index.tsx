import { Avatar, Card, CardContent, Divider, Typography } from '@mui/material';

function CardDemo() {
  return (
    <Card sx={{ maxWidth: '25rem', margin: '3rem auto', borderRadius: '16px' }}>
      {/* Logo at the top */}
      <Avatar
        sx={{
          width: 80,
          height: 80,
          backgroundColor: 'primary.main',
          margin: 'auto',
          marginTop: '1rem',
        }}
      >
        C
      </Avatar>
      {/* Divider line */}
      <Divider />
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Created date on the right */}
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ flex: 1, textAlign: 'right' }}
          >
            Created 12/10/22
          </Typography>
          {/* Simple Card on the left */}
          <Typography variant="body2" color="textSecondary" style={{ flex: 1 }}>
            Simple Card
          </Typography>
        </div>
        {/* Amount of $473 */}
        <Typography variant="h5" component="div" sx={{ marginTop: '1rem' }}>
          $473
        </Typography>
        {/* Bottom content */}
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          culpa voluptatibus blanditiis nostrum eum id voluptatem nisi aut quam
          deserunt!
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardDemo;
