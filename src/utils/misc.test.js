import { constructProductItems, constructProductThumbnail } from './misc';
import { render } from '@testing-library/react';

const priceValue = {
  unit: '1', unitAbbreviation: 'USD', value: '199'
}
describe('Misc util', () => {
  it('ConstructProductItems util for description', () => {
    const { getByText } = render(
      constructProductItems('description', 'he Classic St. Mawes, an integral part of the flagship Classic Collection')
    );
    expect(getByText('description')).toBeInTheDocument();
    expect(getByText('he Classic St. Mawes, an integral part of the flagship Classic Collection')).toBeInTheDocument();
  });
  it('ConstructProductItems util for price', () => {
    const { getByText } = render(constructProductItems('price', priceValue));
    expect(getByText('From 199 USD')).toBeInTheDocument();
  });

  it('ConstructProductThumbnail with price', () => {
      const {getByText} = render(constructProductThumbnail('price',priceValue))
    expect(getByText('From 199 USD')).toBeInTheDocument();
  })
});
