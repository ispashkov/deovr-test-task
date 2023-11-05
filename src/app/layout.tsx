import * as React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Box, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './globals.css';
import { VideoSearchBarContainer } from '@/containers/video-search-bar/video-search-bar.container';
import { VideoSortingSelectContainer } from '@/containers/video-sorting-select/video-sorting-select.container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DeoVR Test Task',
  description: 'Test Task for DeoVR on Senior Frontend Engineer position',
  keywords: ['movies', 'tv shows', 'videos'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Theme appearance='dark'>
          <Box p={{ initial: '4', md: '6' }}>
            <VideoSearchBarContainer />
            <VideoSortingSelectContainer />
            {children}
          </Box>
        </Theme>
      </body>
    </html>
  );
}
