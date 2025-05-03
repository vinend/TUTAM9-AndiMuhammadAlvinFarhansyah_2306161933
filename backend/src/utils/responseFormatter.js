/**
 * Standardized API response formatter
 * Ensures all API responses follow a consistent format
 */
const responseFormatter = {
  /**
   * Format a successful response
   * @param {Object} res - Express response object
   * @param {String} message - Success message
   * @param {Object} data - Optional data payload
   * @param {Number} statusCode - HTTP status code (default: 200)
   */
  success: (res, message, data = null, statusCode = 200) => {
    // Set content type explicitly to ensure JSON
    res.setHeader('Content-Type', 'application/json');
    
    return res.status(statusCode).json({
      success: true,
      message,
      payload: data
    });
  },

  /**
   * Format an error response
   * @param {Object} res - Express response object
   * @param {String} message - Error message
   * @param {Number} statusCode - HTTP status code (default: 400)
   * @param {Object} errors - Optional detailed error information
   */
  error: (res, message, statusCode = 400, errors = null) => {
    // Set content type explicitly to ensure JSON
    res.setHeader('Content-Type', 'application/json');
    
    return res.status(statusCode).json({
      success: false,
      message,
      payload: null,
      ...(errors && { errors })
    });
  }
};

module.exports = responseFormatter;