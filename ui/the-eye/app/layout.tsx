import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Getta",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        
        <CssBaseline />
        
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      
      </body>
    </html>
  );
}
