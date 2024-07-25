import React, { useState } from "react";
import { Box, Center, Group, NavLink, rgba, Text } from "@mantine/core";

import {
  IconActivity,
  IconChevronRight,
  IconHome2,
  IconLogin,
  IconLogin2,
  IconNewSection,
  IconPlus,
  IconRegistered,
} from "@tabler/icons-react";
import Link from "next/link";

const dataMainLinks = [
  { icon: IconHome2, label: "Главная", href: "/" },
  {
    icon: IconNewSection,
    label: "Анкета",
    href: "/Anketa",
  },
  { icon: IconActivity, label: "Новый рецепт", href: "/Receipt" },
];

const dataAuthLinks = [
  { icon: IconLogin2, label: "Вход", href: "/Login" },
  { icon: IconPlus, label: "Регистрация", href: "/Registration" },
];

export default function NavbarFull() {
  const mainLinks = dataMainLinks.map((item, index) => (
    <Link href={item.href} key={item.label}>
      <Group align="center" justify="center" gap={10}>
        <item.icon size="1rem" stroke={1.5} />
        <Text size="lg">{item.label}</Text>
      </Group>
    </Link>
  ));

  const authLinks = dataAuthLinks.map((item, index) => (
    <Link href={item.href} key={item.label}>
      <Group align="center" justify="center" gap={10}>
        <item.icon size="1rem" stroke={1.5} />
        <Text size="lg">{item.label}</Text>
      </Group>
    </Link>
  ));
  return (
    <Group pos="sticky" w="100%" justify="space-between" gap={0} bg="black">
      <Group gap={0}>{mainLinks}</Group>
      <Group gap={0}>{authLinks}</Group>
    </Group>
  );
}
