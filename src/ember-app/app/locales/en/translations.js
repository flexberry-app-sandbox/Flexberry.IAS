import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISIASCategoryLForm from './forms/i-i-s-i-a-s-category-l';
import IISIASCounterPartyLForm from './forms/i-i-s-i-a-s-counter-party-l';
import IISIASIncidentLForm from './forms/i-i-s-i-a-s-incident-l';
import IISIASPositionLForm from './forms/i-i-s-i-a-s-position-l';
import IISIASResponsibleLForm from './forms/i-i-s-i-a-s-responsible-l';
import IISIASCategoryEForm from './forms/i-i-s-i-a-s-category-e';
import IISIASCounterPartyEForm from './forms/i-i-s-i-a-s-counter-party-e';
import IISIASIncidentEForm from './forms/i-i-s-i-a-s-incident-e';
import IISIASPositionEForm from './forms/i-i-s-i-a-s-position-e';
import IISIASResponsibleEForm from './forms/i-i-s-i-a-s-responsible-e';
import IISIASCategoryModel from './models/i-i-s-i-a-s-category';
import IISIASCommentModel from './models/i-i-s-i-a-s-comment';
import IISIASCounterPartyModel from './models/i-i-s-i-a-s-counter-party';
import IISIASIncidentModel from './models/i-i-s-i-a-s-incident';
import IISIASPositionModel from './models/i-i-s-i-a-s-position';
import IISIASResponsibleModel from './models/i-i-s-i-a-s-responsible';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-a-s-category': IISIASCategoryModel,
    'i-i-s-i-a-s-comment': IISIASCommentModel,
    'i-i-s-i-a-s-counter-party': IISIASCounterPartyModel,
    'i-i-s-i-a-s-incident': IISIASIncidentModel,
    'i-i-s-i-a-s-position': IISIASPositionModel,
    'i-i-s-i-a-s-responsible': IISIASResponsibleModel
  },

  'application-name': 'IAS',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'IAS',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'IAS',
          title: 'IAS'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'serive-desk': {
          caption: 'Serive Desk',
          title: 'Serive Desk',
          'i-i-s-i-a-s-incident-l': {
            caption: 'Инцидент',
            title: ''
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-i-a-s-responsible-l': {
              caption: 'Ответственный',
              title: 'Responsible'
            },
            'i-i-s-i-a-s-position-l': {
              caption: 'Должность',
              title: 'Position'
            },
            'i-i-s-i-a-s-counter-party-l': {
              caption: 'Контрагент',
              title: 'Counter party'
            },
            'i-i-s-i-a-s-category-l': {
              caption: 'Категория',
              title: 'Category'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-a-s-category-l': IISIASCategoryLForm,
    'i-i-s-i-a-s-counter-party-l': IISIASCounterPartyLForm,
    'i-i-s-i-a-s-incident-l': IISIASIncidentLForm,
    'i-i-s-i-a-s-position-l': IISIASPositionLForm,
    'i-i-s-i-a-s-responsible-l': IISIASResponsibleLForm,
    'i-i-s-i-a-s-category-e': IISIASCategoryEForm,
    'i-i-s-i-a-s-counter-party-e': IISIASCounterPartyEForm,
    'i-i-s-i-a-s-incident-e': IISIASIncidentEForm,
    'i-i-s-i-a-s-position-e': IISIASPositionEForm,
    'i-i-s-i-a-s-responsible-e': IISIASResponsibleEForm
  },

});

export default translations;
