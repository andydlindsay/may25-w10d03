interface IAuthor {
  id?: number;
  firstName: string;
  penName: string;
  isActive: boolean;
  createdAt?: Date;
}

const myAuthor: IAuthor = {
  firstName: 'Stephen',
  penName: 'Richard Bachman',
  isActive: false
};

const authors: IAuthor[] = [];
authors.push(myAuthor);
