<template>
  <div class="grid clearfix">
      <div class="grid-item" v-for="sk in skills">
          <div class="grid-content">
              <h3 class="item-title">
                  <i class="icon icon-tags"></i>
                  {{{sk.summary | marked }}}
              </h3>
              <dl class="details" >
                      <dt v-for="desc in sk.description">{{{desc | marked}}}</dt>
              </dl>
          </div>
      </div>
  </div>
</template>

<script>
import Resume from '../resume.json';

export default {
  data() {
    return {
      skills: Resume.skill,
    };
  },
};
</script>


<style lang="stylus" scoped>
@require '../assets/stylus/style.styl'

.grid
  display: flex
  flex-wrap: wrap

.grid-item
  width: 50%
  margin-top: 1em
  box-sizing: border-box
  

  &:nth-child(odd)
    padding-right: .75em

  &:nth-child(even)
    padding-left: .75em

.grid-content
  flex: 1
  align-self: flex-start

      
dt
  display: list-item
  list-style-type: square
  
a
  color: $code-color
  font-weight: $font-weight-bold

.icon
  @extend $icon
    
.details
    margin-top: 8px
    margin-left: 18px 
</style>