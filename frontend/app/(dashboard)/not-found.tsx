import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";

export default function NotFoundPage() {
    return (
        <Box>
            <Typography variant='h4'>
                Page Not Found
            </Typography>
            <Typography>
                Not sure how you got here, but that page could not be found. Try using the sidebar to find your way again.
            </Typography>
        </Box>
    );
}
