import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.serive-desk.caption'),
          title: i18n.t('forms.application.sitemap.serive-desk.title'),
          children: [{
            link: 'i-i-s-i-a-s-incident-l',
            caption: i18n.t('forms.application.sitemap.serive-desk.i-i-s-i-a-s-incident-l.caption'),
            title: i18n.t('forms.application.sitemap.serive-desk.i-i-s-i-a-s-incident-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.serive-desk.справочники.caption'),
            title: i18n.t('forms.application.sitemap.serive-desk.справочники.title'),
            children: [{
              link: 'i-i-s-i-a-s-responsible-l',
              caption: i18n.t('forms.application.sitemap.serive-desk.справочники.i-i-s-i-a-s-responsible-l.caption'),
              title: i18n.t('forms.application.sitemap.serive-desk.справочники.i-i-s-i-a-s-responsible-l.title'),
              icon: 'briefcase',
              children: null
            }, {
              link: 'i-i-s-i-a-s-position-l',
              caption: i18n.t('forms.application.sitemap.serive-desk.справочники.i-i-s-i-a-s-position-l.caption'),
              title: i18n.t('forms.application.sitemap.serive-desk.справочники.i-i-s-i-a-s-position-l.title'),
              icon: 'folder',
              children: null
            }, {
              link: 'i-i-s-i-a-s-counter-party-l',
              caption: i18n.t('forms.application.sitemap.serive-desk.справочники.i-i-s-i-a-s-counter-party-l.caption'),
              title: i18n.t('forms.application.sitemap.serive-desk.справочники.i-i-s-i-a-s-counter-party-l.title'),
              icon: 'edit',
              children: null
            }, {
              link: 'i-i-s-i-a-s-category-l',
              caption: i18n.t('forms.application.sitemap.serive-desk.справочники.i-i-s-i-a-s-category-l.caption'),
              title: i18n.t('forms.application.sitemap.serive-desk.справочники.i-i-s-i-a-s-category-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})