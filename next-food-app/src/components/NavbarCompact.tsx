import React from "react";
import { Burger, Group, Menu, Text } from "@mantine/core";

import {
  IconActivity,
  IconHome2,
  IconLogin2,
  IconNewSection,
  IconPlus,
} from "@tabler/icons-react";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

const dataMainLinks = [
  { icon: IconHome2, label: "Главная", href: "/" },
  {
    icon: IconNewSection,
    label: "Анкета",
    href: "/Anketa",
  },
  { icon: IconActivity, label: "Новый рецепт", href: "/Receipt" },
  { icon: IconLogin2, label: "Вход", href: "/Login" },
  { icon: IconPlus, label: "Регистрация", href: "/Registration" },
];

export default function NavbarCompact() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Group pos="sticky" w="100%" h="50px" justify="flex-end" gap={0} bg="black">
      <Menu
        shadow="md"
        onClose={toggle}
        transitionProps={{ duration: 500, transition: "fade-down" }}
      >
        <Menu.Target>
          <Burger
            mr="lg"
            color="white"
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item component={Link} href="/">
            <Group justify="flex-start" gap={10}>
              <IconHome2 size="1rem" stroke={1.5} />
              <Text size="lg">Главная</Text>
            </Group>
          </Menu.Item>

          <Menu.Item component={Link} href="/Anketa">
            <Group justify="flex-start" gap={10}>
              <IconNewSection size="1rem" stroke={1.5} />
              <Text size="lg">Анкета</Text>
            </Group>
          </Menu.Item>
          <Menu.Item component={Link} href="/Receipt">
            <Group justify="flex-start" gap={10}>
              <IconActivity size="1rem" stroke={1.5} />
              <Text size="lg">Новый рецепт</Text>
            </Group>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item component={Link} href="/Login">
            <Group justify="flex-start" gap={10}>
              <IconLogin2 size="1rem" stroke={1.5} />
              <Text size="lg">Вход</Text>
            </Group>
          </Menu.Item>
          <Menu.Item component={Link} href="/Registration">
            <Group justify="flex-start" gap={10}>
              <IconPlus size="1rem" stroke={1.5} />
              <Text size="lg">Регистрация</Text>
            </Group>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
