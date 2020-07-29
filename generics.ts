interface IContainer<T> {
  title: string;
  contents: T;
}

const numContainer: IContainer<number> = {
  title: 'numContainer',
  contents: 42
};

const stringContainer: IContainer<string> = {
  title: 'stringContainer',
  contents: 'hello there'
};
