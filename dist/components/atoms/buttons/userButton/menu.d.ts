/// <reference types="react" />
interface Props {
    anchorEl: null | HTMLElement;
    open: boolean;
    handleClose: () => void;
}
export default function UserMenu({ anchorEl, open, handleClose }: Props): JSX.Element;
declare const menu: typeof UserMenu;
export { menu };
