class AuthProvider {
  generateToken(user) {
    return `token-${user.id}-${Date.now()}`;
  }

  validateToken(token) {
    return Boolean(token && token.startsWith("token-"));
  }
}

module.exports = AuthProvider;
