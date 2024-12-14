import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

import { colors } from "../theme";

export default function Contact(props) {
  console.log(props.isDarkMode)
  return (
    <>
      <ContactPage>
        <Title>Hello!</Title>
        <p>
          Want to work together on a project or<br></br>reach out to me? Get in
          touch!
        </p>
        <ContactList {...props}>
          <p>
            Email:
            <Link href="mailto:contact@cindypark.ca">contact@cindypark.ca</Link>
          </p>
          <p>
            On the internet:
            <Link
              href="https://www.linkedin.com/in/cindypark-profile/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </Link>
          </p>
        </ContactList>
      </ContactPage>
    </>
  );
}

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 8em;
`;

const ContactList = styled.div`
  text-align: left;
  & > p {
    line-height: 8px;
    & > a {
      margin-left: 5px;
      color: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
    }
  }
`;
