/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/



interface InterComponent {
  title: string,
}
class Component<T> {
  constructor(public props: T) {
    
  }
}
interface PageComponent extends InterComponent{
title: string;
}

class Page extends Component<PageComponent> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};