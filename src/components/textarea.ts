
import { VNode } from '../core/prototype'
import { LayoutNode } from '../core/prototype'
import { ThemeNode } from '../core/prototype'
import { ComponentAssets } from '../core/component-assets'


const TAG = 'textarea'

class Textarea extends VNode {
  constructor () {
    super(TAG)
  }

}


class TextareaHTML extends LayoutNode<Textarea> {

  constructor () {
    super(TAG)
  }

  render(node: Textarea): string {
    const children = node.children || []
    const childrenRendered = children.map(child => child.render()).join('\n')

    return `<textarea>${childrenRendered} </textarea>`
  }
}


class TextareaWXML extends LayoutNode<Textarea> {

  constructor () {
    super(TAG)
  }

  render(node: Textarea): string {
    const children = node.children || []
    const childrenRendered = children.map(child => child.render()).join('\n')
    return `<textarea>${childrenRendered} </textarea>`
  }

}

class TextareaTheme extends ThemeNode<Textarea> {

  constructor () {
    super(TAG)
  }

  inject(node: Textarea): Textarea {
    const themeClasses = ['zephyr-component', `zephyr-${TAG}`]
    themeClasses.forEach(cls => node.addCustomClass(cls))
    return node
  }
}

export function install (assets: ComponentAssets): void {
  assets.defineVNode(TAG, Textarea)
  assets.defineLayoutNode('html', new TextareaHTML)
  assets.defineLayoutNode('wxml', new TextareaWXML)
  assets.defineThemeNode('zephyr', new TextareaTheme)
}

  