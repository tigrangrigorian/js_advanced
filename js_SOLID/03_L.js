// Liskov Substitution Principle

// 1 ------------------------------------------------------------------
class Person {}

class Member extends Person{
  access() {
    console.log('You have access...');
  }
}

class Guest extends Person{
  isGuest = true
}

class FrontEnd extends Member{
  canCreateFrontend() {}
}

class Backend extends Member{
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest{
  access() {
    throw new Error('Yo don\'t have access!!!')
  }
}

function openSecretDoor(member) {
  member.access();
}

openSecretDoor(new FrontEnd())
openSecretDoor(new Backend())
openSecretDoor(new PersonFromDifferentCompany()) // There should be member

// 2 ------------------------------------------------------------------

class Component {
  isComponent = true;
}

class ComponentWidthTemplate {
  render() {
    return `<div>Component</div>`
  }
}

class HigherOrderComponent extends Component{

}

class HeaderComponent extends ComponentWidthTemplate{
  onInit() {}
}

class FooterComponent extends ComponentWidthTemplate{
  afterInit() {}
}

class HOC extends HigherOrderComponent{
  render() {
    throw new Error('Render is impossible hear')
  }

  wrapComponent(component) {
    component.wrapped = true;
    return component
  }
}

function renderComponent(component) {
  return component.render()
}

console.log(renderComponent(new HeaderComponent()));
console.log(renderComponent(new FooterComponent()));



























