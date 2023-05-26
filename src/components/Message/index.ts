import { createVNode, render, type VNode } from 'vue';
import MessageVue from './message.vue';
type MessageType = 'success' | 'info' | 'warn' | 'error';
export interface MessageOption {
  type: MessageType;
  content: string;
  duration?: number;
}

// message - 单例
class SingletonMessage {
  private node: HTMLElement | null = null;
  private timer: number | null = null;
  private duration: number = 0;
  private vNode: VNode | null = null;
  private removeMessage(node: HTMLElement) {
    const target = this.vNode?.el as HTMLElement;
    if (target) {
      target.classList.add('cw-message-leave');
      target.addEventListener('animationend', () => {
        render(null, node);
        this.node = null;
        document.body.removeChild(node);
      });
    }
  }
  private createMessage(option: MessageOption) {
    if (this.node) return;
    this.node = document.createElement('div');
    this.node.setAttribute('class', 'message-wrapper');
    document.body.appendChild(this.node);
    this.duration = option.duration ?? 2000;
    this.vNode = createVNode(MessageVue, { ...option });
    render(this.vNode, this.node);

    // auto remove after [duration]
    this.timer && clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.removeMessage(this.node as HTMLElement);
    }, this.duration);
  }
  public success(option: string | Omit<MessageOption, 'type'>) {
    if (typeof option === 'string') {
      this.createMessage({ content: option, type: 'success' });
    } else {
      this.createMessage({ ...option, type: 'success' });
    }
  }
  public error(option: string | Omit<MessageOption, 'type'>) {
    if (typeof option === 'string') {
      this.createMessage({ content: option, type: 'error' });
    } else {
      this.createMessage({ ...option, type: 'error' });
    }
  }
  public warn(option: string | Omit<MessageOption, 'type'>) {
    if (typeof option === 'string') {
      this.createMessage({ content: option, type: 'warn' });
    } else {
      this.createMessage({ ...option, type: 'warn' });
    }
  }
  public info(option: string | Omit<MessageOption, 'type'>) {
    if (typeof option === 'string') {
      this.createMessage({ content: option, type: 'info' });
    } else {
      this.createMessage({ ...option, type: 'info' });
    }
  }
}

export default new SingletonMessage();
