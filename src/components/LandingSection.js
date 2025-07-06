import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Vamsi!";
const bio1 = "A frontend developer specialised in React";
const bio2 = `Frontend Developer with 4 years of experience in building responsive and interactive web applications 
using HTML, CSS, JavaScript, and React.js. I possess expertise in front-end and back-end technologies, 
including React, Node.js, Express, and MongoDB. I am adept at creating responsive web applications, 
RESTful APIs, and deploying secure solutions, and I pride myself on my problem-solving skills and 
commitment to continuous learning.`;

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="2xl" name="Vamsi" src="https://media.licdn.com/dms/image/v2/D5603AQEifLquk5W7jA/profile-displayphoto-shrink_400_400/B56ZabV4c8HgAg-/0/1746362927329?e=1757548800&v=beta&t=JcgCCyRP062ZKBJu8grvViXBe-64Dviq9xQTtwfUFos" />
      <Heading as="h1" size="lg" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="md" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="md" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
