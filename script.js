const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4')
const p1 = document.getElementById('aceite');
const p2 = document.getElementById('descripcion');
const p3 = document.getElementById('usos');
const div = document.querySelector('div');
const alternarButton = document.getElementById('alternarcolor');
const select = document.getElementById('select');

let coloractual = "blanco";
let idioma = "español";

function whitecolor() {
    body.style.backgroundColor = "white";
    h1.style.color = "black";
    h2.style.color = "black";
    h3.style.color = "black";
    h4.style.color = "black";
    p1.style.color = "black";
    p2.style.color = "black";
    p3.style.color = "black";
    div.style.color = "black";
    coloractual = "blanco";
}

function blackcolor() {
    body.style.backgroundColor = "black";
    h1.style.color = "white";
    h2.style.color = "white";
    h3.style.color = "white";
    h4.style.color = "white";
    p1.style.color = "white";
    p2.style.color = "white";
    p3.style.color = "white";
    div.style.color = "white";
    coloractual = "negro";
}



function alternarcolor(){
    if(coloractual == "blanco"){
        blackcolor();
    }
    else{
        whitecolor();
    }
}

function español(){
    h1.textContent = "El aceite de ballena";
    h2.textContent = "Descripción";
    h3.textContent = "Usos";
    h4.textContent = "Bibliografía";
    p1.textContent = "El aceite de ballena es el aceite obtenido de la grasa de diversas especies de cetáceos. El aceite de ballena más importante es el espermaceti que se obtiene de los cachalotes.";
    p2.textContent = "El aceite de ballena es químicamente una cera líquida y no es un aceite. Es claro y fluye fácilmente. Varía de color desde el amarillo brillante al marrón oscuro, de acuerdo a la calidad de la grasa de la que ha sido extraído. La estearina y el espermaceti pueden ser separados del aceite de ballena a bajas temperaturas (por debajo de 0 °C). Estos componentes pueden ser cristalizados casi en su totalidad.";
    p3.textContent = "El primer uso del aceite de ballena fue como combustible de lámparas y como cera de la vela. Fue una importante fuente de alimento para los pueblos indígenas del Pacífico al noroeste, como el Nootka. Fue el primer aceite animal o mineral en lograr viabilidad comercial, muy utilizado como lubricante, en la fabricación de margarinas y en la base de pinturas antioxidantes. El declive en su uso comenzó con el desarrollo del queroseno a partir del carbón en 1846 y el descubrimiento de petróleo en perforaciones, a finales del siglo XIX, que llevó al reemplazo de los aceites de ballenas en la mayoría de aplicaciones no alimentarias. En 1986, la Comisión Ballenera Internacional estableció una moratoria sobre la caza comercial de cetáceos, lo que ocasionó que el aceite de ballena dejara de ser un producto viable. Como sustituto para la mayoría de sus usos se emplea el aceite de jojoba.";
}

function english(){
    h1.textContent = "Whale oil";
    h2.textContent = "Description";
    h3.textContent = "Uses";
    h4.textContent = "Bibliography";
    p1.textContent = "Whale oil is the oil obtained from the blubber of various species of cetaceans. The most significant type of whale oil is spermaceti, which is obtained from sperm whales.";
    p2.textContent = "Chemically, whale oil is a liquid wax rather than an oil. It is clear and flows easily. Its color ranges from bright yellow to dark brown, depending on the quality of the blubber from which it was extracted. Stearin and spermaceti can be separated from whale oil at low temperatures (below 0 °C). These components can be almost entirely crystallized.";
    p3.textContent = "The initial use of whale oil was as fuel for lamps and as wax for candles. It served as an important food source for Indigenous peoples of the Pacific Northwest, such as the Nootka. It was the first animal or mineral oil to achieve commercial viability, finding extensive use as a lubricant, in the manufacture of margarine, and as a base for anti-corrosive paints. Its decline began with the development of kerosene from coal in 1846 and the discovery of petroleum through drilling in the late 19th century, which led to the replacement of whale oil in most non-food applications. In 1986, the International Whaling Commission established a moratorium on the commercial hunting of cetaceans, rendering whale oil no longer a viable product. Jojoba oil is now used as a substitute for most of its former applications.";
}

alternarButton.addEventListener('click', alternarcolor);

select.addEventListener('change', (event) => {
    idioma = event.target.value;
    if (idioma == 'español') {
        español();
    } else if (idioma == 'english') {
        english();
    }
});
 