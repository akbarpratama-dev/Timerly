const STORAGE_KEY = "timerly_sessions";

/**
 * Save a session to LocalStorage
 * @param {Object} sessionData - { questionCount, durationPerQuestion, questions: [...], totalTime, averageTime, date }
 */
export function saveSession(sessionData) {
  try {
    const sessions = getSessions();
    const session = {
      ...sessionData,
      id: Date.now(),
      date: new Date().toISOString(),
    };
    sessions.push(session);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
    return session;
  } catch (e) {
    console.error("Failed to save session:", e);
    return null;
  }
}

/**
 * Retrieve all saved sessions from LocalStorage
 * @returns {Array} Array of session objects
 */
export function getSessions() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to read sessions:", e);
    return [];
  }
}

/**
 * Clear all saved sessions
 */
export function clearSessions() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear sessions:", e);
  }
}
