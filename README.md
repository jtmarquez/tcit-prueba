# tcit-prueba

# Cómo instalar ambiente:

## API
1. Se debe instalar paquetes con `npm run install`
2. Se requiere crear base de datos postgres. Una vez creada, se deberán guardar las credenciales correspondientes en el archivo .env de acuerdo al formato señalado en .env.example
3. Se deben correr las migraciones con `npm run sequelize:migrate`
4. Se debe agregar variable de entorno `CORS_ALLOWED_ORIGINS`. Recomendable utilizar o `export CORS_ALLOWED_ORIGINS="*"` o `export CORS_ALLOWED_ORIGINS="{url_front}"`, en donde `url_front` será la url en que se encontrará corriendo el frontend.
5. Correr api con `npm run start:dev`

## Frontend
1. Se debe instalar paquetes con `npm run install`
2. Configurar variables de entorno en un archivo .env. Un ejemplo:
    ```
    export PORT="4000"
    export API_URL="http://localhost:3000"
    ```
    El `API_URL` deberá coincidir con el url en donde se ejecutará la API. El puerto debe ser el puerto en el cual se ejecutará la app frontend. Recordar que el url en donde se ejecutará esta aplicación debe coincidir con la variable de entorno en la api `CORS_ALLOWED_ORIGINS` en caso de optar por definirla distinto a `*`.
3. Correr la aplicación con `npm run serve`
