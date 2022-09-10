import styled from "styled-components/macro";

const FooterContainer = styled.footer`
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    background-color: white;
`;

const FooterTitle = styled.p`
    margin-left: 40px;
    padding: 0 4px;
`;

const FooterRights = styled.p`
    margin-right: 40px;
    padding: 0 4px;
`;

function Footer() {
    const year = new Date().getFullYear();
    return (
        <FooterContainer>
            <FooterTitle>MindStore</FooterTitle>
            <FooterRights>© {year}. All Rights Reserved.</FooterRights>
        </FooterContainer>
    )
}

export default Footer;