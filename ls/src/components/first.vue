<script>

export default {
  name: "first",
  data() {
    return {
      test: [],
      fontColor: "red",
      isTrue: true,
      whtchTest: "red"
    }
  },
  computed: {
    isTr() {
      return this.isTrue ? 'red' : 'green'
    }
  },
  methods: {
    cli(index) {
      this.test.splice(index, 1)
    },
    bianse() {
      this.isTrue = !this.isTrue
      console.log(this.$refs.color.innerHTML)// =  document.getElementById()

    }
  },
  watch: {
    isTrue(newValue, oldValue) {
      if (newValue) {
        this.whtchTest = "red"
      } else {
        this.whtchTest = "green"
      }
      console.log(newValue, oldValue)
    }
  }
}
</script>
<template>
  <p :class="whtchTest">{{ whtchTest }}</p>
  <button ref="color" @click="bianse">变色</button>
</template>

<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}
</style>