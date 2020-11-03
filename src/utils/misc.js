import styled from 'styled-components';
import ProductImage from '../components/ProductImage';

const ListTable = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #ddd;
  flex-direction: row;
  margin: 0 1.5rem;
  order: 1;
  h3 {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
    text-align: left;
  }
  h5 {
    font-size: 1.2rem;
    font-weight: normal;
    text-align: left;
    max-width: 45rem;
  }
`;

const constructProductItems = (type, value) => {
  if (
    type === 'name' ||
    type === 'sku' ||
    type === 'description' ||
    type === 'qty_pack' ||
    type === 'color' ||
    type === 'size'
  ) {
    return (
      <ListTable>
        <h3>{type} </h3>
        <h5>{value}</h5>
      </ListTable>
    );
  } else if (type === 'price') {
    return constructPrice(value);
  } else if (type === 'main_image') {
    return constructImage(value);
  } else {
    // acts as our "default"
    return null;
  }
};

const constructProductThumbnail = (type, value) => {
  if (type === 'price') {
    return constructPrice(value);
  } else if (type === 'main_image') {
    return constructImage(value);
  } else if (type === 'name') {
    return <h3>{value}</h3>;
  } else {
    return null;
  }
};
const constructPrice = (value) => {
  return (
    <h4>
      From {value.value} {value.unitAbbreviation}
    </h4>
  );
};
const constructImage = (href) => {
  return <ProductImage id={href.id} />;
};

export { constructProductItems, constructProductThumbnail };
