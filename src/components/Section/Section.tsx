type SectionProps = {
  children: React.ReactElement;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default Section;
