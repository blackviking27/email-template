"use client";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Markdown,
  Section,
  Tailwind,
  Text,
  Img,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { GitHub, Link2, Linkedin, Twitter } from "react-feather";

export default function Email({ state }) {
  return (
    <Tailwind>
      <Container className="max-w-screen-md shadow-md rounded-md font-sans">
        <Section>
          <Heading
            className="text-center py-6 text-white text-2xl font-semibold bg-[#4B70F5]"
            as="h1"
          >
            Hi, {state.toName}
          </Heading>
        </Section>
        <Section>
          <div className="bg-white rounded-md p-6">
            <div>
              <div className="text-2xl font-bold">I'm {state.name}</div>
              <div className="text-gray-500">{state.shortBio}</div>
            </div>
            <Hr className="my-6" />
            <Markdown>{state.emailBody}</Markdown>
            <Hr className="my-6" />
            <div className="text-center text-gray-500 mb-4">
              Checkout my socials
            </div>
            <div className="flex justify-center items-center gap-5">
              <Link href={state.socials.gitHub} target="_blank">
                <GitHub className="text-gray-500" size={24} />
              </Link>
              <Link href={state.socials.gitHub} target="_blank">
                <Linkedin className="text-gray-500" size={24} />
              </Link>
              <Link href={state.socials.gitHub} target="_blank">
                <Link2 className="text-gray-500" size={24} />
              </Link>
              <Link href={state.socials.gitHub} target="_blank">
                <Twitter className="text-gray-500" size={24} />
              </Link>
            </div>
          </div>
        </Section>
      </Container>
    </Tailwind>
  );
}
