# Curso de Express

Created: July 15, 2023 11:31 AM

<details>
<summary><b>Express</b></summary>

Express.js es un marco de aplicación web rápido y minimalista para Node.js. Es una capa adicional construida sobre el módulo **`http`** de Node.js que simplifica la creación de aplicaciones web y la implementación de servidores.

El propósito principal de Express.js es simplificar el desarrollo de aplicaciones web en Node.js. Al proporcionar un marco de aplicación web minimalista y flexible, Express.js ofrece una serie de beneficios y características que hacen que el proceso de desarrollo sea más rápido y eficiente.
</details>

<details>
<summary><b>Principales Características Express</b></summary>

1. **Enrutamiento sencillo**: Express.js facilita la definición de rutas y el manejo de solicitudes HTTP. Puedes crear rutas para diferentes métodos HTTP (GET, POST, PUT, DELETE) y definir cómo manejar cada una de ellas.
2. **Middleware**: Express.js utiliza middleware para realizar funciones intermedias entre las solicitudes y las respuestas. Puedes utilizar middleware para procesar datos, autenticar usuarios, registrar solicitudes, gestionar sesiones y más. Los middleware se pueden encadenar y ejecutar en un orden específico.
3. **Renderización de vistas**: Express.js admite la renderización de vistas utilizando motores de plantillas como EJS, Pug (anteriormente conocido como Jade), Handlebars, entre otros. Esto facilita la generación de páginas HTML dinámicas con datos provenientes del servidor.
4. **Manejo de solicitudes y respuestas**: Express.js proporciona métodos y propiedades para manipular solicitudes y respuestas de manera eficiente. Puedes acceder a los parámetros de ruta, datos de formulario, encabezados, cookies y más.
5. **Gestión de sesiones y cookies**: Express.js facilita el manejo de sesiones y cookies en aplicaciones web. Puedes configurar y administrar sesiones de usuario, almacenar información en cookies y establecer políticas de seguridad relacionadas con las sesiones y las cookies.
6. **Integración con bases de datos**: Express.js no impone una capa específica para la interacción con bases de datos, lo que te permite elegir la base de datos que mejor se adapte a tus necesidades. Puedes integrar Express.js con bases de datos relacionales (como MySQL, PostgreSQL) o bases de datos NoSQL (como MongoDB).
</details>

<details>
<summary><b>Conceptos Básicos Express</b></summary>

1. **CRUD**: CRUD es un acrónimo que representa las operaciones básicas realizadas en aplicaciones que interactúan con bases de datos o almacenan datos. Significa Create (Crear), Read (Leer), Update (Actualizar) y Delete (Eliminar). Estas operaciones corresponden a las acciones para crear, leer, actualizar y eliminar datos. En Express.js, puedes implementar estas operaciones utilizando los métodos HTTP correspondientes.
2. **Comparación CRUD con métodos HTTP**: Los métodos HTTP tienen una correspondencia directa con las operaciones CRUD. A continuación se muestra una comparación entre los métodos HTTP comunes y las operaciones CRUD:
    - **POST**: Se utiliza para crear nuevos datos. Equivalente a la operación "Create" en CRUD.
    - **GET**: Se utiliza para leer o recuperar datos existentes. Equivalente a la operación "Read" en CRUD.
    - **PUT/PATCH**: Se utiliza para actualizar datos existentes. Equivalente a la operación "Update" en CRUD.
    - **DELETE**: Se utiliza para eliminar datos existentes. Equivalente a la operación "Delete" en CRUD.
3. **API**: API (Application Programming Interface) es un conjunto de reglas y protocolos que permiten a las aplicaciones comunicarse entre sí. En el contexto de Express.js, una API se refiere a la interfaz que expone un conjunto de rutas y métodos HTTP para que otras aplicaciones o servicios puedan interactuar con ella y realizar operaciones en los datos.
4. **REST**: REST (Representational State Transfer) es un estilo de arquitectura de software que define un conjunto de principios y restricciones para el diseño de servicios web. En una API REST, los recursos se representan como objetos o entidades y se accede a ellos a través de URLs específicas. Las operaciones se realizan utilizando los métodos HTTP correspondientes (GET, POST, PUT, DELETE) y la API sigue los principios de REST.
5. **RESTful API**: Una API RESTful es una API que sigue los principios y restricciones de REST. Esto implica que la API utiliza métodos HTTP para realizar operaciones en los recursos, utiliza URLs descriptivas para acceder a los recursos y utiliza códigos de estado y respuestas consistentes.
</details>

<details>
<summary><b>Primeros pasos con Express</b></summary>

Para comenzar con Express.js y dar tus primeros pasos, sigue estos pasos:

1. Crea un nuevo directorio para tu proyecto y navega hasta él en tu terminal o línea de comandos.
2. Inicializa un nuevo proyecto de Node.js ejecutando el siguiente comando:
    
    ```bash
    npm init -y
    
    ```
    
    Esto creará un archivo **`package.json`** con la configuración predeterminada.
    
3. Instala Express.js ejecutando el siguiente comando:
    
    ```bash
    npm install express
    
    ```
    
    Esto instalará Express.js en tu proyecto y agregará una entrada en el archivo **`package.json`** para la dependencia de Express.js.
    
4. Crea un archivo **`app.js`** en el directorio de tu proyecto.
5. Abre el archivo **`app.js`** en tu editor de código y comienza a escribir el código de tu aplicación Express.js. Aquí tienes un ejemplo básico para empezar:
    
    ```jsx
    const express = require('express');
    const app = express();
    
    // Ruta de inicio
    app.get('/', (req, res) => {
      res.send('¡Hola, Express!');
    });
    
    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () =>{
      console.log(`El servidor está escuchando en el puerto ${PORT}...`)
    } );
    
    ```
    
    En este ejemplo, estamos importando el módulo Express, creando una aplicación de Express y definiendo una ruta de inicio (**`/`**) que responde con el mensaje "¡Hola, Express!".
    
6. Guarda el archivo **`app.js`**.
7. En tu terminal o línea de comandos, ejecuta el siguiente comando para iniciar tu aplicación:
    
    ```bash
    nodemon app.js
    
    ```
    
    Esto iniciará tu aplicación y mostrará un mensaje indicando que el servidor está escuchando en el puerto 3000.
    
8. Abre tu navegador web y visita **`http://localhost:3000`**. Deberías ver el mensaje "¡Hola, Express!".

</details>

<details>
<summary><b>Agregar rutas en Express</b></summary>

Para agregar rutas en Express.js, puedes utilizar los métodos de enrutamiento proporcionados por el objeto de aplicación (**`app`**) de Express. Estos métodos te permiten definir las rutas y manejar las solicitudes entrantes.

Aquí tienes un ejemplo de cómo agregar rutas en Express.js:

```jsx
const express = require('express');
const app = express();

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Hola, Express!');
});

// Ruta para la página "Acerca de"
app.get('/acerca', (req, res) => {
  res.send('Esta es la página Acerca de');
});

// Ruta para el perfil de usuario
app.get('/perfil/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Perfil del usuario ${userId}`);
});

// Ruta para manejar una solicitud POST
app.post('/formulario', (req, res) => {
  res.send('Datos del formulario recibidos');
});

// Ruta para manejar una solicitud DELETE
app.delete('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Eliminar usuario ${userId}`);
});

// Escucha en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});

```

En este ejemplo, se utilizan varios métodos de enrutamiento:

- **`app.get(path, callback)`**: Define una ruta para las solicitudes GET. El primer argumento (**`path`**) es la ruta de la URL y el segundo argumento (**`callback`**) es una función que se ejecuta cuando se recibe una solicitud GET para esa ruta.
- **`app.post(path, callback)`**: Define una ruta para las solicitudes POST. Funciona de manera similar a **`app.get()`**, pero para solicitudes POST.
- **`app.delete(path, callback)`**: Define una ruta para las solicitudes DELETE. Funciona de manera similar a **`app.get()`**, pero para solicitudes DELETE.
- Parámetros de ruta: Puedes utilizar **`:`** seguido del nombre del parámetro en la definición de ruta para crear rutas dinámicas. Los valores de estos parámetros se pueden acceder en la función de controlador a través de **`req.params`**.

Es importante destacar que el orden de las definiciones de ruta es significativo. Express.js coincidirá con la primera ruta que coincida con la solicitud entrante. Por lo tanto, es recomendable definir las rutas más específicas antes de las rutas más generales.

Con estos métodos de enrutamiento, puedes definir rutas para diferentes URL y métodos HTTP, y luego proporcionar la lógica de manejo de la solicitud en las funciones de controlador correspondientes.
</details>

<details>
<summary><b>Parámetros de Ruta</b></summary>

En Express.js, puedes utilizar parámetros de ruta para crear rutas dinámicas que capturan valores específicos en la URL. Los parámetros de ruta se definen utilizando **`:`** seguido del nombre del parámetro en la definición de la ruta.

Aquí tienes un ejemplo de cómo utilizar parámetros de ruta en Express.js:

```jsx
const express = require('express');
const app = express();

// Ruta con parámetro de ruta
app.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Perfil del usuario ${userId}`);
});

// Ruta con múltiples parámetros de ruta
app.get('/productos/:categoria/:id', (req, res) => {
  const categoria = req.params.categoria;
  const productId = req.params.id;
  res.send(`Producto de la categoría ${categoria} con ID ${productId}`);
});

// Escucha en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});

```

En el primer ejemplo, se define una ruta **`/usuarios/:id`**. Cuando se accede a una URL como **`/usuarios/123`**, el valor **`123`** se captura como el parámetro **`id`** y se puede acceder a él en la función de controlador utilizando **`req.params.id`**.

En el segundo ejemplo, se define una ruta **`/productos/:categoria/:id`**. Cuando se accede a una URL como **`/productos/electronica/456`**, los valores **`electronica`** y **`456`** se capturan como los parámetros **`categoria`** e **`id`**, respectivamente. Se pueden acceder a estos valores en la función de controlador utilizando **`req.params.categoria`** y **`req.params.id`**.

Puedes utilizar tantos parámetros de ruta como desees en una ruta y acceder a ellos en el controlador de la misma manera.

Los parámetros de ruta son una forma útil de capturar valores variables en la URL y utilizarlos en la lógica de manejo de la solicitud. Son especialmente útiles cuando tienes rutas que siguen un patrón común, pero con valores diferentes.
</details>

<details>
<summary><b>Parámetros Query</b></summary>

En Express.js, los parámetros de consulta (query parameters) son una forma de enviar datos en la URL como parte de una solicitud GET. Estos parámetros se agregan a la URL después del signo de interrogación (**`?`**) y se componen de pares clave-valor separados por el símbolo ampersand (**`&`**).

Aquí tienes un ejemplo de cómo utilizar parámetros de consulta en Express.js:

```jsx
const express = require('express');
const app = express();

// Ruta con parámetros de consulta
app.get('/buscar', (req, res) => {
  const query = req.query;
  res.send(`Búsqueda: ${query.q}, Página: ${query.page}`);
});

// Escucha en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});

```

En este ejemplo, se define una ruta **`/buscar`** que espera parámetros de consulta. Cuando se accede a una URL como **`/buscar?q=Express&page=1`**, los parámetros de consulta **`q`** y **`page`** se capturan en el objeto **`req.query`**. Puedes acceder a estos valores y utilizarlos en la lógica de manejo de la solicitud.

En el código anterior, se utiliza **`req.query.q`** para acceder al valor del parámetro **`q`** y **`req.query.page`** para acceder al valor del parámetro **`page`**. Puedes realizar cualquier lógica adicional basada en estos valores.

Los parámetros de consulta son útiles cuando deseas proporcionar opciones adicionales o filtros en una solicitud GET. Pueden ser utilizados para paginación, filtrado, ordenamiento y más. En Express.js, puedes acceder a los parámetros de consulta a través del objeto **`req.query`** en las rutas correspondientes.
</details>

<details>
<summary><b>Routes en Express</b></summary>

En Express.js, las rutas son utilizadas para definir cómo se manejarán las solicitudes HTTP en tu aplicación. Las rutas determinan la URL a la que se accede y la función de controlador que se ejecutará cuando se haga una solicitud a esa URL.

Para crear rutas en Express.js, puedes utilizar el objeto **`Router`** proporcionado por el framework. Aquí tienes un ejemplo de cómo definir rutas utilizando Express.js:

1. Crea un archivo **`routes.js`** en tu proyecto:
    
    ```jsx
    const express = require('express');
    const router = express.Router();
    
    // Ruta de inicio
    router.get('/', (req, res) => {
      res.send('¡Hola, Express!');
    });
    
    // Ruta para la página "Acerca de"
    router.get('/about', (req, res) => {
      res.send('Esta es la página Acerca de');
    });
    
    module.exports = router;
    
    ```
    
2. Luego, en tu archivo principal (por ejemplo, **`app.js`**), importa el archivo de rutas y úsalo como middleware:
    
    ```jsx
    const express = require('express');
    const routes = require('./routes');
    
    const app = express();
    
    // Usar las rutas definidas en routes.js
    app.use('/', routes);
    
    // Resto del código de configuración de la aplicación...
    
    // Escucha en el puerto 3000
    app.listen(3000, () => {
      console.log('El servidor está escuchando en el puerto 3000');
    });
    
    ```
    

En este ejemplo, se crea un archivo **`routes.js`** donde se definen las rutas utilizando el objeto **`Router`** de Express. Luego, en el archivo principal, se importa el archivo de rutas y se utiliza como middleware en la aplicación principal usando **`app.use('/', routes)`**.

En **`routes.js`**, se definen dos rutas: una ruta para la URL raíz (**`/`**) y una ruta para la URL **`/about`**. Cada ruta tiene un método HTTP específico (**`get`** en este caso) y una función de controlador que se ejecutará cuando se haga una solicitud a esa ruta.

Utilizando este enfoque, puedes organizar tus rutas en archivos separados y luego utilizarlos en tu aplicación principal. Esto ayuda a mantener un código limpio y modular, especialmente cuando tienes muchas rutas en tu aplicación.
</details>

<details>
<summary><b>POST-PUT-PATCH-DELETE</b></summary>

Aquí tienes ejemplos básicos de cómo utilizar los métodos **`POST`**, **`PUT`**, **`PATCH`** y **`DELETE`** en Express.js:

1. **POST**:
    
    ```jsx
    // Ejemplo de manejo de una solicitud POST en Express.js
    app.post('/usuarios', (req, res) => {
      // Recibir datos enviados en el cuerpo de la solicitud
      const nuevoUsuario = req.body;
    
      // Lógica para crear un nuevo usuario en la base de datos
      // ...
    
      // Enviar respuesta al cliente
      res.status(201).json({ mensaje: 'Usuario creado exitosamente' });
    });
    
    ```
    
2. **PUT**:
    
    ```jsx
    // Ejemplo de manejo de una solicitud PUT en Express.js
    app.put('/usuarios/:id', (req, res) => {
      const idUsuario = req.params.id;
      const datosActualizados = req.body;
    
      // Lógica para actualizar los datos del usuario con el ID especificado
      // ...
    
      res.json({ mensaje: 'Usuario actualizado exitosamente' });
    });
    
    ```
    
3. **PATCH**:
    
    ```jsx
    // Ejemplo de manejo de una solicitud PATCH en Express.js
    app.patch('/usuarios/:id', (req, res) => {
      const idUsuario = req.params.id;
      const datosParciales = req.body;
    
      // Lógica para aplicar actualizaciones parciales a los datos del usuario con el ID especificado
      // ...
    
      res.json({ mensaje: 'Actualización parcial exitosa' });
    });
    
    ```
    
4. **DELETE**:
    
    ```jsx
    // Ejemplo de manejo de una solicitud DELETE en Express.js
    app.delete('/usuarios/:id', (req, res) => {
      const idUsuario = req.params.id;
    
      // Lógica para eliminar el usuario con el ID especificado
      // ...
    
      res.json({ mensaje: 'Usuario eliminado exitosamente' });
    });
    
    ```
    

Estos son ejemplos básicos para manejar las solicitudes **`POST`**, **`PUT`**, **`PATCH`** y **`DELETE`** en Express.js. Ten en cuenta que en cada ejemplo se asume que se está utilizando el middleware **`body-parser`** o alguna otra solución para analizar el cuerpo de la solicitud (**`req.body`**). Además, estos ejemplos son simplificados y no incluyen la lógica real para crear, actualizar o eliminar datos en una base de datos.
</details>

<details>
<summary><b>TDD stands for Test-Driven Development</b></summary>
Test-Driven Development (TDD) is a software development approach where tests are written before the actual code implementation. The TDD cycle typically follows these steps:

1. **Write a Test**: First, you write a test that defines the expected behavior of a specific piece of code. This test will initially fail because the code has not been implemented yet.

2. **Write the Code**: Next, you write the minimal code necessary to make the test pass. The focus is on making the test pass, not on writing the full implementation.

3. **Run the Test**: Run all the tests, including the newly written one, to ensure that it passes without breaking existing functionality.

4. **Refactor**: If necessary, refactor the code to improve its design and maintainability while keeping all the tests passing.

5. **Repeat**: Repeat the process by writing another test for a new piece of functionality or refining an existing test. Continue this cycle iteratively until all the desired features are implemented.

## Best Practices of TDD

1. **Start with Small Tests**: Begin with simple and isolated test cases that focus on specific functionality.
2. **Run Tests Frequently**: Run the test suite regularly to ensure that all tests are passing at each step.
3. **Red-Green-Refactor**: Follow the red-green-refactor pattern to incrementally build and improve the codebase.
4. **Keep Tests Independent**: Tests should not rely on the state or results of other tests to ensure independence.
5. **Test Edge Cases**: Include test cases that cover boundary conditions and corner cases to ensure robustness.
6. **Test Failure Scenarios**: Test how the code behaves in error or failure scenarios.
7. **Maintain Good Test Coverage**: Aim for high test coverage to minimize the chance of regressions.

</details>
