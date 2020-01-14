<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    meta: {
      type: Object,
      default: () => {
        return {
          title: '',
          icon: ''
        }
      }
    }
  },
  render(h, context) {
    const { icon, title } = context.props.meta
    const vnodes = []

    // if (icon) {
    //   vnodes.push('<svg-icon icon-class={icon}/>')
    // }
    //
    // if (title) {
    //   vnodes.push(<span slot='title'>{(title)}</span>)
    // }
      if (icon) {
        vnodes.push(h('svg-icon', {
            props: {
                iconClass: icon
            }
        }))
      }
      if (title) {
        vnodes.push(h('span',title))
      }
    return vnodes
  }
}
</script>
