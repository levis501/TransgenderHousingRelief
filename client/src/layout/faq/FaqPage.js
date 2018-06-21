import React, { Component } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import {
  Container,
  Header,
  Menu,
  Segment,
  Accordion
} from 'semantic-ui-react';

import PageLayout from '../components/PageLayout';
import { faqData } from '../../data/faq';

class FaqMenu extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    let questionIndex = 0;

    return (
      <Accordion as={Menu} vertical>
        {
          faqData.map((category, i) => (
            <Menu.Item key={i}>
              <Accordion.Title
                active={activeIndex === i}
                content={category.category}
                index={i}
                onClick={this.handleClick}
              />
              <Accordion.Content active={activeIndex === i}>
                <Menu vertical text>
                {
                  category.entries.map((entry, i) => (
                    <Menu.Item as={NavHashLink} to={`/faq#${questionIndex++}`}>
                      {entry.question}
                    </Menu.Item>
                  ))
                }
                </Menu>
              </Accordion.Content>
            </Menu.Item>
          ))
        }
      </Accordion>
    )
  }
}

const FaqText = ({data}) => {
  let questionIndex = 0;

  return (
    <div>
      {data.map((category, i)=>
      (
        <Segment vertical key={i}>
          <Header as='h2'>{category.category}</Header>
          {
            category.entries.map((entry, i)=>(
              <React.Fragment key={i}>
                <Header as='h3' id={questionIndex++}>{entry.question}</Header>
                <p>{entry.answer}</p>
              </React.Fragment>
            ))
          }
        </Segment>
      ))}
    </div>
  );
}

class FaqPage extends Component {
  render() {
    return (
      <PageLayout>
        <Container>
          <Header as='h1'>FAQ</Header>
          <FaqMenu />
          <FaqText data={faqData} />
        </Container>
      </PageLayout>
    );
  }
}

export default FaqPage;
