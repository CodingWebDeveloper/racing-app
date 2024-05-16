export const BACKEND_URL = "https://racehub.onrender.com/api/v1";

export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

// Ranking urls
export const RANKING_URL = BACKEND_URL + "/ranking";
export const RANKING_BEST_SESSION_URL = RANKING_URL + "/best-last-session";

// User urls
export const USER_LOGIN_URL = BACKEND_URL + "/racers/login";
export const USER_REGISTER_URL = BACKEND_URL + "/racers/save";
export const USER_GET_BY_RACER_ID = BACKEND_URL + "/racers/:racerId";
