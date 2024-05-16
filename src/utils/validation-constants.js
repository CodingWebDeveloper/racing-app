// NEWS CONSTANTS
export const NEWS_TITLE_MIN_LENGTH = 5;
export const NEWS_TITLE_MAX_LENGTH = 30;
export const NEWS_CONTENT_MIN_LENGTH = 5;
export const NEWS_CONTENT_MAX_LENGTH = 255;
export const USER_NAME_MAX_LENGTH = 20;
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;

export const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@-_~])(?=.*[0-9])[A-Za-z@-_~0-9|]{6,20}$/;

// USERNAME
export const CHAR_AND_NUMBER_PATTERN = /([A-Za-z_]{5,15})\w+/;
// FOR TAGS
export const ONLY_CHAR_PATTERN = /^[A-Za-z]+$/;
export const NEWS_TITLE_PATTERN = /^[a-zA-Z0-9?!,.\s]+$/;
export const TAG_PATTERN = /^[A-Za-z]+$/;
