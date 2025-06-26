export const logRequest = (url, method, body) => {
  console.log('[LOG] ${method} → ${url}');
  console.log("Request Body:", body);
};