export const BACKEND_URL = "https://racehub.onrender.com/api/v1/";

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
