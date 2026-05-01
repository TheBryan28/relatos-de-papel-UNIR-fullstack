const lybrarySection = ({ books }) => {
return (
<div>
        <h2 className="text-xl font-bold mb-3">BIBLIOTECA DIGITAL</h2>

        <div className="grid grid-cols-3 gap-6">
        {books.map(book => (
            <div
            key={book.id}
            className="rounded-[14px] border border-(--line) bg-(--panel) p-4"
            >
            <div className="h-40 bg-(--bg-color) mb-3 rounded" />

            <p className="font-semibold">{book.title}</p>
            <p className="text-sm text-(--txt-secondary)">
                {book.author}
            </p>

            <button className="mt-3 w-full rounded bg-black text-white py-2">
                LEER ONLINE
            </button>
            </div>
        ))}
        </div>
    </div>
);
};


export default lybrarySection;