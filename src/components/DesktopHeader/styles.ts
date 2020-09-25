import styled, { css } from 'styled-components';

import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { BiMessageAltDetail } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';

export const Container = styled.header`
  background: var(--color-header);
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* consumindo o maximo de espaço */
  flex: 1;

  max-width: 1128px;
  margin: 0 auto;
  height: 52px;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      background: none;
      border: 0;
      outline: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 90px;
      min-height: 100%;

      color: var(--color-icons);
      cursor: pointer;
      &:hover {
        color: var(--color-white);
      }
      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

export const LinkedInIcon = styled(GrLinkedin)``;

export const SearchInput = styled.div``;

const iconCSS = css`
  width: 24px;
  height: 24px;
`;

export const HomeIcon = styled(AiFillHome)`
  ${iconCSS}
`;

export const PeopleIcon = styled(MdPeopleOutline)`
  ${iconCSS}
`;

export const CaseIcon = styled(BsBriefcase)`
  ${iconCSS}
`;

export const MessageIcon = styled(BiMessageAltDetail)`
  ${iconCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${iconCSS}
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;

  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  ${iconCSS}
`;
