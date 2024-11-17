<template>
  <div ref="pathoChartContainer" class="patho-tab">
    <div :style="{ transform: `scale(${scaleRatio}) translate(${translateX}px, ${translateY}px)` }"
         class="patho-chart">
      <div v-if="leftDatas.length > 0" class="patho-chart__section patho-chart__section_left">
        <patho-node v-for="(node, i) in leftDatas" :key="node.id" :isLeft="true" :node="node"
                    :nodeDatas="nodeData" @toPage="toPage"/>
      </div>
      <div v-if="nodeData" class="patho-chart__section patho-chart__section_center root-node"
           @click="toPage(nodeData.title)" @mouseleave="mouseLevel(nodeData.id)" @mouseover="mouseColor(nodeData.id)">
        {{ nodeData.title }}
      </div>
      <div v-if="rightDatas.length > 0" class="patho-chart__section patho-chart__section_right ">
        <patho-node v-for="(node, i) in rightDatas" :key="'node' + i" :isLeft="false" :node="node"/>
      </div>
    </div>
  </div>
</template>
<script>
import pathoNode from './PathoNode.vue'

export default {
  components: {
    pathoNode
  },
  data() {
    return {
      scaleRatio: 1,
      translateX: 0,
      translateY: 0,
      // 组织结构图数据
      nodeData: {
        // 一级
        "title": "SRD Index Score",
        "color": "#F7C2C2",
        "hover": "",
        "level": 1,
        "isHover": false, // 自己是否被触碰
        "isChildHover": false, // 子元素是否被触发
        "id": 1,
        "isChild": true,
        // 二级
        "children": [
          {
            "title": "Racial Segregation",
            "color": "#26E275",
            "hover": "",
            "level": 2,
            "fontWeight": "bold",
            "f_id": 1,
            "fontSize": 12,
            "isChild": true,
            "isHover": false, // 自己是否被触碰
            "isChildHover": false, // 子元素是否被触发
            "id": 2,
            // 三级
            "children": [
              {
                "title": "Concentration of Blacks vs Whites",
                "color": "#7eefad",
                "hover": "",
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "level": 3,
                "fontSize": 10,
                "f_id": 2,
                "id": 7,
                "isChild": false,
                "children": [
                  {
                    "title": "Percentage of Blacks",
                    "color": "#7eefad",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 7,
                    "isChild": false,
                    "id": 23,
                  },
                  {
                    "title": "Percentage of Whites",
                    "color": "#7eefad",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 7,
                    "isChild": false,
                    "id": 24,
                  },
                ]
              },
              {
                "title": "Racial Diversity Gap",
                "color": "#7eefad",
                "hover": "",
                "fontSize": 10,
                "level": 3,
                "fontSize": 10,
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "f_id": 2,
                "id": 8,
                "isChild": false,
                "children": [
                  {
                    "title": "Percentage of Blacks",
                    "color": "#7eefad",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 8,
                    "isChild": false,
                    "id": 26,
                  },
                  {
                    "title": "Percentage of Whites",
                    "color": "#7eefad",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 8,
                    "isChild": false,
                    "id": 27,
                  },
                  {
                    "title": "Percentage of Other Races",
                    "color": "#7eefad",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 8,
                    "isChild": false,
                    "id": 28,
                  },
                ]
              },
            ]
          },
          {
            "title": "Housing",
            "color": "#FFDC28",
            "hover": "",
            "level": 2,
            "fontSize": 12,
            "fontWeight": "bold",
            "f_id": 1,
            "isChild": true,
            "isHover": false, // 自己是否被触碰
            "isChildHover": false, // 子元素是否被触发
            "id": 3,
            // 三级
            "children": [
              {
                "title": "Home-Mortgage Loan Denial Gap",
                "color": "#f6e086",
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "hover": "",
                "level": 3,
                "fontSize": 10,
                "f_id": 3,
                "id": 9,
                "isChild": false,
                "children": [
                  {
                    "title": "Percentage of Loan Denial among Black Applicants",
                    "color": "#8AC9DB",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "isChild": false,
                    "f_id": 9,
                    "id": 29,
                  },
                  {
                    "title": "Percentage of Loan Denial among White Applicants",
                    "color": "#8AC9DB",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "isChild": false,
                    "f_id": 9,
                    "id": 30,
                  },
                ]
              },
              {
                "title": "Home Ownership Gap",
                "color": "#f6e086",
                "hover": "",
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "level": 3,
                "fontSize": 10,
                "f_id": 3,
                "id": 10,
                "isChild": false,
                "children": [
                  {
                    "title": "Percentage of Black Homeownership",
                    "color": "#8AC9DB",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 10,
                    "isChild": false,
                    "id": 31,
                  },
                  {
                    "title": "Percentage of White Homeownership",
                    "color": "#8AC9DB",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 10,
                    "id": 32,
                    "isChild": false,
                  },
                ]
              },
            ]
          },
          {
            "title": "Income and Wealth",
            "color": "#CB82FF",
            "hover": "",
            "level": 2,
            "fontWeight": "bold",
            "fontSize": 12,
            "isHover": false, // 自己是否被触碰
            "isChildHover": false, // 子元素是否被触发
            "f_id": 1,
            "isChild": true,
            "id": 4,
            "children": [
              {
                "title": "Median Household Income Gap",
                "color": "#d09df8",
                "hover": "",
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "level": 3,
                "f_id": 4,
                "fontSize": 10,
                "id": 11,
                "isChild": false,
                "children": [
                  {
                    "title": "Median Income for Black Households",
                    "color": "#d09df8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 11,
                    "id": 33,
                    "isChild": false,
                  },
                  {
                    "title": "Median Income for White Households",
                    "color": "#d09df8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "isChild": false,
                    "f_id": 11,
                    "id": 34,
                  },
                ]
              },
              {
                "title": "Unemployment Gap",
                "color": "#d09df8",
                "hover": "",
                "level": 3,
                "fontSize": 10,
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "f_id": 4,
                "id": 12,
                "isChild": false,
                "children": [
                  {
                    "title": "Unemployment Rate for Blacks",
                    "color": "#d09df8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "isChild": false,
                    "f_id": 12,
                    "id": 35,
                  },
                  {
                    "title": "Unemployment Rate for Whites",
                    "color": "#d09df8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "isChild": false,
                    "f_id": 12,
                    "id": 36,
                  },
                ]
              },
              {
                "title": "Low-income Blacks vs Whites",
                "color": "#d09df8",
                "hover": "",
                "level": 3,
                "f_id": 4,
                "fontSize": 10,
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "id": 13,
                "isChild": false,
                "children": [
                  {
                    "title": "Percentage of Blacks living below Poverty Level",
                    "color": "#d09df8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "isChild": false,
                    "f_id": 13,
                    "id": 37,
                  },
                  {
                    "title": "Percentage of Whites living below Poverty Level",
                    "color": "#d09df8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 13,
                    "id": 38,
                    "isChild": false,
                  },
                ]
              },
            ]
          },
          {
            "title": "Healthcare Resources",
            "color": "#4E9BEE",
            "hover": "",
            "fontSize": 12,
            "level": 2,
            "fontWeight": "bold",
            "f_id": 1,
            "isHover": false, // 自己是否被触碰
            "isChildHover": false, // 子元素是否被触发
            "id": 5,
            "isChild": true,
            "children": [
              {
                "title": "Primary Care",
                "color": "#7bafe8",
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "hover": "",
                "level": 3,
                "f_id": 5,
                "fontSize": 10,
                "id": 14,
                "isChild": false,
                "children": [
                  {
                    "title": "Rate of primary care providers per 100,000 populations",
                    "color": "#7bafe8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 14,
                    "id": 39,
                    "isChild": false,
                  },
                ]
              },
              {
                "title": "Mental Health Care",
                "color": "#7bafe8",
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "hover": "",
                "level": 3,
                "f_id": 5,
                "fontSize": 10,
                "id": 15,
                "isChild": false,
                "children": [
                  {
                    "title": "Rate of mental care providers per 100,000 populations",
                    "color": "#7bafe8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 7,
                    "isChild": false,
                    "id": 40,
                  },
                ]
              },
              {
                "title": "Dental Health Care",
                "color": "#7bafe8",
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "hover": "",
                "level": 3,
                "fontSize": 10,
                "f_id": 5,
                "id": 16,
                "isChild": false,
                "children": [
                  {
                    "title": "Rate of dental care providers per 100,000 populations",
                    "color": "#7bafe8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 16,
                    "isChild": false,
                    "id": 41,
                  },
                ]
              },
              {
                "title": "With no Health Insurance Gap",
                "color": "#7bafe8",
                "hover": "",
                "level": 3,
                "fontSize": 10,
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "f_id": 5,
                "id": 17,
                "isChild": false,
                "children": [
                  {
                    "title": "Percentage of Blacks with no health insurance",
                    "color": "#7bafe8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 17,
                    "isChild": false,
                    "id": 42,
                  },
                  {
                    "title": "Percentage of Whites with no health insurance",
                    "color": "#7bafe8",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 17,
                    "isChild": false,
                    "id": 43,
                  },
                ]
              },
            ]
          },
          {
            "title": "Crime and Incarceration",
            "color": "#F95363",
            "fontSize": 12,
            "hover": "",
            "level": 2,
            "f_id": 1,
            "fontWeight": "bold",
            "isHover": false, // 自己是否被触碰
            "isChildHover": false, // 子元素是否被触发
            "id": 6,
            "isChild": true,
            "children": [
              {
                "title": "Violent Crime Arrests Gap",
                "color": "#ec747b",
                "hover": "",
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "level": 3,
                "f_id": 6,
                "fontSize": 10,
                "id": 18,
                "isChild": false,
                "children": [
                  {
                    "title": "Rate of Arrests for Violent Crime per 100,000 Black population",
                    "color": "#ec747b",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 18,
                    "isChild": false,
                    "id": 44,
                  },
                  {
                    "title": "Rate of Arrests for Violent Crime per 100,000 White population",
                    "color": "#ec747b",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 18,
                    "isChild": false,
                    "id": 45,
                  },
                ]
              },
              {
                "title": "Property Crime Arrests Gap",
                "color": "#ec747b",
                "hover": "",
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "level": 3,
                "fontSize": 10,
                "f_id": 6,
                "id": 19,
                "isChild": false,
                "children": [
                  {
                    "title": "Rate of Arrests for Property Crime per 100,000 Black population",
                    "color": "#FCEFC1",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 19,
                    "isChild": false,
                    "id": 46,
                  },
                  {
                    "title": "Rate of Arrests for Property Crime per 100,000 White population",
                    "color": "#FCEFC1",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 19,
                    "id": 47,
                    "isChild": false,
                  },
                ]
              },
              {
                "title": "Incarceration Gap",
                "color": "#ec747b",
                "hover": "",
                "level": 3,
                "fontSize": 10,
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "f_id": 6,
                "id": 20,
                "isChild": false,
                "children": [
                  {
                    "title": "Percentage of Blacks Incarcerated in Jails or Prisons",
                    "color": "#FCEFC1",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 20,
                    "isChild": false,
                    "id": 48,
                  },
                  {
                    "title": "Percentage of Whites Incarcerated in Jails or Prisons",
                    "color": "#FCEFC1",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 20,
                    "isChild": false,
                    "id": 49,
                  },
                ]
              },
              {
                "title": "Homicide Fatalities Gap",
                "color": "#ec747b",
                "hover": "",
                "fontSize": 10,
                "level": 3,
                "f_id": 6,
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "id": 21,
                "isChild": false,
                "children": [
                  {
                    "title": "Rate of homicide-related deaths per 100,000 Black population",
                    "color": "#FCEFC1",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 21,
                    "isChild": false,
                    "id": 50,
                  },
                  {
                    "title": "Rate of homicide-related deaths per 100,000 White population",
                    "color": "#FCEFC1",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "isChild": false,
                    "f_id": 21,
                    "id": 51,
                  },
                ]
              },
              {
                "title": "Firearm Fatalities Gap",
                "color": "#ec747b",
                "hover": "",
                "fontSize": 10,
                "level": 3,
                "isHover": false, // 自己是否被触碰
                "isChildHover": false, // 子元素是否被触发
                "f_id": 6,
                "id": 22,
                "isChild": false,
                "children": [
                  {
                    "title": "Rate of firearm-related deaths per 100,000 Black population",
                    "color": "#FCEFC1",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 22,
                    "isChild": false,
                    "id": 52,
                  },
                  {
                    "title": "Rate of firearm-related deaths per 100,000 White population",
                    "color": "#FCEFC1",
                    "hover": "",
                    "isHover": false, // 自己是否被触碰
                    "isChildHover": false, // 子元素是否被触发
                    "level": 4,
                    "f_id": 22,
                    "isChild": false,
                    "id": 53,
                  },
                ]
              },
            ]
          },
        ]
      }
    }
  },
  computed: {
    leftDatas() {
      const children = this.nodeData.children || []
      const len = children.length
      return []
    },
    rightDatas() {
      const children = this.nodeData.children || []
      const len = children.length
      return children
    }
  },
  methods: {
    toPage(title) {
      const name = title.split(" ").join("-")
      this.$router.push({
        path: `/Body/${name}`,
      })
    },
    mouseColor(id) {
      if (this.nodeData.id === id) {
        this.nodeData.isHover = true
      }
    },
    mouseLevel(id) {
      if (this.nodeData.id === id) {
        this.nodeData.isHover = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$border-color-primary: #B5BDC4;
$color-primary: #49B8A3;
$color-black: #000000;

@mixin rightHorizonLine {
  content: "←";
  position: absolute;
  font-size: 10px;
  top: 49%;
  color: #A6AFB7;
  left: 0;
  width: 10px;
}

@mixin leftHorizonLine {
  @include rightHorizonLine;
  left: auto;
  right: 0;
}

.patho-tab {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  &__body {
    user-select: none;
    overflow: hidden;
    flex-grow: 1;
  }

  .patho-chart {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    //padding: 2em 0;
    width: max-content;
    cursor: pointer;

    .patho-chart__section {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      flex-basis: auto;

      &.patho-chart__section_right {
        position: relative;
        padding: 0 0 0 10px;

        &::before {
          @include rightHorizonLine
        }
      }

      &.patho-chart__section_left {
        position: relative;
        direction: rtl;
        text-align: left;
        justify-content: flex-end;
        padding: 0 10px 0 0;

        &::before {
          @include leftHorizonLine;
        }
      }
    }

    .root-node {
      background: #FA663E;
      font-size: 14px;
      color: $color-black;
      font-weight: bold;
      text-align: center;
      border-radius: 6px;
      padding: 20px 25px;
    }

    .root-node:hover {
      background-color: #7C3979;
      color: aliceblue;
    }

  }
}

::v-deep .el-scrollbar__view {
  min-height: 100%;
}


.patho-tab__no-datas {
  margin-top: 20%;
  text-align: center;

  &_icon {
    width: 200px;
  }

  //&_text {
  //  @include noDatas;
  //}
}

.patho-chart-enter-active,
.patho-chart-leave-active {
  transition: opacity .5s;
}

.patho-chart-enter,
.patho-chart-leave-to {
  opacity: 0;
}

.patho-chart-enter-to,
.patho-chart-leave {
  opacity: 1;
}
</style>
