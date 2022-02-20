import styled from 'styled-components';
import { Avatar } from '@atoms/index';
import TalkBubble from '@atoms/TalkBubble/TalkBubble';
import { flexBox } from '@styles/mixin';

const TalkListContainerBlock = styled.ul`
  overflow-y: auto;
  height: 100%;
`;

const TalkContainer = styled.li`
  ${flexBox('center', 'flex-start')};

  margin: 20px 0;
`;
const UserTab = styled.section`
  ${flexBox('center', 'center', 'column')};
  margin-right: 5px;
  width: auto;
`;

const Writer = styled.div`
  margin-top: 5px;
  color: #333;
  font-size: 12px;
  line-height: 1.3;
  word-break: break-word;
`;
interface TalkListContainerProps {}

const TalkListContainer = ({}: TalkListContainerProps) => {
  return (
    <TalkListContainerBlock>
      <TalkContainer>
        <UserTab>
          <Avatar writer={'섬뜩한 '} backgroundColor={'#1F4D9C'} />
          <Writer>{makeNewLine('섬뜩한 고양이')}</Writer>
        </UserTab>
        <TalkBubble color={'#1F4D9C'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <UserTab>
          <Avatar writer={'고양이'} backgroundColor={'#D33736'} />
          <Writer>{makeNewLine('섬뜩한 고양이')}</Writer>
        </UserTab>
        <TalkBubble color={'#D33736'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <UserTab>
          <Avatar writer={'고양이'} backgroundColor={'#F7CE46'} />
          <Writer>{makeNewLine('섬뜩한 고양이')}</Writer>
        </UserTab>
        <TalkBubble color={'#F7CE46'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <UserTab>
          <Avatar writer={'고양이'} backgroundColor={'#D95F29'} />
          <Writer>{makeNewLine('섬뜩한 고양이')}</Writer>
        </UserTab>
        <TalkBubble color={'#D95F29'}></TalkBubble>
      </TalkContainer>
    </TalkListContainerBlock>
  );
};

export default TalkListContainer;

const makeNewLine = (nickname: string) =>
  nickname.split(' ').map(word => (
    <>
      <span>{word}</span>
      <br />
    </>
  ));
