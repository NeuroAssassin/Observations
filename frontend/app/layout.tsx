import * as React from 'react';
import { AppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import DashboardIcon from '@mui/icons-material/Dashboard';
import type { Navigation } from '@toolpad/core/AppProvider';
import { SessionProvider, signIn, signOut } from 'next-auth/react';
import { auth } from '@/auth';
import theme from '../theme';
import {
  BarChart,
  Event,
  FileCopy,
  IntegrationInstructions,
  Person,
  Settings,
  TrackChanges,
} from "@mui/icons-material";
import {Metadata} from "next";

const NAVIGATION: Navigation = [
  {
    segment: '',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    kind: 'header',
    title: 'Scheduling',
  },
  {
    segment: 'leaders',
    title: 'Leaders',
    icon: <Person />,
  },
  {
    segment: 'events',
    title: 'Events',
    icon: <Event />,
  },
  {
    segment: 'tracker',
    title: 'Tracker',
    icon: <TrackChanges />,
  },
  {
    kind: 'header',
    title: 'Observations',
  },
  {
    segment: 'forms',
    title: 'Forms',
    icon: <FileCopy />,
  },
  {
    segment: 'facesheets',
    title: 'Facesheets',
    icon: <BarChart />,
  },
  {
    kind: 'header',
    title: 'Settings',
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <IntegrationInstructions />,
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <Settings />,
  },
];

const BRANDING = {
  title: 'SI Observations',
  logo: ''
};


const AUTHENTICATION = {
  signIn,
  signOut,
};

export const metadata: Metadata = {
  title: "Observations"
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body>
        <SessionProvider session={session}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <AppProvider
              navigation={NAVIGATION}
              branding={BRANDING}
              session={session}
              authentication={AUTHENTICATION}
              theme={theme}
            >
              {props.children}
            </AppProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
