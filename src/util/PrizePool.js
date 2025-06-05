import Prize from './Prize.js';

/**
 * Represents a prize pool where each prize has a specific probability.
 * The sum of all probabilities must equal 100%.
 */
class PrizePool {
  #prizes; // Private field to store the list of prizes

  constructor() {
    /**
     * Initialize the private field for prizes.
     * @type {Array<Prize>}
     */
    this.#prizes = [];
  }

  /**
   * Adds a prize to the pool.
   * @param {Prize} prize - The prize to add.
   * @throws {Error} If adding the prize causes the total probability to exceed 100%.
   */
  addPrize(prize) {
    if (!(prize instanceof Prize)) {
      throw new Error('The prize must be an instance of the Prize class.');
    }

    const totalProbability =
      this.#prizes.reduce((sum, p) => sum + p.probability, 0) +
      prize.probability;
    const epsilon = 0.0001;
    if (totalProbability >= 100 + epsilon) {
      throw new Error(
        'Total probability cannot exceed 100% (within tolerence).'
      );
    }

    this.#prizes.push(prize);
  }

  /**
   * Validates that the total probability of all prizes equals 100%.
   * @throws {Error} If the total probability does not equal 100%.
   */
  validateProbabilities() {
    const totalProbability = this.#prizes.reduce(
      (sum, prize) => sum + prize.probability,
      0
    );
    const epsilon = 0.0001; // Tolerance for floating-point comparison
    if (Math.abs(totalProbability - 100) > epsilon) {
      throw new Error(
        'The total probability of all prizes must equal 100% (within tolerance).'
      );
    }
  }

  /**
   * Draws a prize from the pool based on the probabilities.
   * @returns {string|null} The name of the drawn prize, or `null` if no prize is drawn.
   * @throws {Error} If the total probability does not equal 100%.
   */
  drawPrize() {
    this.validateProbabilities();

    const random = Math.random() * 100; // Generate a random number between 0 and 100
    let cumulativeProbability = 0;

    for (const prize of this.#prizes) {
      cumulativeProbability += prize.probability;
      if (random <= cumulativeProbability) {
        return {
          name: prize.name,
          quantity: prize.quantity,
          probability: prize.probability,
        };
      }
    }

    return null; // Fallback (shouldn't happen if probabilities are valid)
  }

  /**
   * Returns the probability of obtaining a prize by its name.
   * @param {string} prizeName - The name of the prize.
   * @returns {number|null} The probability of the prize, or null if not found.
   */
  getPrizeProbability(prizeName) {
    const prize = this.#prizes.find((p) => p.name === prizeName);
    return prize ? prize.probability : null;
  }

  /**
   * Gets the list of all prizes in the pool.
   * @returns {Array<Prize>} An array of all prizes.
   */
  get prizes() {
    return [...this.#prizes]; // Return a shallow copy to prevent direct modification
  }
}

export default PrizePool;
