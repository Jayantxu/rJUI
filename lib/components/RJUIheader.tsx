import React from 'react';
import Head from 'next/head';

interface PAGETITLE {
    title: string
}
const pageHeader: React.FC<{pageTitle: PAGETITLE}> = ({ pageTitle }) => (
    <Head>
        <title>{pageTitle.title ? `${pageTitle.title} | ` : ''}RJUI - Jayant React UI</title>
    </Head>
);
export default pageHeader;