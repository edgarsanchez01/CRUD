Este proyecto consiste en una aplicación desarrollada con Next.js que permite gestionar publicaciones mediante solicitudes HTTP a una API externa. La aplicación utiliza la biblioteca Axios para realizar estas solicitudes y mostrar la información la interfaz al usuario.

Configuración del Proyecto:
Clonar el Repositorio: Para obtener el código fuente del proyecto, clona este repositorio en tu máquina local utilizando el siguiente comando:
gh repo clone edgarsanchez01/CRUD


Instalar Dependencias: Una vez clonado el repositorio, navega al directorio del proyecto y asegúrate de tener Node.js instalado. Luego, instala las dependencias del proyecto con el siguiente comando:
npm install

Ejecución del Proyecto:
Para ejecutar el proyecto, utiliza el siguiente comando en tu terminal:
npm run dev

Esto iniciará el servidor de desarrollo de Next.js y podrás acceder a la aplicación desde tu navegador en la dirección http://localhost:3000.

Uso de la Aplicación:
La página principal muestra una lista de publicaciones obtenidas de una API externa.
Puedes crear una nueva publicación ingresando un título y un cuerpo en el formulario correspondiente y haciendo clic en el botón "Crear Publicación".
Para editar una publicación existente, haz clic en el botón "Editar" junto a la publicación que deseas modificar, realiza los cambios necesarios y haz clic en "Actualizar".
Para eliminar una publicación, haz clic en el botón "Eliminar" junto a la publicación que deseas eliminar.
Integración de Axios:
Axios se utiliza para realizar solicitudes HTTP a la API externa y gestionar la comunicación con el servidor.
Se configura Axios en el proyecto y se utiliza en componentes específicos para manejar las solicitudes y respuestas.
Gestión de Errores:
La aplicación implementa la gestión de errores utilizando Axios para manejar situaciones como errores de red o respuestas de error de la API externa.
Los mensajes de error apropiados se muestran en la interfaz de usuario cuando ocurren situaciones no previstas.


Si deseas contribuir al proyecto, por favor crea un fork del repositorio, realiza tus cambios y envía un pull request.
Tecnologías Utilizadas:
Next.js
React
Axios
