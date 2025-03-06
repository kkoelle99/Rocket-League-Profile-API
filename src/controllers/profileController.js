const { fetchProfile, fetchSessions } = require("trn-rocket-league");

// Helper function to validate platforms
const validPlatforms = ["psn", "xbl", "steam", "epic", "switch"];

const getProfile = async (req, res) => {
  const { username, platform } = req.params;

  // Validate platform
  if (!validPlatforms.includes(platform)) {
    return res.status(400).json({ error: "Invalid platform" });
  }

  try {
    const profile = await fetchProfile(username, platform);
    console.log("Profile Data:", profile); // Log the profile data to see structure
    res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error.message); // Log the error message for debugging
    res.status(500).json({ error: `Error fetching profile: ${error.message}` });
  }
};

const getSessions = async (req, res) => {
  const { username, platform } = req.params;

  // Validate platform
  if (!validPlatforms.includes(platform)) {
    return res.status(400).json({ error: "Invalid platform" });
  }

  try {
    const sessions = await fetchSessions(username, platform);
    console.log("Sessions Data:", sessions); // Log the sessions data to see structure
    res.json(sessions);
  } catch (error) {
    console.error("Error fetching sessions:", error.message); // Log the error message for debugging
    res
      .status(500)
      .json({ error: `Error fetching sessions: ${error.message}` });
  }
};

module.exports = { getProfile, getSessions };
