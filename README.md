# Login en AppScript con CLASP

Este repositorio contiene un proyecto de Login desarrollado en Google Apps Script, utilizando CLASP para trabajar desde Node.js. El login autentica al usuario y lo redirige a otra URL de su elección, además de enviar algunas variables como parámetros en la solicitud HTTP.

![login](https://github.com/coliveramispireta/assets-images/blob/main/login.PNG)

## Configuración del Proyecto

1. **Configuración de Google Spreadsheet:**

   Configura un Google Spreadsheet con los siguientes campos para la base de datos de usuarios:
   ![Muestra de Tabla SpreadSheet](https://github.com/coliveramispireta/assets-images/blob/main/BD_Users.PNG?raw=true)
   - Guarda el ID del Sheet
   - Nombre de la hoja

2. **Configuración del Proyecto:**

   Luego de clonar el repo ejecuta el siguiente comando parainstalar las dependencias necesarias:

   ```bash
   npm install
   ```

3. **Configuración de Variables:**

    -  Crea un archivo en la raíz llamado Config.js con el siguiente contenido:

 ```bash
function CONFIG(v) {
  const CONFIG_VALUES = {
    URL: "<vacio>",
    BD_ID: "AQUI EL ID DE TU SPREADSHEET",
    BD_NAME: "AQUI EL NOMBRE DE TU HOJA DEL SPREADSHEET",
    APP_MANAGER: "AQUI LA URL que manejara sus vistas o con la que abriras tu login"
  };

  if (CONFIG_VALUES.hasOwnProperty(v)) {
    return CONFIG_VALUES[v];
  } else {
    throw new Error("Configuración no encontrada");
  }
}
 ```

    -  Además, crea otro archivo llamado Config.html dentro de src/helpers con el siguiente contenido:

```bash
<script>
  const URL_APP_MANAGER = "AQUI LA URL DEL HOME A DONDE QUIERES QUE TE REDIRIJA SI ES Q EL LOGIN TE AUTENTICA"; 
</script>
```

4. **Instalación del Clasp:**

Instala CLASP globalmente con el siguiente comando:

```bash
npm install -g @google/clasp
```

Habilita la API de Google Apps Script en tu cuenta de Google desde Configuración de Usuario en Google Apps Script:  https://script.google.com/home/usersettings

5. **Inicia sesión en CLASP con el comando**

```bash
npx clasp login
```

6. **Crea un nuevo proyecto de Google Apps Script con el comando**

```bash
npx clasp create
```

Luego, busca el archivo en Google Apps Script desde tu cuenta de Google logueada.


## Ejecución

Una vez configurado el proyecto y creado en Google Apps Script, podrás ejecutar el login y gestionar las vistas desde tu aplicación manager.
El Jsvascript del proyecto se encargará de validar los datos del usuario registrado en la base de spreadsheet y de ser validados te redirigirá a la url de tu eleccion (tu app Home). Además contiene funciones de cambio de contraseña previa validación de las credenciales. 

Para más detalles sobre el desarrollo y la gestión del proyecto, consulta la documentación proporcionada en cada paso.

Hecho con ❤️ por [Carlos Olivera](https://github.com/coliveramispireta)

![Page](https://github.com/coliveramispireta/assets-images/blob/main/page.PNG)
