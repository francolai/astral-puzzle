import PrizeDatabase from '../data/prize/PrizeDatabase.js';

/**
 * Represents a single prize with a name and a probability.
 */
class Prize {
  #name; // Private field for the prize name
  #probability; // Private field for the prize probability
  #quantity; // Private field for the quantity of the prize

  /**
   * Creates a new Prize instance.
   * @param {string} name - The name of the prize.
   * @param {number} probability - The probability of winning this prize (0 < probability <= 100).
   * @throws {Error} If the name is invalid or the probability is out of range.
   */
  constructor(name, probability, quantity = 1) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error('Prize name must be a non-empty string.');
    }
    if (
      typeof probability !== 'number' ||
      probability <= 0 ||
      probability > 100
    ) {
      throw new Error('Probability must be a number between 0 and 100.');
    }

    this.#name = name;
    this.#probability = probability;
    this.#quantity = quantity; // Set the quantity to the provided value
  }

  /**
   * Gets the name of the prize.
   * @returns {string} The name of the prize.
   */
  get name() {
    return this.#name;
  }

  /**
   * Gets the probability of the prize.
   * @returns {number} The probability of the prize.
   */
  get probability() {
    return this.#probability;
  }
  /**
   * Gets the quantity of the prize.
   * @returns {number} The quantity of the prize.
   */
  get quantity() {
    return this.#quantity;
  }

  /**
   * Looks up the prize database for additional information about the prize.
   * @returns {{imageURL: string, quality: string}|null} The prize information or null if not found.
   * @throws {Error} If the quality is not one of the allowed values.
   */
  getPrizeDetails() {
    const details = PrizeDatabase[this.#name];
    if (
      details &&
      !['一般', '特殊', '稀有', '史詩', '競技', '神話', '永恆'].includes(
        details.quality
      )
    ) {
      throw new Error(`Invalid quality value: ${details.quality}`);
    }
    return details;
  }
}

export default Prize;
