export const selectAuthStatus=({auth})=>auth.status;
export const selectAuthUser=({auth})=>auth.data.user;
export const selectAuthToken=({auth})=>auth.data.token;