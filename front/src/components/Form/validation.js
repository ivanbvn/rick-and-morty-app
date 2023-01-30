
export const validation = (obj) => {
  let errors = {}

  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(obj.username)) errors.username = 'Tiene que ser un E-Mail'
  if (!obj.username) errors.username = 'El usuario esta vacío'
  if (obj.username.length > 35) errors.username = 'Debe tener menos de 35 caracteres'

  if (!obj.password) errors.password = 'La contraseña esta vacia'
  if (obj.password.length < 6) errors.password = 'Minimo 6 caracteres' 
  if (obj.password.length > 10) errors.password = 'Maximo 10 caracteres'

  return errors
}