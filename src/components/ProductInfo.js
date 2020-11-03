import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getProductDetails } from './Queries';
import { constructProductItems, constructProductThumbnail } from '../utils/misc';
import React from 'react';

const ProfileContainerItems = styled(Link)`
  width: ${(props) => (props.$isparentindexpage ? '32%' : '45%')};
  display: flex;
  flex-direction: column;
  color: #00081c;
  text-decoration: none;
  cursor: ${(props) => (props.$isparentindexpage ? 'pointer' : 'text')};
  transition: box-shadow 0.3s ease 0s;
  &:hover {
    box-shadow: ${(props) =>
      props.$isparentindexpage ? 'rgba(0, 0, 0, 0.13) 0px 10px 20px 0px, rgba(0, 0, 0, 0.19) 0px 3px 9px 0px' : 'none'};
  }

  @media (max-width: 400px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
  h4 {
    order: 2;
    margin: 1.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    letter-spacing: 0.15rem;
    font-weight: normal;
  }
`;

const ProductInfo = ({ id, isparentindexpage }) => {
  const { error, data: productData } = useQuery([`productData`, { id }], getProductDetails);

  // if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ';

  return (
    <ProfileContainerItems to={`${id}`} $isparentindexpage={isparentindexpage}>
      {productData?.data?.elements?.map((item) => (
        <React.Fragment key={item.name}>
          {!isparentindexpage ? (
            constructProductItems(item.name, item.value)
          ) : (
            constructProductThumbnail(item.name, item.value)
          )}
        </React.Fragment>
      ))}
    </ProfileContainerItems>
  );
};

export default ProductInfo;
