import React from 'react';
import { Container, Header, } from 'semantic-ui-react';
import PageLayout from '../components/PageLayout';
import ResourceLinks from './ResourceLinks';


export default () => (
    <PageLayout>
        <Container>
            <Header as='h1'>Legal Resources</Header>
            <ResourceLinks
                recordFilter={r => r.tags.some((tag) => (tag).match(/^legal-.+/i))}
                tagDisplayFilter={(tag) => (!tag.match(/^(legal-.+|us|us-states)$/i))}
            />
        </Container>
    </PageLayout>
)