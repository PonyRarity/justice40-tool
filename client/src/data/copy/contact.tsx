/* eslint-disable max-len */
import React from 'react';
import {defineMessages} from 'react-intl';
import {FormattedMessage} from 'gatsby-plugin-intl';
import * as COMMON_COPY from './common';
import {PAGES_ENDPOINTS} from '../constants';
import {FOOTER} from './common';

export const PAGE_INTRO = defineMessages({
  PAGE_TILE: {
    id: 'contact.page.title.text',
    defaultMessage: 'Contact',
    description: 'Navigate to the contact page, this is the contact page title text',
  },
  PAGE_HEADING: {
    id: 'contact.page.header.text',
    defaultMessage: 'Contact',
    description: 'Navigate to the contact page, this is the contact page header text',
  },
  PAGE_SUB_HEADING: {
    id: 'contact.page.sub.header.text',
    defaultMessage: 'Email us',
    description: 'Navigate to the contact page, this is the contact page sub header text',
  },
  PAGE_DESCRIPTION: {
    id: 'contact.page.sub.header.text',
    defaultMessage: 'Email us',
    description: 'Navigate to the contact page, this is the contact page sub header text',
  },
  SURVEY_TEXT: {
    id: 'contact.page.fab.survey.text',
    defaultMessage: `Help improve the site & data`,
    description: 'Navigate to the contact page, this is the text for floating action button',
  },
  SURVEY_URL: {
    id: 'contact.page.fab.survey.link',
    defaultMessage: 'https://www.surveymonkey.com/r/cejst-survey',
    description: 'The footer sticky link that links to the CEJST survey',
  },
});

export const RFI_BOX = defineMessages({
  TITLE: {
    id: 'contact.page.request.for.info.box.title',
    defaultMessage: 'Request for Information',
    description: 'Navigate to the contact page, this is the title of the request for information box',
  },
});

export const RFI_BOX_BODY = <FormattedMessage
  id={'contact.page.request.for.info.box.body'}
  defaultMessage={`During the beta period, comments may be submitted on the Climate and Economic Justice Screening Tool via CEQ’s Request for Information available on <link1>federalregister.gov</link1>.`}
  description={'Navigate to the contact page, this is the body of the request for information box'}
  values={{
    link1: COMMON_COPY.linkFn(FOOTER.RFI_LINK.defaultMessage, false, true),
  }}
/>;

export const CENSUS_TRACT_FEEDBACK = {
  TITLE: <FormattedMessage
    id={'contact.page.census.tract.feedback.title'}
    defaultMessage={`Census tract feedback`}
    description={'Navigate to the contact page, this is the census tract feedback section'}
  />,
  PARAGRAPH1: <FormattedMessage
    id={'contact.page.census.tract.feedback.para1'}
    defaultMessage={`
      To provide feedback about a specific census tract, either select the send feedback button after
      selecting a census tract on the <link1>Explore the map</link1> page or use the email address provided above. Please include the census tract ID, county, and state or territory information, in addition to your feedback.
    `}
    description={'Navigate to the contact page, this is the census tract feedback section'}
    values={{
      link1: COMMON_COPY.linkFn(PAGES_ENDPOINTS.EXPLORE, true, false),
    }}
  />,
  PARAGRAPH2: <FormattedMessage
    id={'contact.page.census.tract.feedback.para2'}
    defaultMessage={`
      If there are specific data indicators that could be improved or changed, please include that
      information in the body of the email.
    `}
    description={'Navigate to the contact page, this is the census tract feedback section'}
  />,
  PARAGRAPH3: <FormattedMessage
    id={'contact.page.census.tract.feedback.para3'}
    defaultMessage={`
      In addition, you can provide feedback on the tool via this <link1>survey</link1>.
    `}
    description={'Navigate to the survey. Spanish should substitute <link2> to get Spanish link! Already coded to support'}
    values={{
      link1: COMMON_COPY.linkFn('https://www.surveymonkey.com/r/cejst-survey', false, true),
      link2: COMMON_COPY.linkFn('https://www.surveymonkey.com/r/cejst-survey-es', false, true),
    }}
  />,
};


