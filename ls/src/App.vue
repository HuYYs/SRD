<script setup>
import {reactive, ref} from "vue";

const data = reactive([{
  // 一级
  "title": "SRD Index",
  "color": "#F7C2C2",
  "hover": "",
  "level": 1,
  "id": 1,
  // 二级
  "children": [
    {
      "title": "Racial Segregation",
      "color": "#6CBC6A",
      "hover": "",
      "level": 2,
      "f_id": 1,
      "id": 2,
      // 三级
      "children": [
        {
          "title": "Concentration of Blacks vs Whites",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 2,
          "id": 7,
        },
        {
          "title": "Racial Diversity",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 2,
          "id": 8,
        },
      ]
    },
    {
      "title": "Housing",
      "color": "#6CBC6A",
      "hover": "",
      "level": 2,
      "f_id": 1,
      "id": 3,
      // 三级
      "children": [
        {
          "title": "Home-Mortgage Loan Denial",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 3,
          "id": 9,
        },
        {
          "title": "Home Ownership",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 3,
          "id": 10,
        },
      ]
    },
    {
      "title": "Income and Wealth",
      "color": "#6CBC6A",
      "hover": "",
      "level": 2,
      "f_id": 1,
      "id": 4,
      "children": [
        {
          "title": "Median Household Income",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 4,
          "id": 11,
        },
        {
          "title": "Unemployment",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 4,
          "id": 12,
        },
        {
          "title": "Low-income Blacks vs Whites",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 4,
          "id": 13,
        },
      ]
    },
    {
      "title": "Healthcare Resources",
      "color": "#6CBC6A",
      "hover": "",
      "level": 2,
      "f_id": 1,
      "id": 5,
      "children": [
        {
          "title": "Primary Care",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 5,
          "id": 14,
        },
        {
          "title": "Mental Health Care",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 5,
          "id": 15,
        },
        {
          "title": "Dental Health Care",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 5,
          "id": 16,
        },
        {
          "title": "With no Health Insurance",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 5,
          "id": 17,
        },
      ]
    },
    {
      "title": "Crime and Incarceration",
      "color": "#6CBC6A",
      "hover": "",
      "level": 2,
      "f_id": 1,
      "id": 6,
      "children": [
        {
          "title": "Violent Crime Arrests",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 6,
          "id": 18,
        },
        {
          "title": "Property Crime Arrests",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 6,
          "id": 19,
        },
        {
          "title": "Incarceration",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 6,
          "id": 20,
        },
        {
          "title": "Homicide Fatalities",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 6,
          "id": 21,
        },
        {
          "title": "Firearm Fatalities",
          "color": "#B9DBA6",
          "hover": "",
          "level": 3,
          "f_id": 6,
          "id": 22,
        },
      ]
    },
  ]
}])
const isTrue = ref(true)
</script>

<template>
  <div class="app">
    <!--    <div class="app_left">-->
    <router-view></router-view>
    <!--    </div>-->
    <!--    <div class="app_right">-->
    <!--      <qwe/>-->
    <!--    </div>-->
  </div>
</template>

<style scoped>
.app {
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
}

.app_left {
  flex: 1;
  height: 100%;
}

.app_right {
  flex: 1;
  height: 100%;
}
</style>
