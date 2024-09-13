import SectionTitle from 'components/SectionTitle/SectionTitle';
import { SectionStyled } from './Section.styled';

type SectionProps = {
  title: string;
  marginBottom: string;
  children: React.ReactElement;
};

const Section: React.FC<SectionProps> = ({ title, marginBottom, children }): React.ReactElement => {
  return (
    <SectionStyled>
      <SectionTitle title={title} marginBottom={marginBottom} />
      {children}
    </SectionStyled>
  );
};

export default Section;
