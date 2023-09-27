export type IPCChannels = string;

// after create services post, put, & delete need to add here without prefix request or response
export type TMutationService = 'login';
// after create services get need to add here without prefix request or response
export type TQueryService = 'user';
