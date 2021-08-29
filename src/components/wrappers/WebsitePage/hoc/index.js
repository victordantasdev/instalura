/* eslint-disable react/prop-types */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(PageComponent, { pageWrapperProps }) {
  return (props) => (
    <WebsiteGlobalProvider>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <WebsitePageWrapper toggleTheme={props.toggleTheme} {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
