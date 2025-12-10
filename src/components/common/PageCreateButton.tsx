import ButtonLinkComponent from '@/components/ui/ButtonLinkComponent';

interface Props {
  to: string;
  label: string;
}

const PageCreateButton = ({ to, label }: Props) => (
  <ButtonLinkComponent
    to={to}
    variant="contained"
  >
    {label}
  </ButtonLinkComponent>
);

export default PageCreateButton;
