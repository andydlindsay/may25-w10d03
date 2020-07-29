interface IAuthor {
  id?: number;
  firstName: string;
  penName?: string;
  isActive?: boolean;
  createdAt?: Date;
  writeBook: (a: string) => boolean
}

const author: IAuthor = {
  firstName: 'Alice',
  writeBook: (title: string) => {
    return true;
  }
};

const higherOrderFn = (cb: (a: number) => boolean) => {
  cb(42);
}
