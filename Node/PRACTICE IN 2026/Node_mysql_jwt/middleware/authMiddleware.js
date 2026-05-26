const db=require("../app");
const checkDbConnection = async (req, res, next) => {
  try {
    const connection = await db.getConnection();
    await connection.ping();
    connection.release();
    next();
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: 'Database connection failed',
      error: error.message
    });
  }
};

module.exports = checkDbConnection;