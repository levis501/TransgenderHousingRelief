import React from 'react';
import {Container } from 'semantic-ui-react';
import PageLayout from '../components/PageLayout';
import ResourceLinks from './ResourceLinks';

const tagStartsWithLegal = tag => tag.match(/^legal-.+/i)
const recordDoesntHaveALegalTag = record => !record.tags.some(tagStartsWithLegal)
const tagDoesntStartWithHousingOrUS = tag => !tag.match(/^(housing|us|us-states)/i)

export default () => (
    <PageLayout>
        <Container>
            <ResourceLinks
                title='Housing Resources'
                recordDisplayFilter={recordDoesntHaveALegalTag}
                tagDisplayFilter={tagDoesntStartWithHousingOrUS}
            />
        </Container>
    </PageLayout>
)