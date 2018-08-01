import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import { Box, PopupLink } from './style-utils';
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100;
  min-height: 100;
  background-color: white;
`;

const PopupLink = styled.a`
  text-decoration: none;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkImage = styled.span`
  margin-right: 1px;
  position: relative;
  `;

export default function LinkBox(props) {
  const { name } = props;
  const linkString = `Follow ${name}`;
  const linkAddress = './linkTest.html';

  return (
    <Box className="LinkBox">
      <PopupLink href={linkAddress}>
        <LinkImage>
          <img src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/share.png" alt="icon" />
        </LinkImage>
        Share review
      </PopupLink>
      <PopupLink href={linkAddress}>
        <LinkImage>
          <img src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/embed.png" alt="icon" />
        </LinkImage>
        Embed review
      </PopupLink>
      <PopupLink href={linkAddress}>
        <LinkImage>
          <img src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/compliment.png" alt="icon" />
        </LinkImage>
        Compliment
      </PopupLink>
      <PopupLink href={linkAddress}>
        <LinkImage>
          <img src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/message.png" alt="icon" />
        </LinkImage>
        Send message
      </PopupLink>
      <PopupLink className="personalized" href={linkAddress}>
        <LinkImage>
          <img src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/follow.png" alt="icon" />
        </LinkImage>
        {linkString}
      </PopupLink>
    </Box>
  );
}


LinkBox.propTypes = {
  name: PropTypes.string.isRequired,
};
