import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { getProductAssets } from './Queries';
import Loading from '../utils/loading';

const Image = styled.img`
  width: 100%;
  order: 0;
  cursor: pointer;
  background: #f5f5f5;
`;

const ProductImage = ({ id }) => {
  const { isLoading, error, data: productData } = useQuery([`productImage`, { id }], getProductAssets);

  if (isLoading) return <Loading />;

  if (error) return 'An error has occurred: ';

  return <Image src={productData.data.uri} alt={productData.data.filename} />;
};

export default ProductImage;
