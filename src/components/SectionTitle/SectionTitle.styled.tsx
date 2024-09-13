import styled from '@emotion/styled';

type TitleProps = {
  marginBottom: string;
};

const SectionTitleStyled = styled.h2<TitleProps>`
  margin-bottom: ${props => props.marginBottom};
  text-align: center;

  font-family: var(--second-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0.25em;

  color: var(--color-primary-black);
`;

export { SectionTitleStyled };
