import React from 'react';
import {
  Item,
  Icon,
  Label
} from 'semantic-ui-react';

const SearchResult = ({title, city, state, startDate, description, price, tags}) => (
  <Item>
    <Item.Content>
      <Item.Header as='a'>
        {title}
      </Item.Header>
      <Item.Meta>
        <span>{city}, {state}</span>
      </Item.Meta>
      <Item.Description>{description}</Item.Description>
      <Item.Extra>
        <Label basic size='large'>{price}</Label>
        <Label basic size='large'><Icon name='calendar alternate outline'/>{startDate}</Label>
        {
          tags ?
            tags.map(tag => (<Label key={tag} content={tag} />))
            : null
        }
      </Item.Extra>
    </Item.Content>
  </Item>
)

export default SearchResult;
