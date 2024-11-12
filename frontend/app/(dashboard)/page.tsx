"use client";
import * as React from 'react';
import {Grid, useTheme} from "@mui/system";
import {
    Box,
    Card,
    CardContent,
    Divider, IconButton, List, ListItem, ListItemText, ListSubheader, Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {CalendarMonth, CalendarToday, Check, FileCopy} from "@mui/icons-material";

export default function HomePage() {
    const theme = useTheme();

    return (
      <>
          <Grid container spacing={4}>
              <Grid size={{ xs: 12, lg: 6 }}>
                  <Stack spacing={4}>
                      <Card variant="outlined">
                          <CardContent>
                              <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center',
                                  gap: '1rem',
                                  color: theme.palette.primary.main }}>
                                  <CalendarToday />
                                  <Typography variant="h5">
                                      Today
                                  </Typography>
                              </Box>
                              <Divider sx={{ my: 2 }} />
                              <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem'}}>
                                  <Check sx={{ color: theme.palette.success.main }} />
                                  <Typography variant="body1">
                                      No observations scheduled for today. Take the time to relax!
                                  </Typography>
                              </Box>
                          </CardContent>
                      </Card>
                      <Card variant="outlined">
                          <CardContent>
                              <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center',
                                  gap: '1rem',
                                  color: theme.palette.primary.main }}>
                                  <CalendarMonth />
                                  <Typography variant="h5">
                                      This Week
                                  </Typography>
                              </Box>
                              <Divider sx={{ my: 2 }} />
                              <List
                                  subheader={
                                      <ListSubheader>
                                          Tuesday
                                      </ListSubheader>
                                  }
                              >
                                  <ListItem
                                      secondaryAction={
                                          <IconButton edge="end" aria-label="form">
                                              <FileCopy />
                                          </IconButton>
                                      }
                                  >
                                      <ListItemText primary="John Doe 10:00 AM Observation" secondary="Location: BA1 206" />
                                  </ListItem>
                                  <ListItem
                                      secondaryAction={
                                          <IconButton edge="end" aria-label="form">
                                              <FileCopy />
                                          </IconButton>
                                      }
                                  >
                                      <ListItemText primary="Jane Doe 3:00 PM Observation" secondary="Location: BA1 206" />
                                  </ListItem>
                              </List>
                              <List
                                  subheader={
                                      <ListSubheader>
                                          Thursday
                                      </ListSubheader>
                                  }
                              >
                                  <ListItem
                                      secondaryAction={
                                          <IconButton edge="end" aria-label="form">
                                              <FileCopy />
                                          </IconButton>
                                      }
                                  >
                                      <ListItemText primary="John Doe 10:00 AM Observation" secondary="Location: BA1 206" />
                                  </ListItem>
                              </List>
                          </CardContent>
                      </Card>
                  </Stack>
              </Grid>
              <Grid size={{ xs: 12, lg: 6 }}>
                  <Card variant="outlined">
                      <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center',
                              gap: '1rem',
                              color: theme.palette.primary.main }}>
                              <FileCopy />
                              <Typography variant="h5">
                                  In Progress Observations
                              </Typography>
                          </Box>
                          <Divider sx={{ my: 2 }} />
                          <List
                              subheader={
                                  <ListSubheader>
                                      Status: Unstarted
                                  </ListSubheader>
                              }
                          >
                              <ListItem
                                  secondaryAction={
                                      <IconButton edge="end" aria-label="form">
                                          <FileCopy />
                                      </IconButton>
                                  }
                              >
                                  <ListItemText primary="John Doe Observation" secondary="Session: 11/8/24 10:00 AM" />
                              </ListItem>
                          </List>
                          <List
                              subheader={
                                  <ListSubheader>
                                      Status: Needs Discussion
                                  </ListSubheader>
                              }
                          >
                              <ListItem
                                  secondaryAction={
                                      <IconButton edge="end" aria-label="form">
                                          <FileCopy />
                                      </IconButton>
                                  }
                              >
                                  <ListItemText primary="John Doe Observation" secondary="Session: 11/8/24 10:00 AM" />
                              </ListItem>
                          </List>
                          <List
                              subheader={
                                  <ListSubheader>
                                      Status: Needs Finalization
                                  </ListSubheader>
                              }
                          >
                              <ListItem
                                  secondaryAction={
                                      <IconButton edge="end" aria-label="form">
                                          <FileCopy />
                                      </IconButton>
                                  }
                              >
                                  <ListItemText primary="John Doe Observation" secondary="Session: 11/8/24 10:00 AM" />
                              </ListItem>
                          </List>
                      </CardContent>
                  </Card>
              </Grid>
          </Grid>
      </>
    );
}
