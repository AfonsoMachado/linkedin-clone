import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header``;

export const Wrapper = styled.div``;

export const LinkedInIcon = styled(GrLinkedin)``;

export const SearchInput = styled.div``;

const iconCSS = css`
  width: 24px;
  height: 24px;
`;

export const HomeIcon = styled(AiFillHome)`
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
