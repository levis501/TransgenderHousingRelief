import React from 'react';
import {
  Form,
  TextArea,
  Button,
  Input,
  Grid
} from 'semantic-ui-react';

import LocationSelect from '../search/LocationSelect';
import TagSelect from '../search/TagSelect';
import PriceRangeSelect from '../search/PriceRangeSelect';
import DateSelect from './DateSelect';
import AdTypeSelect from './AdTypeSelect';

class SubmitAdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adType: 'wanted'
    }
    this.onSelectAdType = this.onSelectAdType.bind(this);
  }
  onSelectAdType(adType) {
    this.setState({adType});
  }
  isOfferedAd() {
    return this.state.adType === 'offered';
  }
  render() {
    return (
      <Form>
        <AdTypeSelect onSelect={this.onSelectAdType}/>
        <Form.Field>
          <label>Title</label>
          <Input/>
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <TextArea/>
        </Form.Field>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form.Field>
                <LocationSelect
                  disableAnywhere={this.isOfferedAd()}
                  disableDistance={this.isOfferedAd()}
                  singleCity={this.isOfferedAd()}
                  />
              </Form.Field>
              <Form.Group>
                <DateSelect />
              </Form.Group>
              <Form.Group>
                <PriceRangeSelect />
              </Form.Group>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Field>
                <TagSelect/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center'>
              <Form.Field>
                <Button primary size='large'>Submit Ad</Button>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

export default SubmitAdForm;
