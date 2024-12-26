import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import {ThemeProvider} from "@mui/material/styles";
import theme from "@/app/theme";
import {CssBaseline} from "@mui/material";

export const metadata: Metadata = {
  title: "AppTrack",
  description: "Organize your job search, but don't share it",
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
