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


class Page extends Component<InterComponent> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};