import { Component, h, State } from '@stencil/core';


@Component({
  tag: 'app-root',
  shadow: true
})
export class AppRoot {

  @State()
  children: any[] = [];

  addChild() {
    this.children.push({});
    this.children = [].concat(this.children);
  }

  deleteChild(childToDelete) {
    this.children = this.children.filter(child => child !== childToDelete);
  }

  render() {
    return (
      <div>
        <div class="btn-container">
          <button onClick={() => this.addChild()}>Add a Child</button>
        </div>
        {
          this.children.map((child, index) => {
            return <sub-component
              reference={child}
              textContent={`Hello, I am Index #${index}`}
              onDeleted={(event) => this.deleteChild(event.detail.value)}
            >
            </sub-component>
          })
        }
      </div>
    );
  }
}
