const apiRoute = {
  auth: {
    login: "/auth/login-with-email-password",
    validateSessionCode: "/auth/verify-session-code",
    requestValidateSessionCode: "/auth/request-verify-session-code",
    requestPropertyScreenPermissions: "/auth//property-screen-permission",
    forgotPassword: "/auth/forgot-password",
    resetPasswordByCode: "/auth/reset-password-by-code",
  },

};

export default apiRoute;
