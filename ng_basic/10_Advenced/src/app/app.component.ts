import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './ref.directive';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // modal = false;
  @ViewChild(RefDirective, {static: false}) refDir: RefDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title
  ) {
    this.title.setTitle('App Component Page!!!');
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear();

    const component = this.refDir.containerRef.createComponent(modalFactory);

    component.instance.title = 'Dynamic Title';
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }
}

