<template>
    <section class="testpacket-description">
        <div class="container">
            <h2>Dein Testpaket enthält</h2>
            <div class="col-holder">
                <div class="col">
                    <div class="img-holder">
                        <img src="../assets/images/3.jpg" alt="">
                    </div>
                    <div class="text-holder">
                        <h4>10 LILLYDOO WINDELN</h4>
                        <ul>
                            <li>0 % Parfüme &amp; Lotionen, 100 % LILLYDOO Schutz</li>
                            <li>Extra weich und mit idealer Passform</li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="img-holder">
                        <img :class="['state-img', {'active': selectedSize <= 2}]" src="../assets/images/4.jpg" alt="">
                        <img :class="['state-img', {'active': selectedSize > 2}]" src="../assets/images/5.jpg" alt="">
                    </div>
                    <div class="text-holder">
                        <h4>15 FEUCHTTÜCHER MIT 99 % WASSER</h4>
                        <ul>
                            <li>0 % Parfüme &amp; PEGs, 100 % biologisch abbaubar</li>
                            <li>Natürlich rein, extra mild, Alternative zu "Wasser &amp; Watte"</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "TestPacketDescription",
        data() {
            return {
                selectedSize: 1
            }
        },
        mounted() {
            this.$root.$on('sizeSelected', size => {
                this.selectedSize = size;
            })
        }
    }
</script>
