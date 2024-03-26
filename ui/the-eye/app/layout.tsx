import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from "next";
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { Theme } from './utils/theme';

export const metadata: Metadata = {
    title: "Data Getta",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body>

                <AppRouterCacheProvider>
                    <ThemeProvider theme = {Theme}>
                        <CssBaseline />
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>

            </body>
        </html>
    );
}
