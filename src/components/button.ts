
import { VNode } from '../core/prototype'
import { LayoutNode } from '../core/prototype'
import { ThemeNode } from '../core/prototype'
import { ComponentAssets } from '../core/component-assets'


const TAG = 'button'

class Button extends VNode {
  constructor () {
    super(TAG)
  }

}


class ButtonHTML extends LayoutNode<Button> {

  constructor () {
    super(TAG)
  }

  render(node: Button): string {
    const children = node.children || []
    const childrenRendered = children.map(child => child.render()).join('\n')

    return `<button>${childrenRendered} </button>`
  }
}


class ButtonWXML extends LayoutNode<Button> {

  constructor () {
    super(TAG)
  }

  render(node: Button): string {
    const children = node.children || []
    const childrenRendered = children.map(child => child.render()).join('\n')
    return `<button>${childrenRendered} </button>`
  }

}

class ButtonTheme extends ThemeNode<Button> {

  constructor () {
    super(TAG)
  }

  inject(node: Button): Button {
    const themeClasses = ['zephyr-component', `zephyr-${TAG}`]
    themeClasses.forEach(cls => node.addCustomClass(cls))
    return node
  }
}

export function install (assets: ComponentAssets): void {
  assets.defineVNode(TAG, Button)
  assets.defineLayoutNode('html', new ButtonHTML)
  assets.defineLayoutNode('wxml', new ButtonWXML)
  assets.defineThemeNode('zephyr', new ButtonTheme)
}

  