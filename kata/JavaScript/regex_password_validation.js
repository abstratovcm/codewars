function validate(password) {
  return /^[a-zA-Z0-9]{6,}$/.test(password) &&
         /[a-z]/.test(password)             &&
         /[A-Z]/.test(password)             &&
         /[0-9]/.test(password)
}
