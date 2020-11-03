import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ProductInfo from '../components/ProductInfo';

const DetailsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ReturnLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #6e6e6e;
  margin: 2rem;
  &:hover{
  text-decoration: underline;
  }
`;
function Detail({
  match: {
    params: { id }
  }
}) {
  return (
    <DetailsCard>
      <ReturnLink to="/"> ◀️ Return to List View</ReturnLink>
      <ProductInfo id={id} />
    </DetailsCard>
  );
}

export default Detail;
