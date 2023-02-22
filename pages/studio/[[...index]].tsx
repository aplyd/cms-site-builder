import { FC } from 'react';
import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio';
import { NextStudioHead } from 'next-sanity/studio/head';
import config from '../../sanity.config';

const Index: FC<{}> = () => (
  <>
    <Head>
      <NextStudioHead />
    </Head>
    <NextStudio config={config} />
  </>
);

export default Index;
