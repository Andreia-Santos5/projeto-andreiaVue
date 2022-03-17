<template>
<div class="divFruits">
<div class="grid">
	<div class="grid">
        <figure>
            <img class="card-img" src="../assets/cacau.jpeg" alt='cocoa'>
            <figcaption> Cocoa beans are the basis of chocolate, and Mesoamerican foods including tejate, an indigenous Mexican drink that also includes maize.</figcaption>
        </figure>
        <figure>
            <img class="card-img" src="../assets/starFruit.jpeg" alt='starFruit'>
            <figcaption>Star fruit — or carambola — is a sweet and sour fruit that has the shape of a five-point star. </figcaption>
        </figure>
        <figure>
            <img class="card-img" src="../assets/Ciriguela.jpeg"  alt='Ciriguela'>
            <figcaption>Ciriguela - It is an ellipsoidal drupe of yellowish or even reddish color when mature, with a length between 2.5 and five centimeters.</figcaption>
        </figure>
    </div>
    </div>
    <div class="grid">
        <div class="grid">
            <figure>
                <img class="card-img" src="../assets/jaca.jpeg"  alt='cocoapods'>
                <figcaption>Jaca fruit- It is an oval-shaped syncarp originated from the development of the female inflorescence.</figcaption>
            </figure>
            <figure>
                <img class="card-img" src="../assets/mango.jpeg"  alt='mango'>
                <figcaption>Mango - It is the fruit of the mango tree ( Mangifera indica L.), a fruit tree of the Anacardiaceae family.</figcaption>
            </figure>
            <figure>
                <img class="card-img" src="../assets/pitaya.jpeg"  alt='pitaya'>
                <figcaption> Pitaya- It is also known as dragon fruit, is the fruit of several species of epiphytic cacti of the genera Hylocereus and Selenicereus .</figcaption>
            </figure>
         </div>
     </div>
 </div>
<footer class="footer">
<h5>TropLand, 2022 &copy;</h5>
</footer>

</template>
<style scoped>
.card-img {
    width: "400px";
    width: "400px";
    display: block;
    width: 100%;
	object-fit: scale-down;
	grid-row: 1 / 3;
	grid-column: 1;
}

.grid {
    display: grid;
	max-width: 80rem;
	margin: 0 auto;
	grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
	grid-template-rows: 1fr auto;
	gap: 1.5rem;
}
figcaption {
	padding: 1rem;
	grid-column: 1;
	grid-row: 2;
	background: hsl(0 0% 0% / 0.6);
	color: white;
}
.divFruits{
	padding:90px 70px 50px 70px;
	background:#eee;
}

</style>
