import { AiFillHome } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';

export default function HomeIcon({isFill}: {isFill: Boolean}) {
  if(isFill) {
    return (
      <AiFillHome className="w-7 h-7" />
    )
  }

  return (
    <AiOutlineHome className="w-7 h-7" />
  )
}
