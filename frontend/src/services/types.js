/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} Item
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} imageUrl
 * @property {number} startingPrice
 * @property {number} currentPrice
 * @property {string} endTime - ISO 8601 date string
 * @property {'Active' | 'Sold' | 'Expired'} status
 * @property {string} sellerId
 * @property {User} seller
 * @property {Bid[]} bids
 */

/**
 * @typedef {Object} Bid
 * @property {string} id
 * @property {number} amount
 * @property {string} createdAt - ISO 8601 date string
 * @property {string} bidderId
 * @property {User} bidder
 * @property {string} itemId
 */
