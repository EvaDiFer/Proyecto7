
Proyecto 7: Sistema de Gestión con Node.js, Express y MongoDB
Este proyecto es un servidor backend desarrollado con Node.js, Express y MongoDB Atlas utilizando Mongoose. Incluye tres modelos de datos, con relaciones entre ellos, y un sistema de roles (admin y user) para controlar permisos.

Se implementa un CRUD completo para todas las colecciones, con autenticación y autorización basada en tokens JWT. Los usuarios se crean con rol user por defecto, y el primer admin debe configurarse manualmente en la base de datos. Los admins pueden gestionar usuarios, incluyendo cambios de roles y eliminaciones, mientras que los users solo pueden eliminar su propia cuenta.

El sistema incluye un middleware para validar los tokens en las peticiones.
