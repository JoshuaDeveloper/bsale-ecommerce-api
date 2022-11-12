# Bsale-Ecommerce-Api

La API permitirá al usuario extraer información con los productos que sea de su interes, por lo que se cuenta con 3 end-points.
Se utiliza una base de datos Mysql la cual cuenta dos dos tablas Categoría y Productos, para el desarrollo de esta aplicación solo se utilizá la tabla categoría.

## Tecnologías

- Nodejs
- MySQL
- Express

## Instalación

`npm install`

`npm run dev`

> Agregar el archivo .env

## End Points

###### 1. GET Lista de Productos

> Retornará todos los productos.
> **/api/products**

###### 2. GET Lista de Productos por Categoría

> Recibe el id de la categoría deseada
> Retornará todos los productos agrupados por categoría.
> **/api/products/category/:id**

###### 3. GET Lista de Productos por Query

> Recive la query que se desea buscar, ejemplo("coca")
> Retornará todos los productos de acuerdo a la busqueda ingresada.
> **/api/products/search/:query**

###### 4. Productos - Tabla MySQL

| id        | identificador único                   |
| --------- | ------------------------------------- |
| name      | nombre del producto                   |
| url_image | url de la imagen asociada al producto |
| price     | precio de venta del producto          |
| discount  | porcentaje de descuento               |
| category  | identificador de categoría            |

###### 5. Adicional (GET Buscar productos por id)

> Recive el id del producto.
> Retornará todos el producto con el id adecuado.
