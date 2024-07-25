"use client";

import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  Affix,
  Transition,
  Button,
  rem,
} from "@mantine/core";
import { theme } from "@/theme";
import NavbarFull from "@/components/NavbarFull";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react";
import "./globals.css";
import NavbarCompact from "@/components/NavbarCompact";

export default function RootLayout({ children }: { children: any }) {
  const [scroll, scrollTo] = useWindowScroll();
  const { width } = useViewportSize();
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <title>Food App</title>
      </head>
      <body>
        <MantineProvider theme={theme}>
          {width > 918 && <NavbarFull />}
          {width <= 918 && <NavbarCompact />}
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
