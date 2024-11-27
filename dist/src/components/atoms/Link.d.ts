import { default as React } from '../../../node_modules/react';
import { LinkProps as RRLinkProps } from 'react-router-dom';
import { LinkProps as MLinkProps } from '../../../node_modules/@mui/material';
type LinkProps = {
    children: React.ReactNode;
} & RRLinkProps & MLinkProps;
declare const Link: ({ children, ...rest }: LinkProps) => JSX.Element;
export { Link };
export default Link;
