# Csv manager web

## Este proyecto es la parte grafica de `csv-manager-api`.

## Configuración inicial

### Primero se debe poner la ruta de la API en el siguiente ruta de archivo:

`{proyecto} > src > app > global > constans.ts` 

Ahí se debe agregar lo siguiente: 

```
export const CONSTANTS = {
  URL_BASE_API: "http://localhost:7000",
  STORAGE_TOKEN: 'token_user_logged'
}
```



Para ejecutar el proyecto se debe validar tener Angular CLI en la maquina. Una vez seguro de tener angular CLI en la maquina, se procede a ejecutar los siguientes comandos:

`npm install` (Instalará todos lo paquetes necesarios)

`npm start` o `ng serve` (Ejecutará el proyecto y le mostrará en el puedo donde se va a ejecutar)
