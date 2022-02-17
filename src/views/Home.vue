<template>
    <div class="container text-white">
        <div class="row">
            <div class="col-11 col-md-6 mx-auto">
                <h3>Convertidor de bases numéricas</h3>
                <div class="row">
                    <form class="row g-3" v-on:submit.prevent="convertToBaseN">
                        <div class="col">
                            <div class="col-auto">
                                <label for="inputNumber" class="visually">Ingrese numero</label>
                                <input type="text" class="form-control" id="inputNumber" v-model="numeroAConvertir">

                                <div class="input-group my-3">
                                    <select class="form-select" aria-label="Default select example" v-model="baseOrigen">
                                        <option value="2" selected>Base 2</option>
                                        <option v-for="i in 14" :value="i+2" :key="i">Base {{i+2}}</option>
                                    </select>
                                    <label class="input-group-text" for="inputGroupSelect01">a</label>
                                    <select class="form-select" aria-label="Default select example" v-model="baseFinal">
                                        <option value="2" selected>Base 2</option>
                                        <option v-for="i in 14" :value="i+2" :key="i">Base {{i+2}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mx-auto">
                                <button type="button" class="btn btn-danger col-5 mx-auto" @click="cleanInputs">Borrar campos</button>
                                <button type="submit" class="btn btn-primary col-5 mx-auto">Convertir número</button>
                            </div>
                        </div>
                    </form>
                    <div class="row g-1">
                        <div class="col">
                            <label for="inputResult" class="visually">Resultado</label>
                            <input type="text" class="form-control" id="inputResult" v-model="numeroConvertido" readonly>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Op from '@/scripts/operaciones.js'
export default {
    data() {
        return {
            numeroAConvertir: '',
            baseOrigen: '2',
            baseFinal: '2',
            numeroConvertido: '',
        }
    },
    methods: {
        convertToBaseN(){
            let error = Op.validateNumber(this.numeroAConvertir, this.baseOrigen, this.baseFinal )
            if (!error.value) {
                alert(error.msj)
                return false
            }
            if (this.baseOrigen == 10) {
                this.numeroConvertido = Op.decimalToBaseN(this.numeroAConvertir,this.baseFinal)
            } else {
                let numero = Op.baseNToDecimal(this.numeroAConvertir,this.baseOrigen)
                this.numeroConvertido = Op.decimalToBaseN(numero,this.baseFinal)
            }
        },
        cleanInputs(){
            this.numeroAConvertir = ''
            this.baseOrigen = '2'
            this.baseFinal = '2'
            this.numeroConvertido = ''
        }
    }
}
</script>

<style scoped>

</style>