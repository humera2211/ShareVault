import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export function EmailTemplate({
  firstName,
  fileName,
  fileSize,
  fileType,
  shortUrl,
  fileUrl
}) {
  return (
    <Html>
      <Head />

      <Preview>Someone shared a file with you</Preview>

      <Tailwind>
        <Body className="bg-gray-100 py-10">
          <Container className="bg-white rounded-lg p-8 shadow">
            <Heading className="text-3xl text-center text-blue-600">
              ShareVault
            </Heading>

            <Text className="text-lg mt-6">
              Hi <b>{firstName}</b>,
            </Text>

            <Text>
              A file has been shared with you through <b>ShareVault</b>.
            </Text>

            <Section className="border rounded-lg p-4 my-6">
              <Text>
                <b>File Name:</b> {fileName}
              </Text>

              <Text>
                <b>File Type:</b> {fileType}
              </Text>

              <Text>
                <b>File Size:</b> {(fileSize / 1024 / 1024).toFixed(2)} MB
              </Text>
            </Section>

            <Button
              href={fileUrl}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Download File
            </Button>

            <Text className="mt-8 text-gray-500 text-sm">
              If the button doesn't work, copy this link:
            </Text>

            <Text>{fileUrl}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
