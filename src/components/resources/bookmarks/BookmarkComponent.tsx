import edit from '../../../assets/edit.svg'
const BookmarkComponent = () => {
    return (
        <article className='flex'>
            <div className='w-full'>
                <h4>titulo</h4>
                <p>Descripcion</p>
            </div>
            <img src={edit} alt="edit" className='w-[15px]' />
        </article>
    );
}

export default BookmarkComponent;
