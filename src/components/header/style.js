import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: var(--white);
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px 0px;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  z-index: 10;

  h1 {
    border-left: 2px solid #292929;
    padding-left: 20px;
  }

  strong {
    color: var(--primary);
  }
`;