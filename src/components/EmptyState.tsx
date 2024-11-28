import { Box, Typography } from "@mui/material";

export const EmptyState: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      marginTop: '100px'
    }}
  >
    <Typography
      variant="h5"
      sx={{
        color: '#666',
        marginBottom: '16px',
        textAlign: 'center'
      }}
    >
      No stocks found
    </Typography>
    <Typography
      variant="body1"
      sx={{
        color: '#888',
        textAlign: 'center'
      }}
    >
      Try adjusting your search criteria
    </Typography>
  </Box>
);