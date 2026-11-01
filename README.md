# README.md

## Instalación

1. Clonar repositorio.
2. Abrir en terminal y ejecutar `npm install`. Esto instalara las dependencias necesarias.
3. Abrir en terminal y ejecutar `npx cypress run`.
   - Se desploegaran los resultados en la misma terminal.
   - Se generara un reporte en el archivo `reports/mochawesome.html`.
   - Las capturas de pantalla se guardan en `screenshots/` bajo el nombre del test que fallo.
4. Opcionalmente, puede utilizar `npx cypress open` y ejecutar las pruebas E2E en un navegador de su elección (siempre y cuando este instalado en el equipo), observar el paso a paso y una instantánea de la ejecución en cada momento.

## Scripts de Prueba

Se consideraron los siguientes scripts para las siguientes funcionalidades:
1. Inicio de Sesión.
2. Inventario.
3. Carrito de compras.

Adicionalmnente, se genero un cuarto test que cubre el endpoint asociado a MercadoLibre.

## Escenarios de pruebas

URL: https://www.saucedemo.com/

| ID | Caso de prueba | Valores de entrada | Pasos | Resultado esperado |
|---|---|---|---|---|
| TC-01 | Inicio de sesión exitoso | Usuario: `standard_user`<br>Contraseña: `secret_sauce` | 1. Ingresar a SauceDemo.<br>2. Escribir el usuario.<br>3. Escribir la contraseña.<br>4. Presionar **Login**. | El inicio de sesión es exitoso y se redirige a `/inventory.html`. |
| TC-02 | Usuario y contraseña vacíos | Usuario: vacío<br>Contraseña: vacío | 1. Ingresar a SauceDemo.<br>2. Dejar ambos campos vacíos.<br>3. Presionar **Login**. | Se muestra `Epic sadface: Username is required`. |
| TC-03 | Contraseña vacía | Usuario: `standard_user`<br>Contraseña: vacío | 1. Ingresar a SauceDemo.<br>2. Escribir `standard_user`.<br>3. Dejar vacía la contraseña.<br>4. Presionar **Login**. | Se muestra `Epic sadface: Password is required`. |
| TC-04 | Credenciales inválidas | Usuario: `standard_user`<br>Contraseña: `not_secret_sauce` | 1. Ingresar a SauceDemo.<br>2. Escribir el usuario.<br>3. Escribir la contraseña inválida.<br>4. Presionar **Login**. | Se muestra `Epic sadface: Username and password do not match any user in this service`. |
| TC-05 | Usuario bloqueado | Usuario: `locked_out_user`<br>Contraseña: `secret_sauce` | 1. Ingresar a SauceDemo.<br>2. Escribir el usuario bloqueado.<br>3. Escribir la contraseña.<br>4. Presionar **Login**. | Se muestra `Epic sadface: Sorry, this user has been locked out.`. |
| TC-06 | Visualización de productos | Usuario: `standard_user`<br>Contraseña: `secret_sauce`<br>Productos esperados: `6` | 1. Ingresar a SauceDemo.<br>2. Iniciar sesión.<br>3. Verificar `/inventory.html`.<br>4. Contar los productos visibles. | Se muestran exactamente 6 productos. |
| TC-07 | Agregar un producto al carrito | Usuario: `standard_user`<br>Contraseña: `secret_sauce`<br>Producto: `Sauce Labs Backpack` | 1. Ingresar a SauceDemo.<br>2. Iniciar sesión.<br>3. Verificar `/inventory.html`.<br>4. Presionar **Add to cart** para el producto.<br>5. Consultar el indicador del carrito. | El indicador del carrito muestra `1`. |
| TC-08 | Eliminar un producto del carrito | Usuario: `standard_user`<br>Contraseña: `secret_sauce`<br>Producto: `Sauce Labs Backpack` | 1. Ingresar a SauceDemo.<br>2. Iniciar sesión.<br>3. Verificar `/inventory.html`.<br>4. Agregar el producto.<br>5. Presionar **Remove**.<br>6. Consultar el indicador del carrito. | El producto se elimina y el indicador del carrito deja de mostrarse. |
| TC-09 | Agregar múltiples productos al carrito | Usuario: `standard_user`<br>Contraseña: `secret_sauce`<br>Productos: `Sauce Labs Backpack`, `Sauce Labs Bike Light` | 1. Ingresar a SauceDemo.<br>2. Iniciar sesión.<br>3. Verificar `/inventory.html`.<br>4. Agregar `Sauce Labs Backpack`.<br>5. Agregar `Sauce Labs Bike Light`.<br>6. Consultar el indicador. | El indicador del carrito muestra `2`. |
| TC-10 | Abrir el carrito de compras | Usuario: `standard_user`<br>Contraseña: `secret_sauce` | 1. Ingresar a SauceDemo.<br>2. Iniciar sesión.<br>3. Verificar `/inventory.html`.<br>4. Presionar el ícono del carrito. | El usuario es redirigido a `/cart.html`. |
