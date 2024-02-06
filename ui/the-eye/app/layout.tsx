import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import { DataGettaTheme } from './theme';

export const metadata: Metadata = {
  title: "Data Getta",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        
        <ThemeProvider theme = { DataGettaTheme }>
          <CssBaseline />
          
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      
      </body>
    </html>
  );
}
