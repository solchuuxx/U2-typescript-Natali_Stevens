// los enum son un tipo de dato que nos permite definir un conjunto de constantes con nombre 
enum Roles {
    ADMIN = 'ADMIN',
    SUPERADMIN = 'SUPERADMIN',
    USER = 'USER'
}

interface Persona {
    name: string;
    role: Roles;
}

const persona: Persona = {
    name: 'John Doe',
    role: Roles.ADMIN
}

console.log(persona.role); 