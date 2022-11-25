import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

export default ({
  links,
  textActive,
}: {
  links: { text: string; link: string }[];
  textActive: string;
}) => {
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {links.map((item, index) => (
        <Link key={index} href={item.link} onClick={handleClick}>
          {item.text}
        </Link>
      ))}
      <Typography color="textPrimary">{textActive}</Typography>
    </Breadcrumbs>
  );
};
