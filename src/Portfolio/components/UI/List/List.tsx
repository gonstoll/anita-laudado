import {ReactNode} from 'react';
import {StyledList, StyledListItem} from './styled';

interface ListProps {
  children: ReactNode;
}

interface ListItemProps extends ListProps {
  icon?: string;
}

export function ListItem({icon, children}: ListItemProps) {
  const hasIcon = icon?.length ? true : false;

  return (
    <StyledListItem hasIcon={hasIcon}>
      {icon && <span>{icon}</span>} {children}
    </StyledListItem>
  );
}

export default function List({children}: ListProps) {
  return <StyledList>{children}</StyledList>;
}
