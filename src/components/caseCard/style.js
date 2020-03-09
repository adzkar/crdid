import styled from "styled-components";

export const CaseWrapper = styled.div`
  .ant-card {
    border-radius: 6px;
    color: #222222;
    border: 1px solid var(--primary);
    margin-bottom: 20px;
  }
  .ant-card-head {
    background-color: var(--primary);
    color: var(--white);
  }
  .ant-card-head-title {
    text-align: center;
    text-transform: uppercase;
  }
  .component_highlighted {
    text-align: center;
  }
  .component_highlighted strong {
    font-size: 26px;
    display: block;
    margin-bottom: 4px;
  }
  .component_rows {
    display: flex;
    justify-content: space-between;

    .component_highlighted strong {
      font-size: 20px;
    }

    .container_highlighted_description {
      font-size: 12px;
    }
  }
`;
