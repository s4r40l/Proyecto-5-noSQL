# Proyecto 5 – NoSQL

API REST creada en Node.js utilizando Express y MongoDB (Mongoose).  
El proyecto incluye un CRUD completo para gestionar películas y una carpeta `/media` con las capturas de las pruebas realizadas en Insomnia y en el navegador.

---

## Instalación y ejecución

### 1. Instalar dependencias
```
npm install (por ejemplo express)
```

### 2️. Ejecutar el seed
Inserta las películas iniciales en la base de datos:

```
node seeds/movies.seed.js
```

### 3️. Arrancar el servidor
```
node index.js
```

---

## 🎬 Modelo Movie

El modelo incluye los siguientes campos:

- **title** (String, required)  
- **director** (String, required)  
- **year** (Number, required)  
- **genre** (String, required)

---

## Endpoints de la API

### GET /movies  
Devuelve todas las películas.

### POST /movies  
Crea una nueva película.  
Body JSON:

```json
{
  "title": "Interstellar",
  "director": "Christopher Nolan",
  "genre": "Sci-Fi",
  "year": 2014
}
```

### PUT /movies/:id  
Actualiza una película existente.  
Body JSON:

```json
{
  "title": "Interstellar (Updated)"
}
```

### DELETE /movies/:id  
Elimina una película por ID.

---

## Estado del proyecto

CRUD completo funcionando  
Conexión estable con MongoDB  
Seed ejecutado correctamente  
Pruebas realizadas en Insomnia  
Documentación lista para entrega
