import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { getAllProducts } from '../components/Queries';
import ProductInfo from '../components/ProductInfo';
import Container from '../components/Container';

const ProductContainer = styled.div`
  max-width: 90%;
  width: 100%;
  margin: 2rem auto;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  transition: 0.5s all ease-in;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    display: block;
  }
  h3 {
    order: 1;
    margin: 0.5rem 1.5rem;
  }
  h4 {
    margin: 0 1.5rem 1rem 1.5rem
  }
`;

function List() {
  const { data: getProduct, refetch, error } = useQuery('allProducts', getAllProducts, {});
  if (error) {
    return <div>There was an Error</div>;
  }
  // If there is no data do return nothing
  if (!getProduct) {
    return <button onClick={() => refetch()}>Fetch Products</button>;
  }
  return (
    <Container>
      <ProductContainer>
        <ProfileContainer>
          {getProduct.data.map((item) => (
            <ProductInfo id={item.id} isparentindexpage key={item.id} />
          ))}
        </ProfileContainer>
      </ProductContainer>
    </Container>
  );
}

export default List;
