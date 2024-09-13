import { SectionTitleStyled } from './SectionTitle.styled';

type SectionTitleProps = {
  title: string;
  marginBottom: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, marginBottom }): React.ReactElement => {
  return <SectionTitleStyled marginBottom={marginBottom}>{title}</SectionTitleStyled>;
};

export default SectionTitle;
