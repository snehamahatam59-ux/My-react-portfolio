import React from 'react';
import { Box, Skeleton } from '@mui/material';

function PageSkeleton() {
  return (
    <Box
      sx={{
        minHeight: '70vh',
        backgroundColor: '#0a1a2f', // Dark Blue BG
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 900 }}>
        <Skeleton
          variant="text"
          height={60}
          sx={{ bgcolor: '#1e2f4f', mb: 2 }}
        />
        <Skeleton
          variant="text"
          height={40}
          sx={{ bgcolor: '#1e2f4f', mb: 2 }}
        />
        <Skeleton
          variant="rectangular"
          height={200}
          sx={{ bgcolor: '#1e2f4f', borderRadius: 2, mb: 3 }}
        />
        <Skeleton
          variant="rectangular"
          height={50}
          sx={{ bgcolor: '#1e2f4f', borderRadius: 1 }}
        />
      </Box>
    </Box>
  );
}

export default PageSkeleton;
