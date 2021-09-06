import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  menuProps,
  toggleTheme,
}) {
  const [isModalOpen, setModalState] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO
        {...seoProps}
      />
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="space-between"
        backgroundImage={
          theme.title === 'light'
            ? 'url(/images/bubbles.svg)'
            : 'url(/images/bubbles_dark.svg)'
        }
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => { setModalState(false); }}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} setModalState={setModalState} />
          )}
        </Modal>

        {menuProps.display && (
          <Menu
            toggleTheme={toggleTheme}
            onCadastrarClick={() => setModalState(true)}
          />
        )}

        {children}

        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
