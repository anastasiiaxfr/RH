'use strict';

/**
 * pomichnik service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pomichnik.pomichnik');
