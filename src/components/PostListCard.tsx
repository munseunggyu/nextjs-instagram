'use client';

import { Comment, SimplePost } from '@/model/post';
import Image from 'next/image';
import { useState } from 'react';
import Avatar from './Avatar';
import HeartIcon from './ui/icons/HeartIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import { parseDate } from '@/util/date';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';
// import usePosts from '@/hooks/posts';
// import ActionBar from './ActionBar';
// import PostDetail from './PostDetail';
// import PostModal from './PostModal';
// import PostUserAvatar from './PostUserAvatar';
// import ModalPortal from './ui/ModalPortal';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, comments, text, createdAt } = post;
  const [openModal, setOpenModal] = useState(false)
  const handlePostComment = () => {}
  return (
    <article className='rounded-lg shadow-md border border-gray-200'>
      <Avatar image={userImage} />
      <span>{username}</span>
      <Image 
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500} 
        onClick={() => setOpenModal(true)}
      />
      <ActionBar post={post} onComment={handlePostComment}>
        <p>
          <span className='font-bold mr-1'>{username}</span>
          {text}
        </p>
        {comments > 1 && (
          <button
            className='font-bold my-2 text-sky-700'
            onClick={() => setOpenModal(true)}
          >{`View all ${comments} comments`}</button>
        )}
      </ActionBar>
      {
        openModal && <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            {/* <div className='fixed top-0 left-0 w-full h-full bg-slate-500 z-50'> */}
              포스트 상세페이지
            {/* </div> */}
          </PostModal>
        </ModalPortal>
      }
    </article>
  );
}
