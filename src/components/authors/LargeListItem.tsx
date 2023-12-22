import { AuthorsType } from "../../data/authors";

const LargeAuthorListItem = ({ author }: { author: AuthorsType }) => {
  return (
    <>
      <h2>{author.name}</h2>
      <p>Age : {author.age} Years Old</p>
      <p>Country : {author.country}</p>
      <ul>
        {author.books.map((book) => {
          return <li key={book}>{book}</li>;
        })}
      </ul>
    </>
  );
};

export default LargeAuthorListItem;
