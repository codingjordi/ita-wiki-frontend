import bookmarkFull from "../../assets/bookmark_full.svg"
import bookmarkEmpty from "../../assets/Bookmark_empty.svg"

const BookmarkIconComponent = (marked: boolean) => {
    return (
        <div className="flex items-center justify-start gap-2 max-h-12">
            {marked ? (
                <img src={bookmarkEmpty} height={16} alt="bookmark none" />
            ) : (
                <img src={bookmarkFull} height={16} alt="bookmark on" />
            )}

        </div>
    );
}

export default BookmarkIconComponent;
