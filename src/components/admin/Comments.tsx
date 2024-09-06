import React from 'react';

// Define the type for the props
interface CommentProps {
    author: string;
    date: string;
    attachmentName: string;
    onDownload: () => void;
}

const Comments = ({ author, date, attachmentName, onDownload }: CommentProps) => {
    return (
        <div className="border p-6 flex flex-col gap-y-2">
            <div className='flex justify-between items-center'>
                <span className='text-black'>{author}</span>
                <span>{date}</span>
            </div>
            <div>
                {attachmentName}
            </div>
            <button
                className="mt-2 text-blue-500 hover:underline"
                onClick={onDownload}
            >
                Download Attachment
            </button>
        </div>
    )
}

export default Comments;
