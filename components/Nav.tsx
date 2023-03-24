import { FC, PropsWithChildren } from 'react';
import tw, { css, styled } from 'twin.macro';

// const StyledNavbar = tw.nav
//     `w-full bg-gradient-to-r from-lime-light to-lime-dark text-white py-4 px-6 fixed top-0 shadow-lime z-10`

const StyledNavbar = styled.nav(() => [
    tw`w-full bg-gradient-to-r from-lime-light to-lime-dark text-white py-4 px-6 fixed top-0 shadow-lg z-10`,
    css`
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    margin-top: 12px;
    border-radius: 4px;
    `
]);

const SiteTitle = tw.h1`
  text-2xl font-bold
`;

const Breadcrumbs = tw.div`
  text-sm mt-1
`;

const BreadcrumbItem = styled.span(() => [
    tw`mx-1`,

    css`
        &:not(:last-child)::after {
            content: '>';
            margin-left: 0.25rem;
            margin-right: 0.25rem;
          }
    `
]);
interface Props {
    vault: {
        displayName: string,
        id: string
    },
    topic: {
        displayName: string,
        id: string
    },
    note: {
        displayName: string,
        id: string
    },
    title: string
}

const Navbar: FC<PropsWithChildren<Props>> = ({ title, vault, topic, note }: Props) => {
    return (
        <StyledNavbar>
            <SiteTitle>{title}</SiteTitle>
            <Breadcrumbs>
                {vault && <BreadcrumbItem>{vault.displayName}</BreadcrumbItem>}
                {topic && <BreadcrumbItem>{topic.displayName}</BreadcrumbItem>}
                {note && <BreadcrumbItem>{note.displayName}</BreadcrumbItem>}
            </Breadcrumbs>
        </StyledNavbar>
    )
}

export default Navbar;