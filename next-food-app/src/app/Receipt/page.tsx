"use client";

import React from "react";
import { Button, Checkbox, Group, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const Page = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "aaaaa@asd.asd",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <Group bg="black">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          key={form.key("termsOfService")}
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Group>
  );
};

export default Page;
