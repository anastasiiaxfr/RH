import type { Schema, Attribute } from '@strapi/strapi';

export interface SocSoc extends Schema.Component {
  collectionName: 'components_soc_socs';
  info: {
    displayName: 'soc';
    icon: 'crown';
  };
  attributes: {
    url: Attribute.String;
    socials: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'soc.soc': SocSoc;
    }
  }
}
