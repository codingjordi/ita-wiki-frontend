import BookmarkComponent from './BookmarkComponent';

const BookMarkList = () => {
    return (
        <div>
            <h3 className="text-[22px] font-bold">Lista de lectura</h3>
            {/* AQUI VA EL MAP */}
            <BookmarkComponent />
        </div>
    );
}

export default BookMarkList;
