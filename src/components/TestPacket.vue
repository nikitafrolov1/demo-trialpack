<template>
    <section class="test-packet">
        <div class="container">
            <div class="row">
                <div class="tabs">
                    <div class="tab-content">
                        <div class="standart-img">
                            <img src="../assets/images/3.png" alt="">
                        </div>
                        <transition-group name="slide-fade">
                            <div v-for="(packet, index) in packets" :key="'tab-'+index" class="tab"
                                 v-if="index === activeTab">
                                <img :src="packet.imgSrc" alt="">
                            </div>
                        </transition-group>
                    </div>
                    <div class="tab-info">
                        <h2>Unser gratis Testpaket</h2>
                        <strong class="subtitle">Wähle Deine Größe</strong>
                        <ul class="tabset-nav">
                            <li v-for="(packet, index) in packets">
                                <a href="javascript:void(0)" :class="['button', {'active': index === activeTab}]"
                                   @click="selectPacket(index, packet)">
                                    <p>{{packet.size}}</p>
                                    <span class="weight">{{packet.description}}</span>
                                </a>
                            </li>
                        </ul>
                        <p>Teste jetzt unsere Windeln und Feuchttücher - In Größe 1 - 3 enthält unser Testpaket unsere
                            Feuchttücher mit 99 % Wasser, ab Gr. 4 erhältst Du unsere Sensitiven Feuchttücher. Wir
                            zahlen die Produkte, Du nur den Versand.</p>
                        <ul class="product-list">
                            <li class="mint">Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro
                                Lieferung.
                            </li>
                            <li>Preise inkl. MwSt., ggf. zzgl. <a href="javascript:void(0)">Versandkosten</a></li>
                        </ul>
                        <button type="button" class="btn">In den Warenkorb legen</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "TestPacket",
        data() {
            return {
                activeTab: 0,
                packets: [
                    {
                        size: 1,
                        imgSrc: require("../assets/images/packet-1.jpg"),
                        description: "(2-3 KG)",
                    },
                    {
                        size: 2,
                        imgSrc: require("../assets/images/packet-2.jpg"),
                        description: "(3-4 KG)",
                    },
                    {
                        size: 3,
                        imgSrc: require("../assets/images/packet-3.jpg"),
                        description: "(4-5 KG)",
                    },
                    {
                        size: 4,
                        imgSrc: require("../assets/images/packet-4.jpg"),
                        description: "(7-10 KG)",
                    },
                    {
                        size: 5,
                        imgSrc: require("../assets/images/packet-5.jpg"),
                        description: "(10-12 KG)",
                    }
                ]
            }
        },
        mounted() {
            this.$root.$emit('sizeSelected', this.packets[0].size)
        },
        methods: {
            selectPacket(idx, packet) {
                this.activeTab = idx;

                this.$root.$emit('sizeSelected', packet.size)
            }
        }
    }
</script>

<style scoped>

</style>
