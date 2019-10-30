import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';


@Component({
  tag: 'sub-component',
  shadow: true
})
export class SubComponent {

  @Prop()
  textContent: string = null;

  @Prop()
  reference: any = null;

  @Event()
  deleted: EventEmitter;

  deleteMe() {
    this.deleted.emit({ value: this.reference });
  }

  render() {
    return (
      <div>
        {this.textContent}
        <button onClick={() => this.deleteMe()}>Delete Me</button>
      </div>
    );
  }
}
