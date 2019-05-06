<template>
    <div class="wrapper">
        <main class="main">
            <section class="hero-section" :style="{backgroundImage: backgroundImg}">
                <div class="container">
                    <div class="row">
                        <div class="col-holder">
                            <div class="text-col">
                                <h1>Entdecke unsere Hautfreundlichkeit</h1>
                                <a href="#" class="btn" v-scroll-to="'.test-packet'">Jetzt Deine Größe wählen</a>
                            </div>
                            <div class="standart-img">
                                <img src="./assets/images/3.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <test-packet></test-packet>
            <section class="functionality">
                <div class="container">
                    <h2>Wie es funktioniert</h2>
                    <div class="col-holder">
                        <div class="col">
                            <div class="img-holder">
                                <img src="./assets/images/present.svg" width="70" alt="">
                            </div>
                            <div class="text-holder">
                                <h4>DEIN TESTPAKET</h4>
                                <p>Wir schenken Dir die Produkte, <br>Du übernimmst nur das Porto.</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="img-holder">
                                <img src="./assets/images/key.svg" width="70" alt="">
                            </div>
                            <div class="text-holder">
                                <h4>DEINE FLEXIBILITÄT</h4>
                                <p>Erste Monatsbox nach 14 Tagen für 49,50 € erhalten. Oder noch vor der ersten
                                    Lieferung kündigen.</p>
                                <a href="#">Erfahre hier mehr über das <br>LILLYDOO Windel-Abo.</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="img-holder">
                                <img src="./assets/images/box.svg" width="70" alt="">
                            </div>
                            <div class="text-holder">
                                <h4>DEINE MONATSBOX</h4>
                                <p>Jederzeit Designs oder Lieferintervalle anpassen oder die Windelgröße ändern.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <test-packet-description></test-packet-description>
        </main>
    </div>
</template>

<script>
    import TestPacket from "./components/TestPacket";
    import TestPacketDescription from "./components/TestPacketDescription";

    export default {
        name: 'App',
        components: {
            TestPacketDescription,
            TestPacket
        },
        computed: {
            backgroundImg() {
                if(this.$mq === 'mobile') {
                    return 'url(' + require('./assets/images/2.jpg') + ')';
                }

                return 'url(' + require('./assets/images/1.jpg') + ')';
            }
        }
    }
</script>
