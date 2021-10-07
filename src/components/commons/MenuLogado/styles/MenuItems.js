import Image from 'next/image';
import styled from 'styled-components';

export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 224px;
`;

export const ProfilePicture = styled(Image)`
  border-radius: 50%;
`;
