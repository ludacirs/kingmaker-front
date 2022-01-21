import React from 'react';
import styled from 'styled-components';
import Avatar from '@atoms/Avatar/Avatar';
import SpeechBubble from '@atoms/SpeechBubble/SpeechBubble';
import { flexBox } from '@styles/mixin';
import { phrase } from '../../../types/Keyword';

const PhraseBlock = styled.div<Partial<PhraseProps>>`
  ${flexBox('flex-start', 'center', 'row')};
  position: relative;
  width: 550px;
  height: 80px;
  img {
    left: 5px;
    ${({ position }) => (position === 'right' ? `left` : ``)} : 500px;
  }
  > * {
    margin: 10px 0;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    img {
      ${({ position }) => (position === 'right' ? `left` : ``)} : 330px;
    }
  }
`;

const COLORS_MAP = ['', 'first', 'second', 'third', 'fourth'];

export interface PhraseProps {
  position: string;
  phrase: phrase;
}

const Phrase = ({ position, phrase }: PhraseProps) => {
  const phraseText = phrase.phrase;
  const { partyId, colorCode } = phrase.candidate.party;

  const color = COLORS_MAP[partyId] || colorCode;

  return (
    <PhraseBlock position={position}>
      {position === 'left' ? (
        <>
          <Avatar imgId={partyId} />
          <SpeechBubble color={color} position={position} phraseText={phraseText} />
        </>
      ) : (
        <>
          <SpeechBubble color={color} position={position} phraseText={phraseText} />
          <Avatar imgId={partyId} />
        </>
      )}
    </PhraseBlock>
  );
};

export default Phrase;
