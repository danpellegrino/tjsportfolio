import React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

const EmailProps = {
  name: "",
  email: "",
  message: "",
};

export const Email = ({ name, email, message }) => {
  return (
    <Html lang="en">
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal">
              New Message! 📬
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello Tyler,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              You have a new message from your website contact form. The details
              are as follows:
              <br />
              Name: <strong>{name}</strong>
              <br />
              Email: {email}
            </Text>
            <Text className="text-[18px] leading-[24px] text-black">
              Message:
              <br />
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
