<template>
  <div :class="{left: isLeft}" class="node-item">
    <div v-if="!isLeaf" class="node-item_not-leaf">
      <div
          :style="{background: nodes.color || LEVEL_COLORS[nodes.level] || LEVEL_COLORS[3],fontSize:nodes.fontSize+'px',fontWeight:nodes.fontWeight}"
          class="node-name" @click="getName(nodes.title)">
        <div class="columns">
          {{ nodes.title }}
          <!--          <span v-for="item in titles" style="text-align: center">{{ item }}</span>-->
        </div>
      </div>
      <div class="node-children">
        <patho-node v-for="(childNode, i) in nodes.children" :key="nodes.id"
                    :isLeft="isLeft" :node="childNode"
        />

      </div>
    </div>
    <div v-else class="node-item_leaf">
      <el-popover
          :width="440"
          placement="right"
          popper-class="popover"
          title=""
          trigger="hover"
      >
        <template #reference>
          <div
              :style="{background: nodes.color || LEVEL_COLORS[nodes.level] || LEVEL_COLORS[3]}"
              class="node-name" @click="getName1(nodes.title)" @mouseover="mouseColor(nodes.id)">
            <div class="columns">
              <!--              <span v-for="item in titles">{{ item }}</span>-->
              {{ nodes.title }}
            </div>
          </div>
        </template>
        <div>
          <div v-for="item in contents" class="tag_class">
            <el-check-tag checked>
              <div class="columns" style="font-size: 12px">
                <!--                <span v-for="items in setTitle(item.title)">{{ items }}</span>-->
                {{ item.title }}
              </div>
            </el-check-tag>
          </div>
        </div>
      </el-popover>

    </div>
  </div>
</template>

<script>

const LEVEL_COLORS = {
  1: '#1A4843',
  2: '#464885',
  3: '#46857E',
  4: '#857146',
  5: '#6A8546',
  6: '#854646',
  7: '#818076',
  8: '#979B33',
  9: '#336E9B',
  10: '#854683'
}
export default {
  name: 'PathoNode',
  props: {
    node: {
      type: Object,
      default() {
        return {}
      }
    },
    nodeDatas: {
      type: Object,
      default() {
        return {};
      }
    },
    isLeft: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      LEVEL_COLORS,
      currentId: 0,
      nodes: {},
      nodeDates: {},
      contents: [],
      title: "",
    }
  },
  computed: {
    isLeaf() {
      return !(this.node.children && this.nodes.isChild)
    },
    titles() {
      if (!this.nodes.title) return ""
      const words = this.nodes.title.split(" ")
      let result = [];
      for (let i = 0; i < words.length; i += 2) {
        // 确保不会越界
        if (i + 1 < words.length) {
          result.push([words[i], words[i + 1]].join(" "));
        } else {
          // 如果单词数量是奇数，最后一个单词将单独成为一个数组元素（可选处理）
          result.push([words[i]].join(" "));
        }
      }
      return result
    }
  },
  created() {
    this.$nextTick(() => {
      this.nodes = this.node
      this.nodeDates = this.nodeDatas
    })
  },
  methods: {
    getName(e) {
      console.log(e)
      this.$emit('toPage', e)
      this.toPage(e)
    },
    toPage(title) {
      const name = title.split(" ").join("-")
      console.log(name)
      this.$router.push({
        path: `/Body/${name}`,
      })
    },
    setTitle(title) {
      if (!this.nodes.title) return ""
      const words = title.split(" ")
      let result = [];
      for (let i = 0; i < words.length; i += 2) {
        // 确保不会越界
        if (i + 1 < words.length) {
          result.push([words[i], words[i + 1]].join(" "));
        } else {
          // 如果单词数量是奇数，最后一个单词将单独成为一个数组元素（可选处理）
          result.push([words[i]].join(" "));
        }
      }
      return result
    },
    mouseColor(id) {
      this.title = this.nodes.title
      this.contents = this.nodes.children
    },
    mouseLevel(id) {
      if (this.nodes.level !== 3) return
      this.nodes.children.forEach((node) => {
        node.isChild = false
      })
    },
    getName1(e) {
      const name = e.split(" ").join("-")
      console.log(name)
      this.$router.push({
        path: `/Body/${name}`,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color-primary: #B5BDC4;
$text-color-primary: #b4babf;
$color-black: #000000;
@mixin firstNode {
  position: relative;
  border: none;
}

@mixin rightNode {
  position: relative;
  padding-left: 10px;
  border-left: 1px solid $border-color-primary;
}

@mixin leftNode {
  position: relative;
  padding: 0;
  padding-right: 10px;
  border: none;
  border-right: 1px solid $border-color-primary;
}

@mixin rightHorizonLine {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 10px;
  border-top: 1px solid $border-color-primary;
}

@mixin rightThird {
  content: "←";
  position: absolute;
  top: 45%;
  font-size: 10px;
  left: 0;
  transform: translate(0, -6%);
  color: #A6AFB7;
  width: 10px;
}

@mixin rightThird3 {
  content: "←";
  position: absolute;
  top: 40%;
  font-size: 10px;
  left: 0;
  color: #A6AFB7;
  width: 10px;
}

@mixin rightThird4 {
  content: "←";
  position: absolute;
  top: 40%;
  font-size: 10px;
  left: 0;
  color: #A6AFB7;
  width: 10px;
}

@mixin rightThird5 {
  content: "←";
  position: absolute;
  top: 40%;
  font-size: 10px;
  left: 0;
  color: #A6AFB7;
  width: 10px;
}

@mixin leftHorizonLine {
  @include rightHorizonLine;
  left: auto;
  right: 0;
}

@mixin beforeRightFirstChild {
  bottom: 0;
  border-radius: 4px 0 0 0;
  border-left: 1px solid $border-color-primary;
}

@mixin beforeRightLastChild {
  left: 0;
  top: 0;
  bottom: 50%;
  border-radius: 0 0 0 4px;
  border: none;
  border-left: 1px solid $border-color-primary;
  border-bottom: 1px solid $border-color-primary;
}

// 左边第一个child
@mixin beforeLeftFirstChild {
  @include beforeRightFirstChild;
  border: none;
  border-radius: 0 4px 0 0;
  border-top: 1px solid $border-color-primary;
  border-right: 1px solid $border-color-primary;
}

// 左边最后一个child
@mixin beforeLeftLastChild {
  @include beforeRightLastChild;
  border-radius: 0 0 4px 0;
  border: none;
  border-right: 1px solid $border-color-primary;
  border-bottom: 1px solid $border-color-primary;
}

@mixin beforeRightOnlyOneChild {
  left: 0;
  top: 50%;
  bottom: auto;
  border: 0;
  border-radius: 0;
  border-top: 1px solid $border-color-primary;
}

@mixin beforeLeftOnlyOneChild {
  @include beforeRightOnlyOneChild;
  left: auto;
  right: 0;
}

.node-item {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  @include rightNode;

  &::before {
    @include rightHorizonLine;
  }

  &:first-child {
    @include firstNode;

    &::before {
      @include beforeRightFirstChild;
    }
  }

  &:last-child {
    border-left: none;

    &::before {
      @include beforeRightLastChild;
    }
  }

  &:first-child:last-child {
    border-left: none;
  }

  &:first-child:last-child::before {
    @include beforeRightOnlyOneChild;
  }

  // node 节点
  .node-name {
    flex-shrink: 0;
    //display: inline-block;
    display: flex;
    justify-content: center;
    font-size: 10px;
    //border-radius: 1px;
    margin: 2px 0;
    padding: 5px 5px;
    line-height: 20px;
    height: auto;
    border-radius: 3px;
    color: $color-black;
    width: 160px;
    min-width: 100px;

    &.round {
      width: 64px;
      height: 64px;
      padding: 0;
      border-radius: 50%;
      line-height: 64px;
      text-align: center;
    }
  }

  .node-name:hover {
    background-color: #7C3979 !important;
    color: aliceblue !important;
  }

  .node-children {
    @include rightNode;
    border-left: none;

    &::before {
      @include rightThird;
    }
  }

  .node-childrens {
    content: "←";
    position: absolute;
    top: 45%;
    font-size: 10px;
    left: 0;
    transform: translate(0, -6%);
    color: #A6AFB7;
    width: 10px;
    border: red solid 1px;
  }

  .node-children3 {
    @include rightNode;
    border-left: none;

    &::before {
      @include rightThird3;
    }
  }

  .node-children4 {
    @include rightNode;
    border-left: none;

    &::before {
      @include rightThird4;
    }
  }

  .node-children5 {
    @include rightNode;
    border-left: none;

    &::before {
      @include rightThird5;
    }
  }

  .node-item_not-leaf {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &::before {
      border-left: 1px solid $border-color-primary;
    }
  }

  .node-item_leaf {
    .node-name {
      background: $color-black;
      color: black;
      margin-right: 20px;
    }
  }

  &.left {
    @include leftNode;

    &::before {
      @include leftHorizonLine;
    }

    &:first-child {
      @include firstNode;
    }

    &:first-child::before {
      @include beforeLeftFirstChild;
    }

    &:last-child {
      border: none;

      &::before {
        @include beforeLeftLastChild;
      }
    }

    &:first-child:last-child {
      border-right: none;
    }

    &:first-child:last-child::before {
      @include beforeLeftOnlyOneChild;
    }

    .node-item_not-leaf {
      &::before {
        border: none;
        border-right: 1px solid $border-color-primary;
      }
    }

    .node-name {
      &::after {
        content: '\200E';
      }
    }

    .node-children {
      @include leftNode;
      border-right: none;

      &::before {
        @include leftHorizonLine;
      }
    }

    .node-item_leaf {
      .node-name {
        margin-right: 0;
        margin-left: 20px;
      }
    }
  }

  // transition
  .node-fade-enter-acitve, .node-fade-leave-active {
    transition: all .5s;
  }

  .node-fade-enter, .node-fade-leave-to {
    opacity: 0;
  }

  .node-fade-enter-to, .node-fade-leave {
    opacity: 1;
  }
}

.tag_class {
  padding: 5px;
}

.columns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-wrap: nowrap;
}

.popover {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
