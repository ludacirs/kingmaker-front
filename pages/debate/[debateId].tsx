import React, { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { Layout, SideBarAgora } from '@atoms/index';
import { getDebateList, getScript } from '../../apis/debate';
import { DebateDetail, Script } from '@models/Script';
import DebateDetailContents from '@templates/DebateDetailContents/DebateDetailContents';
import { REVALIDATE_TIME } from '@lib/constant';

const DebateDetailPageBlock = styled.div`
  height: inherit;
  position: relative;
`;
interface DebateDetailPageProps {
  debateDetail: DebateDetail;
}

const DebateDetailPage: NextPage = ({ debateDetail }: DebateDetailPageProps) => {
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const { script } = debateDetail;
  if (!script || 'status' in script) {
    return <></>;
  }
  const toc = getTocForScript(script);

  return (
    <DebateDetailPageBlock>
      <SideBarAgora toc={toc} currentCategoryId={currentCategoryId} setCurrentCategoryId={setCurrentCategoryId} />
      <DebateDetailContents script={script[currentCategoryId]} />
    </DebateDetailPageBlock>
  );
};

export default DebateDetailPage;

DebateDetailPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths = async () => {
  const debateList = await getDebateList();

  if ('status' in debateList) {
    return { paths: [], fallback: 'blocking' };
  }
  const paths = debateList.map(({ debateId }) => ({
    params: { debateId: debateId.toString() },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (context: any) => {
  const { debateId } = context.params;
  const debateDetail = await getScript(+debateId);
  return { props: { debateDetail }, revalidate: REVALIDATE_TIME };
};

const getTocForScript = (script: Script[]) => script.map(({ category }, index) => ({ name: category, id: index }));
