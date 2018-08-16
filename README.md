#  F O O D M A P

Crea una web-app que a través de un input pueda filtrar los restaurantes
que se encuentran cerca de ti *(Tú decides la estructura que tendrán tus datos,
puedes crear una lista de restaurantes en un arreglo, en un objeto, consumir una API, etc. Lo importante es que el contenido debe ser dinámico y no estático y el diseño es totalmente libre)*.

#### Flujo de la aplicación.

Vista splash con duración de 2 segundos que redirecciona a tu vista
principal.
![Splash](https://github.com/PatriciaVidal/lim-2018-01-foodmap/blob/develop/image/vistasplash.jpg?raw=true)

En la vista principal se muestran todos los restaurantes junto
con el input para filtrar por tipo de comida.
- Comida vegetariana
- Restaurante
- Parrilla
- Cafetería

Ya que se hizo la elección del filtro deben mostrarse únicamente aquellos
restaurantes que cumplan con la condición.

Al seleccionar alguno de los restaurantes, deberá mostrarse la información de
este a través de un modal.
![modal imagen](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/5.jpg?raw=true)

Una vez cerrado el modal debe volver a la vista principal.
![ultima vista](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/6.jpg?raw=true)