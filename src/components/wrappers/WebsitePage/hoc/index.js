/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import WebsitePageWrapper from '..';
import theme from '../../../../theme';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => (
    <WebsiteGlobalProvider theme={theme}>
      <WebsitePageWrapper
        toggleTheme={props.toggleTheme}
        {...pageWrapperProps}
        {...props.pageWrapperProps}
        messages={props.messages}
      >
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
