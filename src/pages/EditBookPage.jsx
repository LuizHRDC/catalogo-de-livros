import { useParams } from "react-router-dom";
import EditBook from "../components/EditBook/EditBook";

const EditBookPage = () => {
  const { id } = useParams();

  return (
    <div>
      <EditBook bookId={id} onSave={() => console.log("Livro atualizado!")} />
    </div>
  );
};

export default EditBookPage;
