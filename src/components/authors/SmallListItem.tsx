import { AuthorsType } from "../../data/authors";

const SmallAuthorListItem = ({ author }: { author: AuthorsType }) => {
  return (
    <p>
      {author.name} Age : {author.age} Years Old
    </p>
  );
};

export default SmallAuthorListItem;
