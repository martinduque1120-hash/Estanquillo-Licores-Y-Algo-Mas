// INVENTARIO DEL ESTANQUILLO
// Para modificar datos, edita la lista inventario.
// Las imágenes van en img/productos/ y se nombran con el ID del producto.
// Ejemplo: img/productos/caja-amarillo-1000.jpg

const inventario = [
    {
        "id": "caja-amarillo-1000",
        "nombre": "Caja Aguardiente Amarillo 1000 ml",
        "precio": 62000,
        "categoria": "licores",
        "destacado": true,
        "imagen": "https://mercaldas.vtexassets.com/arquivos/ids/1300916/Aguardiente-AMARILLO-de-manzanares-x1000-ml_124638-1.jpg?v=638068016259670000"
    },
    {
        "id": "caja-cristal-tradicional-1000",
        "nombre": "Caja Aguardiente Cristal Tradicional 1000 ml",
        "precio": 55000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh7OO7e3KkWRiqJBlCNDab1x9Ti30EWjcLJjCVkcWvA&s=10"
    },
    {
        "id": "caja-cristal-sin-azucar-1000",
        "nombre": "Caja Aguardiente Cristal Sin Azúcar 1000 ml",
        "precio": 59000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://mercaldas.vtexassets.com/arquivos/ids/203915-800-auto?v=637493352491230000&width=800&height=auto&aspect=true"
    },
    {
        "id": "caja-ron-viejo-caldas-tradicional-1000",
        "nombre": "Caja Ron Viejo de Caldas Tradicional 1000 ml",
        "precio": 70000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://tiendacommerkvalle.com.co/wp-content/uploads/2025/03/tetrapack-ron-viejo-caldas-tradicional-1000-ml-460x460.png"
    },
    {
        "id": "caja-antioqueno-verde-1000",
        "nombre": "Caja Aguardiente Antioqueño Verde 1000 ml",
        "precio": 59000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://exitocol.vtexassets.com/arquivos/ids/36690164/Aguardiente-Verde-24-1374572_a.jpg?v=639288106078870000"
    },
    {
        "id": "botella-amarillo-750",
        "nombre": "Botella Aguardiente Amarillo 750 ml",
        "precio": 54000,
        "categoria": "licores",
        "destacado": true,
        "imagen": "https://mercacentro.vtexassets.com/arquivos/ids/177502-800-auto?v=638950216446230000&width=800&height=auto&aspect=true"
    },
    {
        "id": "botella-cristal-tradicional-750",
        "nombre": "Botella Aguardiente Cristal Tradicional 750 ml",
        "precio": 45000,
        "categoria": "licores",
        "destacado": true,
        "imagen": "https://cardilicores.com/wp-content/uploads/2025/02/Cardilicores_0000s_0070_cristal-tradicional-750.jpg"
    },
    {
        "id": "botella-cristal-sin-azucar-750",
        "nombre": "Botella Aguardiente Cristal Sin Azúcar 750 ml",
        "precio": 47000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://distribuidoraelmono.com/wp-content/uploads/2025/08/Cardilicores_0000s_0072_Cristal-tapa-negra-375.jpg"
    },
    {
        "id": "botella-ron-viejo-caldas-tradicional-750",
        "nombre": "Botella Ron Viejo de Caldas Tradicional 750 ml",
        "precio": 63000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgktvcfX2CqprMMMzDNxg-4g-d0rjOoHyLx6n1EZO1gQ&s=10"
    },
    {
        "id": "botella-ron-viejo-caldas-5-anos-750",
        "nombre": "Botella Ron Viejo de Caldas 5 años 750 ml",
        "precio": 71000,
        "categoria": "licores",
        "destacado": true,
        "imagen": "https://licoresjunior.com/wp-content/uploads/2023/12/RON-VIEJO-DE-CALDAS-5-ANOS-750-ML-Web-1024x1024-1.jpg"
    },
    {
        "id": "jose-cuervo-reposado-750",
        "nombre": "Botella José Cuervo Tequila Especial Reposado 750 ml",
        "precio": 100000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ9qZaKqt0eAkpokJzPW1AkXrjluvdDwuGl9AZWXC6JQ&s=10"
    },
    {
        "id": "1800-silver-750",
        "nombre": "Botella 1800 Tequila Reserva Silver 750 ml",
        "precio": 230000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://media.falabella.com/falabellaCO/136661438_01/w=1500,h=1500,fit=cover"
    },
    {
        "id": "media-amarillo-375",
        "nombre": "Media botella Aguardiente Amarillo 375 ml",
        "precio": 29000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgWAsPO20lWOwcsp1dD3mdX4NNtRSXlUVVX21g-wMNg&s=10"
    },
    {
        "id": "media-cristal-tradicional-375",
        "nombre": "Media botella Aguardiente Cristal Tradicional 375 ml",
        "precio": 25000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5KzpIn0uSAn_2VMw7W70hSfPgK9UASUH1-d3GwrkwQ&s=10"
    },
    {
        "id": "media-cristal-sin-azucar-375",
        "nombre": "Media botella Aguardiente Cristal Sin Azúcar 375 ml",
        "precio": 26000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOkid6UT91QsJGbZnbJSeYTJFBtTyjyvFP2ackAFirejyZJI8IFWrja0&s=10"
    },
    {
        "id": "media-ron-viejo-caldas-tradicional-375",
        "nombre": "Media botella Ron Viejo de Caldas Tradicional 375 ml",
        "precio": 34000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xRdrBnhqh4HxlFC3iMvX_PXxTkb74Qshy9g4yFA4Aw&s=10"
    },
    {
        "id": "media-ron-viejo-caldas-5-anos-375",
        "nombre": "Media botella Ron Viejo de Caldas 5 años 375 ml",
        "precio": 39000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3yeTP-GdeNoK8SUXUZY0h5VzN2s0C3JM7xITHU-x2g&s=10"
    },
    {
        "id": "media-jose-cuervo-375",
        "nombre": "Media botella José Cuervo Tequila Especial Reposado 375 ml",
        "precio": 58000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://static.wixstatic.com/media/477dc5_db36770605614881b1d6286ccd024dcc~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
    },
    {
        "id": "media-antioqueno-azul-375",
        "nombre": "Media botella Aguardiente Antioqueño Azul 375 ml",
        "precio": 29000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://exitocol.vtexassets.com/arquivos/ids/36690154/Aguardiente-Antioqueno-Sin-Azucar-X-375ml-370238_a.jpg?v=639288105876900000"
    },
    {
        "id": "media-antioqueno-verde-375",
        "nombre": "Media botella Aguardiente Antioqueño Verde 375 ml",
        "precio": 24000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://exitocol.vtexassets.com/arquivos/ids/36690175/AGUARDIENTE-SAZUCAR-VERDE-120880_a.jpg?v=639288106315270000"
    },
    {
        "id": "gordons-gin-700",
        "nombre": "Gordon’s London Dry Gin 700 ml",
        "precio": 80000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ywXoHpP8zioc6j-BHblxByn0sscz49mVlHzz-j0hcg&s=10"
    },
    {
        "id": "centenario-reposado-700",
        "nombre": "Tequila Centenario Reposado 700 ml",
        "precio": 105000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0f1NVHuQtQ7v_B8pZQB1ceYkK8BbfEVt42noe92XgEQ&s=10"
    },
    {
        "id": "gato-negro-cabernet-375",
        "nombre": "Gato Negro Cabernet Sauvignon 375 ml",
        "precio": 28000,
        "categoria": "licores",
        "destacado": false,
        "imagen": "https://drinkcentral.co/wp-content/uploads/2023/03/1VINO-GATO-NEGRO-MEDIA-375ml.webp"
    },
    {
        "id": "hydralite-uva-640",
        "nombre": "Hydralite Uva 640 ml",
        "precio": 4500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://megatiendas.vtexassets.com/arquivos/ids/176865/7702354959333.jpg?v=638929688217030000"
    },
    {
        "id": "hydralite-mora-azul-640",
        "nombre": "Hydralite Mora Azul 640 ml",
        "precio": 4500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dvr7xhZ2lDpnBWLUNoyrBJsiKgB9vou_YhAnchjrKg&s=10"
    },
    {
        "id": "hydralite-maracuya-640",
        "nombre": "Hydralite Maracuyá 640 ml",
        "precio": 4500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8eCIqafYgKUR4Kz9FI9ti_YDqZBjpVx4CkMo7cay8w&s=10"
    },
    {
        "id": "hydralite-fresa-kiwi-640",
        "nombre": "Hydralite Fresa Kiwi 640 ml",
        "precio": 4500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmiH8cpxXYcXxeeWxLFeDci65dcoe1iXj-_ZkQoP5V1A&s=10"
    },
    {
        "id": "electrolit-uva-625",
        "nombre": "Electrolit Uva 625 ml",
        "precio": 9000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecjV4hdzgl6DvxLsXNP5oyrVSLkJ_quCxqUcdjVmRH_QgRfxV1JBDPGG9&s=10"
    },
    {
        "id": "electrolit-fresa-kiwi-625",
        "nombre": "Electrolit Fresa Kiwi 625 ml",
        "precio": 9000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xy7cz3VO3UDPwXEI2fppQEFAoJ4wtsZvPu5LLcXGhA&s=10"
    },
    {
        "id": "electrolit-naranja-mandarina-625",
        "nombre": "Electrolit Naranja Mandarina 625 ml",
        "precio": 9000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRDu4mPZQkV14wuoJD9Kw2lUpbiYajhu6XtPGORmDDg&s=10"
    },
    {
        "id": "electrolit-maracuya-625",
        "nombre": "Electrolit Maracuyá 625 ml",
        "precio": 9000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsgCyANzt29q_kV5y8MiPZLLzZOwhHcKnY8qoC5Warg&s=10"
    },
    {
        "id": "electrolit-mora-azul-625",
        "nombre": "Electrolit Mora Azul 625 ml",
        "precio": 9000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7JV5kVpkpXtPnmHsC8_vkGyjtwNxWzsqrToclSY2Tg&s=10"
    },
    {
        "id": "coca-cola-1500",
        "nombre": "Coca-Cola 1.5 L",
        "precio": 6500,
        "categoria": "bebidas",
        "destacado": true,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeXzHRVmsN9M3l_eTIZvZBAcLb8-FCKYaUo4htA4bzVQ&s=10"
    },
    {
        "id": "coca-cola-2500",
        "nombre": "Coca-Cola 2.5 L",
        "precio": 8500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRab3isdIAGCQf1oynt6Ky6lX7IqktIwzdrBduMRl4AQ&s=10"
    },
    {
        "id": "cuatro-1500",
        "nombre": "Cuatro 1.5 L",
        "precio": 5000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzof3jINKSUhFZmWSQGIAC6Rz-9yz6vLEXc6JJbA2uA&s=10"
    },
    {
        "id": "premio-1500",
        "nombre": "Premio 1.5 L",
        "precio": 5000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0uA9hgPdvP_2hxY2Hbn4hn8CAdUoZ1qsLWi-O18Sz_g&s=10"
    },
    {
        "id": "del-valle-citricos-1500",
        "nombre": "Jugo Del Valle Frutas Cítricas 1.5 L",
        "precio": 4800,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCywf7aJsvg63RN1CM33DPYnDdfVwM4EwV3Np-PBaRbw&s=10"
    },
    {
        "id": "sprite-1500",
        "nombre": "Sprite 1.5 L",
        "precio": 5000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2DadX4JbVJ1I2HkTJGKhSsEiamqi3_wKggNpa8xXBw&s=10"
    },
    {
        "id": "cuatro-400",
        "nombre": "Cuatro 400 ml",
        "precio": 2800,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-TK-f8EyhY54zK_PhfZ0gUOzx0h6XRVAPZblSmAc0XA&s=10"
    },
    {
        "id": "coca-cola-400",
        "nombre": "Coca-Cola 400 ml",
        "precio": 3000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://resources.coca-colaentuhogar.com/media/catalog/product/c/c/cco-400ml-1000x1000_1__1.png?quality=80&fit=bounds&format=webp&height=180&width=180"
    },
    {
        "id": "postobon-2500-pepsi",
        "nombre": "Gaseosa Postobón Pepsi 2.5 L",
        "precio": 6000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKhT6O1YY-Q8mN8vhmEMiBq_wut589i0xn7oSRPkvQg&s=10"
    },
    {
        "id": "postobon-2500-uva",
        "nombre": "Gaseosa Postobón Uva 2.5 L",
        "precio": 6000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEIRm8oIR3SQd2veWFoEvrjsx4RwOIYMpB73a69bbSuw&s=10"
    },
    {
        "id": "postobon-2500-manzana",
        "nombre": "Gaseosa Postobón Manzana 2.5 L",
        "precio": 6000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://licoresmedellin.com/cdn/shop/files/gaseosa-manzana-postobon-grande-25lgaseosa-manzana-postobon-grande-25lpostobonlicores-medellin-7398149.jpg?v=1759122857&width=460"
    },
    {
        "id": "postobon-2500-naranja",
        "nombre": "Gaseosa Postobón Naranja 2.5 L",
        "precio": 6000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cTGbVtRGanEHZ2j513pV-F3c0RZbLYQHDQPHsU_GUg&s"
    },
    {
        "id": "postobon-2500-colombiana",
        "nombre": "Gaseosa Postobón Colombiana 2.5 L",
        "precio": 6000,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5nsasGDjX-92BEsyxxDChDX4qmFQFM6nzkhTxAD0qw&s=10"
    },
    {
        "id": "postobon-1500-pepsi",
        "nombre": "Gaseosa Postobón Pepsi 1.5 L",
        "precio": 4500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XGPXzTyDqNbdyZ1qEm8PCbsWMyrugb2Co1FKwC0bZQ&s=10"
    },
    {
        "id": "postobon-1500-uva",
        "nombre": "Gaseosa Postobón Uva 1.5 L",
        "precio": 4500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgB6n0RVGkh0A1zjcIo5Ob_4uiTPFLm1sP1gIasytPog&s=10"
    },
    {
        "id": "postobon-1500-manzana",
        "nombre": "Gaseosa Postobón Manzana 1.5 L",
        "precio": 4500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxw-p3T9ffnXfr07XbAIGb7yUTi11XkM3AgSD-MFJKA&s=10"
    },
    {
        "id": "postobon-1500-naranja",
        "nombre": "Gaseosa Postobón Naranja 1.5 L",
        "precio": 4500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJGV47EuueL9jLVCsQREDxoOippm7MMB-03GARuRMgQ&s=10"
    },
    {
        "id": "postobon-1500-colombiana",
        "nombre": "Gaseosa Postobón Colombiana 1.5 L",
        "precio": 4500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwE6flXnsunK7AGOQePqEHnqkZ9TOuGP0liYOEPOOow&s=10"
    },
    {
        "id": "postobon-1500-bretaña",
        "nombre": "Gaseosa Postobón Bretaña 1.5 L",
        "precio": 4500,
        "categoria": "bebidas",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETc93D9PkA_2U1624KnL0tFaH7itH3WCcex93xomVnA&s=10"
    },
    {
        "id": "derby-20",
        "nombre": "Derby x20",
        "precio": 9500,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3OcIOP4or-cRw6CNofVuJDW7crlkoQx5sq6UH5k9bQ&s=10"
    },
    {
        "id": "premier-20",
        "nombre": "Premier x20",
        "precio": 9500,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXBW-Hqp_cEIhMzUjWkeV05N9s3iNf99-AiMc90TGzw&s=10"
    },
    {
        "id": "derby-10",
        "nombre": "Derby x10",
        "precio": 5000,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://bermudasgo.com/wp-content/uploads/2025/07/07699_CIG-MARLBORO-RED-SELECTION-MEDIOS-100TIRAx10PAQx10UNI.jpg"
    },
    {
        "id": "premier-10",
        "nombre": "Premier x10",
        "precio": 5000,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://s3.pagegear.co/409/productos/16196_800x800.jpg?2090028"
    },
    {
        "id": "green-10",
        "nombre": "Green x10",
        "precio": 6500,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://megatiendas.vtexassets.com/arquivos/ids/171538/7702005602243.png?v=638609915916970000"
    },
    {
        "id": "marlboro-fusion-10",
        "nombre": "Marlboro Fusion x10",
        "precio": 8000,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkPg37d9h5udRVh0zskbaWTl4EjI4ShmG8Lf5ovypLw&s=10"
    },
    {
        "id": "marlboro-sandia-10",
        "nombre": "Marlboro Sandía x10",
        "precio": 8000,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://eurosuper.vtexassets.com/arquivos/ids/195807/7702005600317.png?v=639065903655570000"
    },
    {
        "id": "landm-rojo-10",
        "nombre": "L&M rojo x10",
        "precio": 4500,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4JRuFBrPbGJCJe6k5MI5bQn_1i0MEgOq3JhfMjEfygtordDUN1EG2MA&s=10"
    },
    {
        "id": "landm-blanco-10",
        "nombre": "L&M blanco x10",
        "precio": 5000,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwy-aTPG7BbikvezuqbZcg_SWYeB82wR3cPBqXIGZi_Vf0z4-1B36qJwA&s=10"
    },
    {
        "id": "landm-fusion-10",
        "nombre": "L&M fusión x10",
        "precio": 5400,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://eurosuper.vtexassets.com/arquivos/ids/195800/7702005917712.png?v=639065903207330000"
    },
    {
        "id": "lucky-sandia-10",
        "nombre": "Lucky Sandía x10",
        "precio": 8000,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://ivo-mucura.s3.amazonaws.com/productos/QqrrwHlQh7.jpg"
    },
    {
        "id": "lucky-azul-10",
        "nombre": "Lucky Azul x10",
        "precio": 8000,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW3wVPWUdVjiAVJh6YxVX1mVeSLxfL6y_aPdUEYvsDQ&s=10"
    },
    {
        "id": "lucky-mora-ice-10",
        "nombre": "Lucky Mora Ice x10",
        "precio": 8000,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://exitocol.vtexassets.com/arquivos/ids/36871328/Display-Cigarrillos-LUCKY-STRIKE-Wild-Berries-100-und-3808718_a.jpg?v=639294079830830000"
    },
    {
        "id": "marlboro-blanco-10",
        "nombre": "Marlboro Blanco x10",
        "precio": 8000,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://lacaretalicores.com/cdn/shop/files/Cigarrillo-Marlboro-Gold_1.png?v=1739212260"
    },
    {
        "id": "marlboro-rojo-10",
        "nombre": "Marlboro Rojo x10",
        "precio": 8000,
        "categoria": "cigarrillos",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9OQkXalUb3JLz-5eOgZkgMzlBIfOI9t5Cy7L2X-HhRC3KlTQoWycMA8&s=10"
    },
    {
        "id": "boliquesos-grandes-160-g",
        "nombre": "Boliquesos Grandes 160 g",
        "precio": 7000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnED1ovB1OuSl-pfJ_7hpv8dSnPxzD86w97DtqAw71uw&s=10"
    },
    {
        "id": "cheese-tris-bolsaza-120-g",
        "nombre": "Cheese Tris Bolsaza 120 g",
        "precio": 4500,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmIG0xIxLjukxkqmQHJLPdIABlSkgOIaDaaf-zgeoRw&s=10"
    },
    {
        "id": "de-todito-limon-grande-165-g",
        "nombre": "De Todito Limón Grande 165 g",
        "precio": 9000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ON0vmNnPYaAlL6Y11wqO0fSf0rV-HrwPDOr0TbIMjQ&s=10"
    },
    {
        "id": "de-todito-bbq-grande-165-g",
        "nombre": "De Todito BBQ Grande 165 g",
        "precio": 9000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzqqRpDpNbqkuKkaUXFG7Hi691c1E_b1VHHQQ_EcJrg&s=10"
    },
    {
        "id": "de-todito-mix-grande-165-g",
        "nombre": "De Todito Mix Grande 165 g",
        "precio": 9000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://licoresmedellin.com/cdn/shop/files/pasabocas-de-todito-mix-165gpasabocas-de-todito-mix-165gfrito-laylicores-medellin-4332683.jpg?v=1759122980&width=1000"
    },
    {
        "id": "de-todito-natural-grande-165-g",
        "nombre": "De Todito Natural Grande 165 g",
        "precio": 9000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://olimpica.vtexassets.com/arquivos/ids/1787786-800-450?v=638769649313370000&width=800&height=450&aspect=true"
    },
    {
        "id": "de-todito-bbq-bolsaza-80-g",
        "nombre": "De Todito BBQ Bolsaza 80 g",
        "precio": 4500,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTskkbCJg146mW4JNrne11fH3FWlv532J_LHmqs3Bmg&s=10"
    },
    {
        "id": "de-todito-natural-bolsaza-80-g",
        "nombre": "De Todito Natural Bolsaza 80 g",
        "precio": 4500,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryZ4MTerO8yoUUS0Kir83-mBHj6y2seLfqimNYn-W1w&s=10"
    },
    {
        "id": "de-todito-mix-bolsaza-80-g",
        "nombre": "De Todito Mix Bolsaza 80 g",
        "precio": 4500,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxMrrtcdS2Z7-pzZVgDP5AcJwegiDU_eNmaeUx6CUbQ&s=10"
    },
    {
        "id": "doritos-grandes-185-g",
        "nombre": "Doritos Grandes 185 g",
        "precio": 9000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://mercaldas.vtexassets.com/arquivos/ids/1333084-800-auto?v=638590877797170000&width=800&height=auto&aspect=true"
    },
    {
        "id": "doritos-bolsaza-80-g",
        "nombre": "Doritos Bolsaza 80 g",
        "precio": 4500,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAZMnHRrJNoufMLs1VItNDOdcdrVsgjF734EJbMREOQ&s=10"
    },
    {
        "id": "choclitos-grandes-210-g",
        "nombre": "Choclitos Grandes 210 g",
        "precio": 8000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCV1G1XNMK0d3qNXmD6D6_tt2_FVshn-m_jP4beUFWEg&s=10"
    },
    {
        "id": "choclitos-bolsaza-125-g",
        "nombre": "Choclitos Bolsaza 125 g",
        "precio": 4500,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh03uzrjwOxzGBWoTdpp-dNoBwiwB2ZmwViPhd8Ce0SA&s=10"
    },
    {
        "id": "papas-margarita-tomate-grandes-105-g",
        "nombre": "Papas Margarita Tomate Grandes 105 g",
        "precio": 7000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VTDCcIQaFc0BKhPvQrxiAYm1pgXSgiFJZVn9-8prjw&s=10"
    },
    {
        "id": "papas-margarita-mayonesa-grandes-105-g",
        "nombre": "Papas Margarita Mayonesa Grandes 105 g",
        "precio": 7000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJWRoBi6N1-5ZY5P04fODO89l9uuX7HX1lXmgNTXE1w&s=10"
    },
    {
        "id": "papas-margarita-limon-grandes-105-g",
        "nombre": "Papas Margarita Limón Grandes 105 g",
        "precio": 7000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://olimpica.vtexassets.com/arquivos/ids/1787776-800-450?v=638769646741870000&width=800&height=450&aspect=true"
    },
    {
        "id": "papas-margarita-pollo-grandes-105-g",
        "nombre": "Papas Margarita Pollo Grandes 105 g",
        "precio": 7000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyV3uX4aJiEzJPUaPFtWdzNUDg61v-39Z8u-aXZ97n2g&s=10"
    },
    {
        "id": "papas-margarita-naturales-grandes-105-g",
        "nombre": "Papas Margarita Naturales Grandes 105 g",
        "precio": 7000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GTwDosn_m-8mfu3AkZvZxvtq9HzrekA5gn_xhCL1Bg&s=10"
    },
    {
        "id": "papas-margarita-limon-bolsaza-75-g",
        "nombre": "Papas Margarita Limón Bolsaza 75 g",
        "precio": 4500,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohv-O2G9qGHjRt6mS0vfSQOwDptoylNGx1uqfDXeNMw&s=10"
    },
    {
        "id": "papas-margarita-pollo-bolsaza-75-g",
        "nombre": "Papas Margarita Pollo Bolsaza 75 g",
        "precio": 4500,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jffhegxJEseIBDUOB5bamOS8RglQrMhnjrkhKwMAtw&s=10"
    },
    {
        "id": "natuchips-platano-verde-grandes-135-g",
        "nombre": "Natuchips Plátano Verde Grandes 135 g",
        "precio": 7000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQCKDY6LDpvjVVjdOlOaPCllQrK7N5wVqy_mZR6SrwQ&s=10"
    },
    {
        "id": "natuchips-platano-maduro-grandes-135-g",
        "nombre": "Natuchips Plátano Maduro Grandes 135 g",
        "precio": 7000,
        "categoria": "snacks",
        "destacado": false,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFoaRtRX1ORZzQ6p5LFBuavnN7at6ddE35HLHyhDsbVA&s"
    }
];

let carrito = [];

function formatoPrecio(precio) {
    return "$" + Number(precio).toLocaleString("es-CO");
}

// AGREGAR AL CARRITO
function agregarAlCarrito(id) {
    const producto = inventario.find(item => item.id === id);

    if (!producto || producto.precio === null) {
        alert("El precio de este producto está pendiente de confirmar.");
        return;
    }

    const existente = carrito.find(item => item.id === id);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    mostrarCarrito();
}

// MOSTRAR CARRITO
function mostrarCarrito() {
    const carritoHTML = document.getElementById("carrito-contenido");
    const totalHTML = document.getElementById("total-carrito");
    const contador = document.getElementById("contador-carrito");

    if (!carritoHTML || !totalHTML || !contador) return;

    contador.textContent = carrito.reduce((suma, producto) => suma + producto.cantidad, 0);

    if (carrito.length === 0) {
        carritoHTML.innerHTML = '<p class="text-muted">Tu carrito está vacío.</p>';
        totalHTML.textContent = "$0";
        return;
    }

    let total = 0;

    carritoHTML.innerHTML = carrito.map((producto, indice) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        return `
            <div class="carrito-producto border-bottom py-3">
                <div class="carrito-info">
                    <strong>${producto.nombre}</strong>
                    <small>${formatoPrecio(producto.precio)} c/u</small>
                </div>
                <div class="carrito-controles">
                    <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${indice}, -1)">−</button>
                    <span class="cantidad-producto">${producto.cantidad}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${indice}, 1)">+</button>
                    <button class="btn btn-sm btn-danger btn-eliminar" onclick="eliminarProducto(${indice})" aria-label="Eliminar producto">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                <strong class="subtotal-producto">${formatoPrecio(subtotal)}</strong>
            </div>
        `;
    }).join("");

    totalHTML.textContent = formatoPrecio(total);
}

function cambiarCantidad(indice, cambio) {
    if (!carrito[indice]) return;

    carrito[indice].cantidad += cambio;
    if (carrito[indice].cantidad <= 0) carrito.splice(indice, 1);

    mostrarCarrito();
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    mostrarCarrito();
}

// TARJETAS DEL CATÁLOGO
function rutaImagen(producto) {
    return producto.imagen || "";
}

function nombreCategoria(categoria) {
    const nombres = {
        licores: "Licores",
        bebidas: "Bebidas",
        snacks: "Snacks",
        cigarrillos: "Cigarrillos"
    };

    return nombres[categoria] || categoria;
}

function crearTarjeta(producto) {
    const precioHTML = producto.precio === null
        ? '<p class="precio precio-pendiente">Precio por confirmar</p>'
        : `<p class="precio">${formatoPrecio(producto.precio)}</p>`;

    const botonHTML = producto.precio === null
        ? '<button class="btn btn-secondary w-100" disabled>Precio pendiente</button>'
        : `<button class="btn btn-primary w-100" onclick="agregarAlCarrito('${producto.id}')">
                <i class="fa-solid fa-cart-plus"></i> Agregar
           </button>`;

    return `
        <div class="col-12 col-sm-6 col-lg-3">
            <div class="producto h-100">
                ${rutaImagen(producto) ? `
                <img
                    src="${rutaImagen(producto)}"
                    class="img-fluid w-100 imagen-producto"
                    alt="${producto.nombre}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >` : ''}
                <div class="p-3">
                    <span class="etiqueta-categoria">${nombreCategoria(producto.categoria)}</span>
                    <h5>${producto.nombre}</h5>
                    ${precioHTML}
                    ${botonHTML}
                </div>
            </div>
        </div>
    `;
}

function pintarProductos(lista, contenedorId, textoVacio) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;

    if (lista.length === 0) {
        contenedor.innerHTML = `<p class="text-muted text-center py-4">${textoVacio}</p>`;
        return;
    }

    contenedor.innerHTML = lista.map(crearTarjeta).join("");
}

function mostrarDestacados() {
    const destacados = inventario.filter(producto => producto.destacado);
    pintarProductos(destacados, "productos-destacados", "Pronto tendremos productos destacados.");
}

let categoriaActiva = "todos";

function filtrarCategoria(categoria) {
    categoriaActiva = categoria;

    const texto = (document.getElementById("buscador")?.value || "").toLowerCase().trim();

    const lista = inventario.filter(producto => {
        const coincideCategoria = categoria === "todos" || producto.categoria === categoria;
        const coincideTexto = producto.nombre.toLowerCase().includes(texto);
        return coincideCategoria && coincideTexto;
    });

    const titulo = document.getElementById("titulo-catalogo");
    if (titulo) {
        titulo.textContent = categoria === "todos"
            ? "Catálogo completo"
            : `Catálogo: ${nombreCategoria(categoria)}`;
    }

    pintarProductos(lista, "catalogo-productos", "No encontramos productos con esa búsqueda o categoría.");

    document.querySelectorAll(".categoria").forEach(card => {
        card.classList.toggle("categoria-activa", card.dataset.category === categoria);
    });
}

function buscarProductos() {
    const texto = (document.getElementById("buscador")?.value || "").toLowerCase().trim();

    const lista = inventario.filter(producto => {
        const coincideCategoria = categoriaActiva === "todos" || producto.categoria === categoriaActiva;
        return coincideCategoria && producto.nombre.toLowerCase().includes(texto);
    });

    const titulo = document.getElementById("titulo-catalogo");
    if (titulo) {
        titulo.textContent = texto
            ? "Resultados de búsqueda"
            : (categoriaActiva === "todos" ? "Catálogo completo" : `Catálogo: ${nombreCategoria(categoriaActiva)}`);
    }

    pintarProductos(lista, "catalogo-productos", "No encontramos productos con esa búsqueda o categoría.");
}

// FORMULARIO DEL PEDIDO
function mostrarFormulario(tipo) {
    const formulario = document.getElementById("formulario-pedido");
    if (!formulario) return;

    if (tipo === "domicilio") {
        formulario.innerHTML = `
            <div class="card bg-light p-4">
                <h5 class="mb-4"><i class="fa-solid fa-motorcycle"></i> Datos del domicilio</h5>
                <div class="mb-3">
                    <label class="form-label" for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Escribe tu nombre">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="telefono">Teléfono</label>
                    <input type="tel" class="form-control" id="telefono" placeholder="Número de teléfono">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="direccion">Dirección</label>
                    <input type="text" class="form-control" id="direccion" placeholder="Dirección donde se entregará">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="observaciones">Observaciones</label>
                    <textarea class="form-control" id="observaciones" rows="3" placeholder="Barrio, apartamento, indicaciones, etc."></textarea>
                </div>
                <button class="btn btn-success w-100" onclick="confirmarPedido('domicilio')">Confirmar pedido</button>
            </div>
        `;
    } else {
        formulario.innerHTML = `
            <div class="card bg-light p-4">
                <h5 class="mb-4"><i class="fa-solid fa-store"></i> Datos para recoger en tienda</h5>
                <div class="mb-3">
                    <label class="form-label" for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Escribe tu nombre">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="telefono">Teléfono</label>
                    <input type="tel" class="form-control" id="telefono" placeholder="Número de teléfono">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="hora">Hora de recogida</label>
                    <input type="time" class="form-control" id="hora">
                </div>
                <button class="btn btn-success w-100" onclick="confirmarPedido('tienda')">Confirmar pedido</button>
            </div>
        `;
    }
}

function confirmarPedido(tipo) {
    if (carrito.length === 0) {
        alert("Primero debes agregar productos al carrito.");
        return;
    }

    const nombre = document.getElementById("nombre")?.value.trim() || "";
    const telefono = document.getElementById("telefono")?.value.trim() || "";

    if (!nombre || !telefono) {
        alert("Por favor completa el nombre y el teléfono.");
        return;
    }

    let mensaje = "🛒 *NUEVO PEDIDO - ESTANQUILLO*%0A%0A";
    mensaje += "*Cliente:* " + encodeURIComponent(nombre) + "%0A";
    mensaje += "*Teléfono:* " + encodeURIComponent(telefono) + "%0A";

    if (tipo === "domicilio") {
        const direccion = document.getElementById("direccion")?.value.trim() || "";
        const observaciones = document.getElementById("observaciones")?.value.trim() || "";

        if (!direccion) {
            alert("Por favor completa la dirección.");
            return;
        }

        mensaje += "*Tipo:* Domicilio%0A";
        mensaje += "*Dirección:* " + encodeURIComponent(direccion) + "%0A";
        if (observaciones) {
            mensaje += "*Observaciones:* " + encodeURIComponent(observaciones) + "%0A";
        }
    } else {
        const hora = document.getElementById("hora")?.value || "";

        if (!hora) {
            alert("Por favor selecciona la hora de recogida.");
            return;
        }

        mensaje += "*Tipo:* Recoger en tienda%0A";
        mensaje += "*Hora de recogida:* " + encodeURIComponent(hora) + "%0A";
    }

    mensaje += "%0A*PRODUCTOS:*%0A";

    let total = 0;
    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        mensaje += "• " + producto.cantidad + "x " +
            encodeURIComponent(producto.nombre) + " - $" +
            subtotal.toLocaleString("es-CO") + "%0A";
    });

    mensaje += "%0A*TOTAL: $" + total.toLocaleString("es-CO") + "*%0A";

    const numeroWhatsApp = "573148531454";
    const url = "https://wa.me/" + numeroWhatsApp + "?text=" + mensaje;
    window.open(url, "_blank");
}

// INICIALIZAR
document.addEventListener("DOMContentLoaded", () => {
    mostrarDestacados();
    filtrarCategoria("todos");

    const buscador = document.getElementById("buscador");
    const botonBuscar = document.getElementById("boton-buscar");

    if (buscador) {
        buscador.addEventListener("input", buscarProductos);
        buscador.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                event.preventDefault();
                buscarProductos();
                document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    if (botonBuscar) {
        botonBuscar.addEventListener("click", () => {
            buscarProductos();
            document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
        });
    }

    document.querySelectorAll(".categoria").forEach(card => {
        card.addEventListener("click", () => {
            filtrarCategoria(card.dataset.category);
            document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
        });
    });

    const verTodo = document.getElementById("ver-todo");
    if (verTodo) {
        verTodo.addEventListener("click", () => {
            filtrarCategoria("todos");
            document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
        });
    }
});
