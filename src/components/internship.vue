<template>
    <div>
        <div class="item" v-for='intern in internship'>
            <div class="content">
                <header class="expr-title">
                    <div class="info">
                        <h3 class="company">{{intern.company}}</h3>
                        <h4 class="summary">{{{intern.summary}}}</h4>
                    </div>
                    <aside class="timeline">
                        <time>{{intern.start}} ~  {{intern.end || 至今}}</time>
                    </aside>
                </header>
                <dl class="details">
                    <dt v-for=" desc in intern.description">
                        {{{desc |  marked | urlTarget '_blank'}}}
                    </dt>
                </dl>
            </div>
        </div>
    <div>
</template>

<script>

export default {
  props: ['internship'],
  // data() {
  //   return {
  //     internship: Resume.internship,
  //   };
  // },
};
</script>




<style lang="stylus" scoped>
@require '../assets/stylus/style.styl'

.expr-title
    @extend $justify
    font-size: 16px

.company
.summary
    flex: 1

.summary
    color: $code-color


.timeline
  font-weight: $font-weight-bold

      
dt
  display: list-item
  list-style-type: square
  

  a
    color: $code-color
    font-weight: $font-weight-bold

.details
    margin-top: 8px
    margin-left: 18px 

.content
  margin-top: 8px
        
</style>