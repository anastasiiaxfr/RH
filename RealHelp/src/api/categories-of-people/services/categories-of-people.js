'use strict';

/**
 * categories-of-people service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::categories-of-people.categories-of-people');
