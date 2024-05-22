export const BACKEND_URL = "https://racehub.onrender.com/api/v1";

export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

// Ranking urls
export const GET_RANKING_URL = BACKEND_URL + "/ranking";

// User urls
export const USER_LOGIN_URL = BACKEND_URL + "/racers/login";
export const USER_REGISTER_URL = BACKEND_URL + "/racers/save";
export const USER_GET_BY_RACER_ID_URL = BACKEND_URL + "/racers/:racerId";
export const USER_GET_BY_EMAIL_URL = BACKEND_URL + "/racers/by-email";

// Tracks url
export const TRACKS_GET_ALL_URL = BACKEND_URL + "/tracks/all";
export const TRACKS_PREFERRED_URL =
  BACKEND_URL + "/tracks/preferred-track/:racerId";

// Races url
export const RACES_BY_RACER_ID_URL = BACKEND_URL + "/races/racer/:racerId";

// Karts url
export const KARTS_GET_ALL_URL = BACKEND_URL + "/karts/all";
