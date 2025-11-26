# VIAM – Plataforma para la Fomentación de Vocaciones STEAM  
## Documentación completa del proyecto – README Oficial

## 1. Descripción general
VIAM es una plataforma web diseñada para motivar y vincular a niñas y jóvenes con carreras STEAM mediante contenidos interactivos, mentorías, cursos y recursos educativos con enfoque de equidad de género. La aplicación está desarrollada como una PWA responsiva, orientada principalmente a uso en laptops/PC.

## 2. Arquitectura general
VIAM está compuesto por varios módulos tecnológicos:

### Aplicación Web (Frontend)
- Framework: Angular
- Diseño: Angular Material y Tailwind (si se desea)
- Características:
  - Autenticación y roles (jóvenes, docentes, admins)
  - Visualización de cursos, lecciones y progreso
  - Recomendación de cursos basada en IA
  - Integración con API REST de Spring Boot
  - App web responsiva

### API Backend (Spring Boot)
- Endpoints principales:
  - /api/usuarios
  - /api/cursos
  - /api/progreso
  - /api/mentorias
- Funciones:
  - CRUD de usuarios, cursos y progreso
  - Manejo de autenticación
  - Preparación de datos para modelos de IA

### Inteligencia Artificial
Modelos entrenados con datos reales:
- Random Forest Classifier
- SVM
- MLPClassifier (Red neuronal)
Incluye:
- Limpieza de datos
- Ingeniería de características
- Entrenamiento, evaluación y exportación
- Orquestador en Python para manejo de los modelos

### Bases de Datos
- PostgreSQL: usuarios, cursos, progreso, mentorías

### Despliegue
- Vercel: para frontend Angular
- Render o Railway: para API Spring Boot

---

## 3. Instalación y Ejecución del Proyecto

### 3.1 Clonar el repositorio
```
git clone https://github.com/usuario/viam.git
cd viam
```

---

## 4. Frontend – Angular

### 4.1 Requisitos
- Node.js 18+
- Angular CLI 17+

### 4.2 Instalación
```
cd frontend-viam
npm install
```

### 4.3 Configuración de variables
Crear archivo:
```
src/environments/environment.ts
```
Con contenido similar a:
```
export const environment = {
  production: false,
  apiUrl: "https://tu-api-render.com/api",
  firebaseConfig: {}
};
```

### 4.4 Ejecutar en desarrollo
```
ng serve -o
```

### 4.5 Construir para producción
```
ng build --configuration production
```

---

## 5. Backend – Spring Boot

### 5.1 Requisitos
- Java 17+
- Maven / Gradle
- PostgreSQL

### 5.2 Configurar application.properties
```
spring.datasource.url=jdbc:postgresql://localhost:5432/viam
spring.datasource.username=postgres
spring.datasource.password=tu_password

spring.data.mongodb.uri=mongodb://localhost:27017/viam
```

### 5.3 Ejecutar API
```
mvn spring-boot:run
```

---

## 6. Inteligencia Artificial – Modelos

### 6.1 Carpeta AI
```
/ai
  datasets/
  models_export/
  training/
    random_forest.py
    svm.py
    mlp.py
  orchestrator.py
```

### 6.2 Entrenar modelos
```
python random_forest.py
python svm.py
python mlp.py
```

### 6.3 Orquestador
```
python orchestrator.py
```

---

## 7. Despliegue
```

### 7.2 Angular en Netlify
1. Crear un nuevo sitio en Netlify.
2. Build:
```
npm install && ng build --configuration production
```
3. Publicar carpeta:
```
dist/viam-web/
```
4. En Netlify, configura el directorio de publicación como `dist/viam-web/`.
5. (Opcional) Si usas rutas Angular, agrega un archivo `_redirects` en `dist/viam-web/` con:
```
/*    /index.html   200
```

---

## 8. Funcionalidades Finales

### Para Jóvenes
- Cursos interactivos STEAM
- Seguimiento de progreso
- Recomendaciones automáticas

### Para Docentes
- Gestión de grupos
- Recursos para actividades

### Para Administradores
- Gestión de usuarios
- Panel de contenido
- Métricas globales

---

## 9. Estado del Proyecto – TRL 4
Prototipo validado en entorno de laboratorio, listo para pruebas controladas y mejora iterativa.

---

## 10. Licencia
Proyecto académico de uso educativo.

---

## 11. Autores
- Romero Aguilar Luis Salvador 
- Torres Bernabé Moisés 
- Xocua Márquez César Héctor 
- Zamora Vega Luis Ángel 
- Equipo académico
